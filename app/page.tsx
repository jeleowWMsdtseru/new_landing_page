import WorkshopRegistrationForm from '@/components/SubscriptionForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      {/* Theme Toggle Button */}
      <ThemeToggle />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Left Column - Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4">
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  AI Workshop 2024
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Build Your First AI App in 2 Days
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-lg">
                Master modern AI development with hands-on coding. Build, deploy, and launch your MVP using React, Next.js, and AI APIs.
              </p>
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    2-Day Intensive Workshop
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Build Real AI Applications
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    HRDF Claimable
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">Upcoming Dates:</h3>
                <div className="space-y-2">
                  <div className="bg-card border border-primary rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium">7-8 August 2025</span>
                      <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded">Available</span>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground font-medium">9-10 August 2025</span>
                      <span className="text-xs bg-warning text-warning-foreground px-2 py-1 rounded">Few Slots</span>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground font-medium">8-9 September 2025</span>
                      <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div className="w-full md:w-auto md:min-w-[400px]">
              <WorkshopRegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You&apos;ll Build & Learn
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Two intensive days of hands-on coding. Walk away with real AI applications and the skills to build more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Day 1 */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="mb-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Day 1
                </span>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Foundation & Setup</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Modern React & Next.js fundamentals
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  AI API integration (OpenAI, Gemini)
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Build your first AI chatbot
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Authentication & user management
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="mb-4">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Day 2
                </span>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Advanced Features & Deployment</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Image generation with DALL-E
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Document analysis & summarization
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Payment integration (Stripe)
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Deploy to production (Vercel/Netlify)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Participants Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join hundreds of developers who have transformed their careers with our AI workshops.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                  SL
                </div>
                <div>
                  <h4 className="text-card-foreground font-semibold">Sarah Lim</h4>
                  <p className="text-muted-foreground text-sm">Frontend Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                &ldquo;This workshop completely changed how I approach development. I built my first AI-powered app in just 2 days and launched it the following week!&rdquo;
              </p>
              <div className="flex text-warning">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold mr-4">
                  MT
                </div>
                <div>
                  <h4 className="text-card-foreground font-semibold">Marcus Tan</h4>
                  <p className="text-muted-foreground text-sm">Business Analyst</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                &ldquo;As a non-technical person, I was worried about keeping up. The instructors were amazing and I actually built a working AI tool for my company!&rdquo;
              </p>
              <div className="flex text-warning">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-success-foreground font-bold mr-4">
                  AK
                </div>
                <div>
                  <h4 className="text-card-foreground font-semibold">Aisha Khan</h4>
                  <p className="text-muted-foreground text-sm">Product Manager</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                &ldquo;The hands-on approach was perfect. No boring theory - just practical skills I could use immediately. Worth every ringgit!&rdquo;
              </p>
              <div className="flex text-warning">
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

      {/* Workshop Gallery Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Previous Workshop Highlights
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See our participants in action, building real AI applications and collaborating with fellow developers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Workshop Photo 1 */}
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video relative">
                <img
                  src="https://github.com/drhanlau/n8n-course/blob/main/501008480_1271616571636352_1045940269974980193_n.jpg?raw=true"
                  alt="Workshop participants collaborating on AI projects"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-2">Hands-on Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Participants building their first AI chatbot with real-time guidance from our expert instructors.
                </p>
              </div>
            </div>

            {/* Workshop Photo 2 */}
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video relative">
                <img
                  src="https://github.com/drhanlau/n8n-course/blob/main/516791714_1309874321143910_2384036856029643188_n.jpg?raw=true"
                  alt="Workshop attendees working together on AI development"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-2">Team Collaboration</h3>
                <p className="text-muted-foreground text-sm">
                  Developers from various backgrounds learning modern AI development techniques together.
                </p>
              </div>
            </div>

            {/* Workshop Photo 3 */}
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video relative">
                <img
                  src="https://raw.githubusercontent.com/drhanlau/n8n-course/refs/heads/main/photo-1552664730-d307ca884978.avif"
                  alt="Interactive workshop session with live coding"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-2">Live Coding Sessions</h3>
                <p className="text-muted-foreground text-sm">
                  Interactive sessions where participants deploy their AI applications to production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-muted-foreground">
              Professionals from these companies have enhanced their AI skills with our workshops
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
            {/* Johor Corp */}
            <div className="bg-card border border-border rounded-lg p-6 flex items-center justify-center min-h-[100px] w-[180px] transition-transform hover:scale-105">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQku905qBjCQ5SDj3lZve75sRjQcKTmpersqg&s"
                alt="Johor Corporation"
                className="max-w-full max-h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>

            {/* Sunway */}
            <div className="bg-card border border-border rounded-lg p-6 flex items-center justify-center min-h-[100px] w-[180px] transition-transform hover:scale-105">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/76/Sunway_logo.png"
                alt="Sunway Group"
                className="max-w-full max-h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>

            {/* Softspace */}
            <div className="bg-card border border-border rounded-lg p-6 flex items-center justify-center min-h-[100px] w-[180px] transition-transform hover:scale-105">
              <img
                src="https://www.trans-cosmos.co.jp/company/news/images/20220214.png"
                alt="Softspace"
                className="max-w-full max-h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>

            {/* Team Lewis */}
            <div className="bg-card border border-border rounded-lg p-6 flex items-center justify-center min-h-[100px] w-[180px] transition-transform hover:scale-105">
              <img
                src="https://cdn.brandfetch.io/idOl_jw5Ee/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1728225821384"
                alt="Team Lewis"
                className="max-w-full max-h-16 object-contain opacity-70 hover:opacity-100 transition-opacity dark:invert"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Join professionals from Fortune 500 companies and innovative startups in mastering AI development
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Got questions? We&apos;ve got answers.
              </p>
            </div>

            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  Do I need prior programming experience?
                </h3>
                <p className="text-muted-foreground">
                  While basic programming knowledge is helpful, we accommodate beginners. Our curriculum starts with fundamentals and builds up gradually. We recommend basic familiarity with HTML/CSS, but it&apos;s not mandatory.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  What should I bring to the workshop?
                </h3>
                <p className="text-muted-foreground">
                  Bring your laptop with a modern web browser and ensure it&apos;s fully charged. We&apos;ll provide all software setup instructions before the workshop. A notebook for taking notes is also recommended.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  Is this workshop eligible for HRDF claims?
                </h3>
                <p className="text-muted-foreground">
                  Yes! This workshop is HRDF claimable up to RM 1,000. We&apos;ll provide all necessary documentation for your claim submission. Most participants get their full workshop fee reimbursed.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  What if I can&apos;t attend the selected date?
                </h3>
                <p className="text-muted-foreground">
                  You can transfer your registration to another available date up to 7 days before the workshop. We also offer full refunds if you cancel at least 14 days in advance.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  Will I get certification after completion?
                </h3>
                <p className="text-muted-foreground">
                  Yes, you&apos;ll receive a digital certificate of completion that you can add to your LinkedIn profile. You&apos;ll also get lifetime access to all workshop materials and our private community.
                </p>
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  What&apos;s included in the workshop fee?
                </h3>
                <p className="text-muted-foreground">
                  The fee includes 2 days of intensive training, all workshop materials, lunch and refreshments, access to our private Discord community, and lifetime access to course resources and updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Investment in Your Future
            </h2>
            <div className="bg-gradient-to-r from-primary to-secondary border border-border rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">RM 1,200</div>
              <p className="text-primary-foreground/80 mb-4">2-Day Intensive Workshop</p>
              <div className="bg-success text-success-foreground px-4 py-2 rounded-full inline-block mb-4">
                💰 HRDF Claimable up to RM 1,000
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Includes materials, lunch, and lifetime access to course resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build Your AI Future?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join our next workshop and transform your ideas into AI-powered applications. Limited seats available.
            </p>
            <a 
              href="#hero" 
              className="inline-block bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Secure Your Spot Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
