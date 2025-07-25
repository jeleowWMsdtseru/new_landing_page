'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function WorkshopRegistrationForm() {
  // Form field states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [experience, setExperience] = useState('');
  const [hrdfClaim, setHrdfClaim] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Check if we're in development mode with placeholder credentials
  const isDevelopmentMode = 
    process.env.NEXT_PUBLIC_SUPABASE_URL === 'your-supabase-url' ||
    process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('placeholder') ||
    !process.env.NEXT_PUBLIC_SUPABASE_URL;

  const workshopDates = [
    { id: 'august-7-8', label: '7-8 August 2025 (Weekdays)', available: true, slots: 'Available' },
    { id: 'august-9-10', label: '9-10 August 2025 (Weekend)', available: true, slots: 'Few slots left' },
    { id: 'september-8-9', label: '8-9 September 2025 (Weekdays)', available: true, slots: 'Available' }
  ];

  const experienceLevels = [
    { value: 'beginner', label: 'Beginner (New to coding)' },
    { value: 'intermediate', label: 'Intermediate (Some programming experience)' },
    { value: 'advanced', label: 'Advanced (Experienced developer)' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous states
    setError('');
    setSuccess(false);

    // Basic validation
    if (!name.trim()) {
      setError('Please enter your full name');
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    if (!phone.trim()) {
      setError('Please enter your phone number');
      return;
    }

    if (!selectedDate) {
      setError('Please select a workshop date');
      return;
    }

    if (!experience) {
      setError('Please select your experience level');
      return;
    }

    if (!agreed) {
      setError('Please agree to the terms and conditions');
      return;
    }

    setLoading(true);

    try {
      if (isDevelopmentMode) {
        // Simulate API call in development mode
        console.log('Development Mode - Workshop registration:', {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          company: company.trim(),
          selectedDate,
          experience,
          hrdfClaim,
          timestamp: new Date().toISOString()
        });
        
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Success in development mode
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setSelectedDate('');
        setExperience('');
        setHrdfClaim(false);
        setAgreed(false);
        
      } else {
        // Real Supabase submission for workshop registrations
        const { error: supabaseError } = await supabase
          .from('workshop_registrations')
          .insert([
            {
              name: name.trim(),
              email: email.trim().toLowerCase(),
              phone: phone.trim(),
              company: company.trim() || null,
              workshop_date: selectedDate,
              experience_level: experience,
              hrdf_claim: hrdfClaim,
              created_at: new Date().toISOString(),
            }
          ]);

        if (supabaseError) {
          // Handle specific Supabase errors
          if (supabaseError.code === '23505') {
            setError('This email is already registered for a workshop!');
          } else {
            setError('Something went wrong. Please try again.');
          }
          return;
        }

        // Success - clear form and show success message
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setSelectedDate('');
        setExperience('');
        setHrdfClaim(false);
        setAgreed(false);
      }

    } catch (err) {
      console.error('Form submission error:', err);
      if (isDevelopmentMode) {
        setError('Development mode error. Check console for details.');
      } else {
        setError('Network error. Please check your connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Show success message
  if (success) {
    return (
      <div className="bg-card border border-border p-8 rounded-lg shadow-xl">
        <div className="text-center">
          <div className="mb-4">
            <svg className="mx-auto h-12 w-12 text-success" fill="none" stroke="currentColor" viewBox="0 0 48 48">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            Registration Successful! 🎉
          </h2>
          <p className="text-muted-foreground mb-6">
            {isDevelopmentMode ? 
              '🔧 Demo mode: Your workshop registration was simulated! Check the browser console for details.' :
              'Thank you for registering! You\'ll receive a confirmation email with workshop details and payment instructions.'
            }
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
            <p className="text-primary text-sm">
              <strong>Next Steps:</strong><br />
              • Payment instructions will be sent via email<br />
              • Workshop materials will be provided on day 1<br />
              • Bring your laptop with charger
            </p>
          </div>
          <button
            onClick={() => setSuccess(false)}
            className="text-primary hover:text-primary/80 font-medium underline"
          >
            Register another participant
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-card-foreground mb-6">
        Secure Your Spot
      </h2>
      
      {isDevelopmentMode && (
        <div className="mb-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-primary text-sm">
            🔧 <strong>Development Mode:</strong> Workshop registrations are simulated. Set up Supabase credentials to enable real functionality.
          </p>
        </div>
      )}
      
      {error && (
        <div className="mb-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-destructive text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-3 bg-input border border-border text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:outline-none placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-3 bg-input border border-border text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:outline-none placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-3 bg-input border border-border text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:outline-none placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Company Input */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-muted-foreground mb-2">
            Company/Organization (Optional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-3 bg-input border border-border text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:outline-none placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Your company or organization"
          />
        </div>

        {/* Workshop Date Selection */}
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Select Workshop Date *
          </label>
          <div className="space-y-2">
            {workshopDates.map((date) => (
              <label key={date.id} className="flex items-center">
                <input
                  type="radio"
                  name="workshopDate"
                  value={date.id}
                  checked={selectedDate === date.id}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  disabled={loading || !date.available}
                  className="mr-3 text-primary focus:ring-ring"
                />
                <div className="flex-1">
                  <span className={`${date.available ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {date.label}
                  </span>
                  <span className={`ml-2 px-2 py-1 rounded text-xs ${
                    date.slots === 'Available' ? 'bg-success text-success-foreground' : 'bg-warning text-warning-foreground'
                  }`}>
                    {date.slots}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-muted-foreground mb-2">
            Programming Experience *
          </label>
          <select
            id="experience"
            name="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-3 bg-input border border-border text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">Select your experience level</option>
            {experienceLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>

        {/* HRDF Claim Checkbox */}
        <div className="flex items-start space-x-3 py-2">
          <input
            type="checkbox"
            id="hrdf"
            name="hrdf"
            checked={hrdfClaim}
            onChange={(e) => setHrdfClaim(e.target.checked)}
            disabled={loading}
            className="mt-1 h-4 w-4 text-primary bg-input border border-border rounded focus:ring-ring focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <label htmlFor="hrdf" className="text-sm text-muted-foreground leading-5">
            I want to claim this workshop under HRDF (Human Resources Development Fund)
          </label>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-start space-x-3 py-2">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            disabled={loading}
            className="mt-1 h-4 w-4 text-primary bg-input border border-border rounded focus:ring-ring focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <label htmlFor="terms" className="text-sm text-muted-foreground leading-5">
            I agree to the terms and conditions and confirm my workshop registration
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {loading ? 'Securing Your Spot...' : 'Register for Workshop'}
        </button>
      </form>
    </div>
  );
} 