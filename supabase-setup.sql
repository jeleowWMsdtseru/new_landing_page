-- =====================================================
-- WORKSHOP REGISTRATION SYSTEM - SUPABASE SETUP
-- =====================================================
-- Run this script in your Supabase SQL Editor

-- 1. Create the main workshop registrations table
CREATE TABLE IF NOT EXISTS workshop_registrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    company VARCHAR(255),
    workshop_date VARCHAR(50) NOT NULL,
    experience_level VARCHAR(50) NOT NULL,
    hrdf_claim BOOLEAN DEFAULT FALSE,
    payment_status VARCHAR(50) DEFAULT 'pending',
    payment_amount DECIMAL(10,2) DEFAULT 1200.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create workshop dates management table
CREATE TABLE IF NOT EXISTS workshop_dates (
    id VARCHAR(50) PRIMARY KEY,
    date_label VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    max_participants INTEGER DEFAULT 20,
    current_participants INTEGER DEFAULT 0,
    price DECIMAL(10,2) DEFAULT 1200.00,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Insert default workshop dates
INSERT INTO workshop_dates (id, date_label, start_date, end_date, max_participants, price) VALUES
    ('march-23-24', 'March 23-24, 2024 (Weekend)', '2024-03-23', '2024-03-24', 20, 1200.00),
    ('april-13-14', 'April 13-14, 2024 (Weekend)', '2024-04-13', '2024-04-14', 20, 1200.00)
ON CONFLICT (id) DO NOTHING;

-- 4. Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_workshop_registrations_email ON workshop_registrations(email);
CREATE INDEX IF NOT EXISTS idx_workshop_registrations_workshop_date ON workshop_registrations(workshop_date);
CREATE INDEX IF NOT EXISTS idx_workshop_registrations_created_at ON workshop_registrations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_workshop_registrations_payment_status ON workshop_registrations(payment_status);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE workshop_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshop_dates ENABLE ROW LEVEL SECURITY;

-- 6. Create RLS policies for public registration
-- Allow anyone to insert new registrations (for the landing page form)
DROP POLICY IF EXISTS "Allow public registration inserts" ON workshop_registrations;
CREATE POLICY "Allow public registration inserts" ON workshop_registrations
    FOR INSERT TO anon, authenticated
    WITH CHECK (true);

-- Allow anyone to read workshop dates (for displaying availability)
DROP POLICY IF EXISTS "Allow public workshop dates read" ON workshop_dates;
CREATE POLICY "Allow public workshop dates read" ON workshop_dates
    FOR SELECT TO anon, authenticated
    USING (is_active = true);

-- Allow authenticated users to read all registrations (for admin)
DROP POLICY IF EXISTS "Allow authenticated reads" ON workshop_registrations;
CREATE POLICY "Allow authenticated reads" ON workshop_registrations
    FOR SELECT TO authenticated
    USING (true);

-- Allow authenticated users to update registrations (for admin)
DROP POLICY IF EXISTS "Allow authenticated updates" ON workshop_registrations;
CREATE POLICY "Allow authenticated updates" ON workshop_registrations
    FOR UPDATE TO authenticated
    USING (true);

-- 7. Create function to update participant count automatically
CREATE OR REPLACE FUNCTION update_participant_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE workshop_dates 
        SET current_participants = current_participants + 1 
        WHERE id = NEW.workshop_date;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE workshop_dates 
        SET current_participants = current_participants - 1 
        WHERE id = OLD.workshop_date;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- 8. Create trigger to automatically update participant count
DROP TRIGGER IF EXISTS update_workshop_participant_count ON workshop_registrations;
CREATE TRIGGER update_workshop_participant_count
    AFTER INSERT OR DELETE ON workshop_registrations
    FOR EACH ROW
    EXECUTE FUNCTION update_participant_count();

-- 9. Create function to update updated_at automatically
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 10. Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_workshop_registrations_updated_at ON workshop_registrations;
CREATE TRIGGER update_workshop_registrations_updated_at 
    BEFORE UPDATE ON workshop_registrations 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- 11. Create useful views for analytics
CREATE OR REPLACE VIEW workshop_analytics AS
SELECT 
    COUNT(*) as total_registrations,
    COUNT(CASE WHEN created_at >= CURRENT_DATE THEN 1 END) as today_registrations,
    COUNT(CASE WHEN created_at >= CURRENT_DATE - INTERVAL '7 days' THEN 1 END) as week_registrations,
    COUNT(CASE WHEN created_at >= CURRENT_DATE - INTERVAL '30 days' THEN 1 END) as month_registrations,
    COUNT(CASE WHEN hrdf_claim = true THEN 1 END) as hrdf_claims,
    COUNT(CASE WHEN payment_status = 'paid' THEN 1 END) as paid_registrations,
    SUM(CASE WHEN payment_status = 'paid' THEN payment_amount ELSE 0 END) as total_revenue,
    MAX(created_at) as latest_registration,
    MIN(created_at) as first_registration
FROM workshop_registrations;

CREATE OR REPLACE VIEW workshop_availability AS
SELECT 
    wd.id,
    wd.date_label,
    wd.start_date,
    wd.end_date,
    wd.max_participants,
    wd.current_participants,
    (wd.max_participants - wd.current_participants) as available_slots,
    CASE 
        WHEN (wd.max_participants - wd.current_participants) <= 0 THEN 'Full'
        WHEN (wd.max_participants - wd.current_participants) <= 3 THEN CONCAT((wd.max_participants - wd.current_participants), ' slots left')
        ELSE 'Available'
    END as availability_status,
    wd.price,
    wd.is_active
FROM workshop_dates wd
WHERE wd.is_active = true
ORDER BY wd.start_date;

-- 12. Grant permissions for the views
GRANT SELECT ON workshop_analytics TO anon, authenticated;
GRANT SELECT ON workshop_availability TO anon, authenticated;
GRANT SELECT ON workshop_dates TO anon, authenticated;

-- =====================================================
-- VERIFICATION QUERIES
-- =====================================================
-- Run these to verify everything is working:

-- Check if tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('workshop_registrations', 'workshop_dates');

-- Check workshop dates
SELECT * FROM workshop_dates;

-- Check if RLS is enabled
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename IN ('workshop_registrations', 'workshop_dates');

-- Test the views
SELECT * FROM workshop_availability;
SELECT * FROM workshop_analytics; 