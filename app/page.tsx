import WorkshopRegistrationForm from '@/components/SubscriptionForm';

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Left Column - Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  AI Workshop 2024
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Build Your First AI App in 2 Days
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg">
                Master modern AI development with hands-on coding. Build, deploy, and launch your MVP using React, Next.js, and AI APIs.
              </p>
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    2-Day Intensive Workshop
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Build Real AI Applications
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    HRDF Claimable
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">Upcoming Dates:</h3>
                <div className="space-y-2">
                  <div className="bg-gray-800 rounded-lg p-3 border border-blue-500">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-400 font-medium">March 23-24, 2024</span>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Available</span>
                    </div>
                    <p className="text-gray-400 text-sm">Weekend Batch • 9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">April 13-14, 2024</span>
                      <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs">3 slots left</span>
                    </div>
                    <p className="text-gray-400 text-sm">Weekend Batch • 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Registration Form */}
            <div className="flex-1 max-w-md md:max-w-lg">
              <WorkshopRegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What You'll Build & Learn
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Two intensive days of hands-on coding. Walk away with real AI applications and the skills to build more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Day 1: Foundation & Setup</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Modern React & Next.js fundamentals
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Setting up AI API integrations (OpenAI, Claude)
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Database setup with Supabase
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Build your first AI chatbot
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Day 2: Advanced Features & Deployment</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Image generation & processing with AI
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  User authentication & data persistence
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Deploy to production (Vercel)
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Launch your AI app to the world
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Participants Say
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join hundreds of developers who have transformed their careers with our AI workshops.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SL
                </div>
                <div>
                  <h4 className="text-white font-semibold">Sarah Lim</h4>
                  <p className="text-gray-400 text-sm">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "This workshop completely changed how I approach development. I built my first AI-powered app in just 2 days and launched it the following week!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MT
                </div>
                <div>
                  <h4 className="text-white font-semibold">Marcus Tan</h4>
                  <p className="text-gray-400 text-sm">Business Analyst</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "As a non-technical person, I was worried about keeping up. The instructors were amazing and I actually built a working AI tool for my company!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  AK
                </div>
                <div>
                  <h4 className="text-white font-semibold">Aisha Khan</h4>
                  <p className="text-gray-400 text-sm">Product Manager</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "The hands-on approach was perfect. No boring theory - just practical skills I could use immediately. Worth every ringgit!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 text-lg">
                Got questions? We've got answers.
              </p>
            </div>

            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Do I need prior programming experience?
                </h3>
                <p className="text-gray-300">
                  While basic programming knowledge is helpful, we accommodate beginners. Our curriculum starts with fundamentals and builds up gradually. We recommend basic familiarity with HTML/CSS, but it's not mandatory.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What should I bring to the workshop?
                </h3>
                <p className="text-gray-300">
                  Bring your laptop with a modern web browser and ensure it's fully charged. We'll provide all software setup instructions before the workshop. A notebook for taking notes is also recommended.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Is this workshop eligible for HRDF claims?
                </h3>
                <p className="text-gray-300">
                  Yes! This workshop is HRDF claimable up to RM 1,000. We'll provide all necessary documentation for your claim submission. Most participants get their full workshop fee reimbursed.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What if I can't attend the selected date?
                </h3>
                <p className="text-gray-300">
                  You can transfer your registration to another available date up to 7 days before the workshop. We also offer full refunds if you cancel at least 14 days in advance.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Will I get certification after completion?
                </h3>
                <p className="text-gray-300">
                  Yes, you'll receive a digital certificate of completion that you can add to your LinkedIn profile. You'll also get lifetime access to all workshop materials and our private community.
                </p>
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What's included in the workshop fee?
                </h3>
                <p className="text-gray-300">
                  The fee includes 2 days of intensive training, all workshop materials, lunch and refreshments, access to our private Discord community, and lifetime access to course resources and updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Investment in Your Future
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2">RM 1,200</div>
              <p className="text-blue-100 mb-4">2-Day Intensive Workshop</p>
              <div className="bg-green-600 text-white px-4 py-2 rounded-full inline-block mb-4">
                💰 HRDF Claimable up to RM 1,000
              </div>
              <p className="text-blue-100 text-sm">
                Includes materials, lunch, and lifetime access to course resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your AI Future?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join our next workshop and transform your ideas into AI-powered applications. Limited seats available.
            </p>
            <a 
              href="#hero" 
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Secure Your Spot Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
