'use client'

import { WhatsAppButton } from '@/components/WhatsAppButton'
import Link from 'next/link'

export default function CoursesPage() {
  const courses = [
    {
      id: 'ai-agentic-automation',
      title: 'AI Agentic Automation',
      subtitle: 'Build Intelligent Automation Systems',
      description: 'Master the creation of autonomous AI agents that can perform complex tasks, make decisions, and automate business processes with minimal human intervention.',
      duration: '2 Days Intensive',
      price: 'RM 3,200',
      hrdfClaim: 'RM 2,800',
      icon: '🤖',
      features: [
        'Multi-agent systems development',
        'Autonomous decision-making algorithms',
        'Business process automation',
        'LangChain and agent frameworks',
        'Real-time monitoring dashboards'
      ],
      projects: [
        'Customer service automation bot',
        'Intelligent document processing system',
        'Automated workflow orchestrator'
      ],
      level: 'Advanced',
      bgGradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'ai-data-science',
      title: 'AI Data Science',
      subtitle: 'Transform Data into Intelligence',
      description: 'Learn to extract actionable insights from data using cutting-edge AI techniques, machine learning algorithms, and advanced analytics frameworks.',
      duration: '3 Days Intensive',
      price: 'RM 3,500',
      hrdfClaim: 'RM 3,000',
      icon: '📊',
      features: [
        'Advanced machine learning models',
        'Deep learning with TensorFlow/PyTorch',
        'Data visualization and storytelling',
        'Statistical analysis and modeling',
        'Big data processing with AI'
      ],
      projects: [
        'Predictive analytics dashboard',
        'Image classification system',
        'Natural language sentiment analyzer'
      ],
      level: 'Intermediate',
      bgGradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'ai-ethics-policy',
      title: 'AI Ethics and Policy Making',
      subtitle: 'Responsible AI Development',
      description: 'Understand the ethical implications of AI systems and learn to develop responsible AI policies that balance innovation with social responsibility.',
      duration: '2 Days Intensive',
      price: 'RM 2,400',
      hrdfClaim: 'RM 2,200',
      icon: '⚖️',
      features: [
        'AI bias detection and mitigation',
        'Regulatory compliance frameworks',
        'Ethical AI design principles',
        'Policy development strategies',
        'Stakeholder engagement methods'
      ],
      projects: [
        'AI ethics assessment tool',
        'Bias detection framework',
        'Policy recommendation system'
      ],
      level: 'All Levels',
      bgGradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'ai-prompting',
      title: 'AI Prompting',
      subtitle: 'Master the Art of AI Communication',
      description: 'Become an expert in prompt engineering to maximize AI model performance, create sophisticated AI interactions, and build prompt-driven applications.',
      duration: '1.5 Days Intensive',
      price: 'RM 1,800',
      hrdfClaim: 'RM 1,600',
      icon: '💬',
      features: [
        'Advanced prompt engineering techniques',
        'Chain-of-thought prompting',
        'Few-shot and zero-shot learning',
        'Prompt optimization strategies',
        'Custom AI model fine-tuning'
      ],
      projects: [
        'Intelligent content generator',
        'AI-powered research assistant',
        'Custom chatbot with complex reasoning'
      ],
      level: 'Beginner to Advanced',
      bgGradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 'ai-workplace',
      title: 'AI For Workplace',
      subtitle: 'Revolutionize Your Work Environment',
      description: 'Transform your workplace with practical AI solutions that boost productivity, streamline operations, and enhance employee experience across all departments.',
      duration: '2 Days Intensive',
      price: 'RM 2,600',
      hrdfClaim: 'RM 2,300',
      icon: '🏢',
      features: [
        'Workplace automation tools',
        'AI-powered productivity systems',
        'Employee assistance chatbots',
        'Meeting and communication optimization',
        'Performance analytics dashboards'
      ],
      projects: [
        'Smart office management system',
        'AI HR recruitment tool',
        'Automated report generation platform'
      ],
      level: 'Beginner to Intermediate',
      bgGradient: 'from-indigo-500 to-blue-600'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            AI Specialization Courses
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto">
            Master AI across multiple domains with our comprehensive specialization programs. 
            Each course is designed by industry experts to deliver practical, job-ready skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-6 py-3">
              <span className="text-primary-foreground font-semibold">🎯 5 Specialized Tracks</span>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-6 py-3">
              <span className="text-primary-foreground font-semibold">🏛️ HRDF Claimable</span>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-6 py-3">
              <span className="text-primary-foreground font-semibold">🚀 3-Month Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your AI Specialization
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Each course is crafted to provide deep expertise in specific AI domains, 
              with hands-on projects and industry-relevant skills.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course) => (
              <div key={course.id} className="group relative">
                {/* Course Card */}
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  {/* Header with Gradient */}
                  <div className={`bg-gradient-to-r ${course.bgGradient} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative">
                      <div className="text-4xl mb-3">{course.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                      <p className="text-white/90 font-medium">{course.subtitle}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                          {course.level}
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-card-foreground mb-3">What You&apos;ll Learn:</h4>
                      <ul className="space-y-2">
                        {course.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-card-foreground mb-3">Key Projects:</h4>
                      <div className="space-y-2">
                        {course.projects.map((project, index) => (
                          <div key={index} className="bg-muted rounded-lg p-3">
                            <span className="text-sm font-medium text-muted-foreground">
                              {index + 1}. {project}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-border pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-primary">{course.price}</div>
                          <div className="text-sm text-muted-foreground">HRDF: {course.hrdfClaim}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Net Cost</div>
                          <div className="text-lg font-semibold text-success">
                            RM {parseInt(course.price.replace('RM ', '').replace(',', '')) - parseInt(course.hrdfClaim.replace('RM ', '').replace(',', ''))}
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link href={`/courses/${course.id}`}>
                        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                          Learn More & Register
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🎓 Multiple Course Discounts Available
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Enroll in multiple courses and save up to 20%. Build comprehensive AI expertise across domains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="font-semibold text-card-foreground">2 Courses</div>
                  <div className="text-primary font-bold">10% Discount</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="font-semibold text-card-foreground">3+ Courses</div>
                  <div className="text-primary font-bold">20% Discount</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="font-semibold text-card-foreground">All 5 Courses</div>
                  <div className="text-primary font-bold">30% Discount</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
} 