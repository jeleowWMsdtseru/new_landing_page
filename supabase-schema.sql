-- =====================================================
-- Supabase Database Schema for AI Workshop Landing Page
-- =====================================================

-- Create the workshop_registrations table
CREATE TABLE workshop_registrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    company VARCHAR(255),
    workshop_date VARCHAR(50) NOT NULL,
    experience_level VARCHAR(50) NOT NULL,
    hrdf_claim BOOLEAN DEFAULT FALSE,
    payment_status VARCHAR(50) DEFAULT 'pending',
    payment_amount DECIMAL(10,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_workshop_registrations_email ON workshop_registrations(email);
CREATE INDEX idx_workshop_registrations_workshop_date ON workshop_registrations(workshop_date);
CREATE INDEX idx_workshop_registrations_created_at ON workshop_registrations(created_at DESC);
CREATE INDEX idx_workshop_registrations_payment_status ON workshop_registrations(payment_status);

-- Add comments for documentation
COMMENT ON TABLE workshop_registrations IS 'Stores workshop registrations from the landing page';
COMMENT ON COLUMN workshop_registrations.id IS 'Unique identifier for each registration';
COMMENT ON COLUMN workshop_registrations.name IS 'Participant full name';
COMMENT ON COLUMN workshop_registrations.email IS 'Participant email address (unique)';
COMMENT ON COLUMN workshop_registrations.phone IS 'Participant phone number';
COMMENT ON COLUMN workshop_registrations.company IS 'Participant company/organization (optional)';
COMMENT ON COLUMN workshop_registrations.workshop_date IS 'Selected workshop date identifier';
COMMENT ON COLUMN workshop_registrations.experience_level IS 'Programming experience level (beginner/intermediate/advanced)';
COMMENT ON COLUMN workshop_registrations.hrdf_claim IS 'Whether participant wants to claim under HRDF';
COMMENT ON COLUMN workshop_registrations.payment_status IS 'Payment status (pending/paid/cancelled)';
COMMENT ON COLUMN workshop_registrations.payment_amount IS 'Payment amount in RM';
COMMENT ON COLUMN workshop_registrations.created_at IS 'When the registration was created';
COMMENT ON COLUMN workshop_registrations.updated_at IS 'When the record was last updated';

-- Enable Row Level Security (RLS)
ALTER TABLE workshop_registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for the landing page form)
CREATE POLICY "Allow public registration inserts" ON workshop_registrations
    FOR INSERT TO anon
    WITH CHECK (true);

-- Create policy to allow authenticated users to read all registrations
CREATE POLICY "Allow authenticated reads" ON workshop_registrations
    FOR SELECT TO authenticated
    USING (true);

-- Create policy to allow authenticated users to update/delete
CREATE POLICY "Allow authenticated updates" ON workshop_registrations
    FOR UPDATE TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated deletes" ON workshop_registrations
    FOR DELETE TO authenticated
    USING (true);

-- =====================================================
-- Workshop Management Tables
-- =====================================================

-- Create workshop_dates table for managing available dates
CREATE TABLE workshop_dates (
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

-- Insert default workshop dates
INSERT INTO workshop_dates (id, date_label, start_date, end_date, max_participants, price) VALUES
    ('march-23-24', 'March 23-24, 2024 (Weekend)', '2024-03-23', '2024-03-24', 20, 1200.00),
    ('april-13-14', 'April 13-14, 2024 (Weekend)', '2024-04-13', '2024-04-14', 20, 1200.00);

-- Create trigger to update participant count
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
$$ language 'plpgsql';

CREATE TRIGGER update_workshop_participant_count
    AFTER INSERT OR DELETE ON workshop_registrations
    FOR EACH ROW
    EXECUTE FUNCTION update_participant_count();

-- =====================================================
-- Useful Queries (for reference)
-- =====================================================

-- Count total registrations
-- SELECT COUNT(*) as total_registrations FROM workshop_registrations;

-- Get registrations by workshop date
-- SELECT 
--     wd.date_label,
--     COUNT(wr.id) as registrations,
--     wd.max_participants,
--     (wd.max_participants - COUNT(wr.id)) as available_slots
-- FROM workshop_dates wd
-- LEFT JOIN workshop_registrations wr ON wd.id = wr.workshop_date
-- GROUP BY wd.id, wd.date_label, wd.max_participants
-- ORDER BY wd.start_date;

-- Get recent registrations (last 7 days)
-- SELECT name, email, workshop_date, created_at 
-- FROM workshop_registrations 
-- WHERE created_at >= NOW() - INTERVAL '7 days'
-- ORDER BY created_at DESC;

-- Get registrations by experience level
-- SELECT 
--     experience_level,
--     COUNT(*) as count
-- FROM workshop_registrations 
-- GROUP BY experience_level
-- ORDER BY count DESC;

-- Get HRDF claims statistics
-- SELECT 
--     workshop_date,
--     COUNT(*) as total_registrations,
--     COUNT(CASE WHEN hrdf_claim = true THEN 1 END) as hrdf_claims,
--     ROUND(
--         COUNT(CASE WHEN hrdf_claim = true THEN 1 END) * 100.0 / COUNT(*), 2
--     ) as hrdf_percentage
-- FROM workshop_registrations
-- GROUP BY workshop_date;

-- =====================================================
-- Functions for automated processes
-- =====================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_workshop_registrations_updated_at 
    BEFORE UPDATE ON workshop_registrations 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- Analytics Views
-- =====================================================

CREATE VIEW workshop_analytics AS
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

CREATE VIEW workshop_availability AS
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

-- Grant access to the views
GRANT SELECT ON workshop_analytics TO authenticated, anon;
GRANT SELECT ON workshop_availability TO authenticated, anon;
GRANT SELECT ON workshop_dates TO authenticated, anon;

-- =====================================================
-- Legacy subscribers table (optional - for backward compatibility)
-- =====================================================

-- If you want to keep the old subscribers table for other purposes:
-- CREATE TABLE subscribers (
--     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
--     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
-- );
-- 
-- ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow public subscriber inserts" ON subscribers
--     FOR INSERT TO anon WITH CHECK (true); 