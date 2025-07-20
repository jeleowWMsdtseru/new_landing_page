'use client'

import { WhatsAppButton } from '@/components/WhatsAppButton'
import SubscriptionForm from '@/components/SubscriptionForm'
import Link from 'next/link'

export default function AIPromptingPage() {
  const courseData = {
    title: 'AI Prompting',
    subtitle: 'Master the Art of AI Communication',
    description: 'Become an expert in prompt engineering to maximize AI model performance, create sophisticated AI interactions, and build prompt-driven applications.',
    duration: '1.5 Days Intensive Workshop',
    price: 'RM 1,800',
    hrdfClaim: 'RM 1,600',
    netCost: 'RM 200',
    level: 'Beginner to Advanced',
    prerequisite: 'Basic familiarity with AI tools',
    class_size: '25 participants maximum',
    certification: 'AI Prompt Engineering Specialist Certificate'
  }

  const curriculum = [
    {
      day: 'Day 1',
      title: 'Prompt Engineering Fundamentals',
      sessions: [
        {
          time: '9:00 AM - 10:30 AM',
          topic: 'Introduction to Prompt Engineering',
          content: ['Prompt anatomy', 'Model behavior understanding', 'Prompt types and patterns', 'Best practices foundation']
        },
        {
          time: '11:00 AM - 12:30 PM',
          topic: 'Advanced Prompting Techniques',
          content: ['Chain-of-thought prompting', 'Few-shot learning', 'Zero-shot prompting', 'Meta-prompting strategies']
        },
        {
          time: '1:30 PM - 3:00 PM',
          topic: 'Building Content Generator',
          content: ['Content creation workflows', 'Template design', 'Quality control mechanisms', 'Output optimization']
        },
        {
          time: '3:30 PM - 5:00 PM',
          topic: 'Prompt Optimization & Testing',
          content: ['A/B testing prompts', 'Performance metrics', 'Iterative improvement', 'Version control']
        }
      ]
    },
    {
      day: 'Day 2 (Half Day)',
      title: 'Production Prompt Systems',
      sessions: [
        {
          time: '9:00 AM - 10:30 AM',
          topic: 'Complex Reasoning Systems',
          content: ['Multi-step reasoning', 'Research assistant workflows', 'Information synthesis', 'Fact-checking integration']
        },
        {
          time: '11:00 AM - 12:30 PM',
          topic: 'Custom AI Applications',
          content: ['Chatbot development', 'API integration', 'Conversation design', 'User experience optimization']
        }
      ]
    }
  ]

  const projects = [
    {
      title: 'Intelligent Content Generator',
      description: 'Build a sophisticated content creation system that generates high-quality articles, social media posts, and marketing copy with consistent brand voice.',
      technologies: ['OpenAI API', 'Python', 'Streamlit', 'Template Engine'],
      features: ['Multi-format output', 'Brand voice consistency', 'SEO optimization', 'Quality scoring']
    },
    {
      title: 'AI Research Assistant',
      description: 'Develop an advanced research tool that can analyze documents, synthesize information, and provide comprehensive research reports.',
      technologies: ['LangChain', 'Vector Databases', 'Document Processing', 'API Integration'],
      features: ['Document analysis', 'Information synthesis', 'Citation tracking', 'Report generation']
    },
    {
      title: 'Custom Reasoning Chatbot',
      description: 'Create a specialized chatbot that can handle complex reasoning tasks and provide detailed explanations for business or educational use.',
      technologies: ['Conversation Design', 'Prompt Chains', 'Context Management', 'Response Validation'],
      features: ['Complex reasoning', 'Explanation generation', 'Context awareness', 'Multi-turn conversations']
    }
  ]

  const instructor = {
    name: 'Alex Thompson',
    title: 'Senior Prompt Engineer & AI Communication Expert',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Leading prompt engineer with 5+ years developing AI applications for major corporations. Created prompt frameworks used by 100+ companies worldwide.',
    credentials: ['Senior Prompt Engineer, Anthropic', 'Prompt Engineering Certification', '50+ AI applications deployed', 'Published prompt research'],
    specialties: ['Advanced prompting', 'Conversation design', 'AI application development', 'Model optimization']
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-600 via-rose-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">💬</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {courseData.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {courseData.subtitle}
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              {courseData.description}
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-white font-semibold">Duration</div>
                <div className="text-white/80 text-sm">{courseData.duration}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-white font-semibold">Level</div>
                <div className="text-white/80 text-sm">{courseData.level}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-white font-semibold">Price</div>
                <div className="text-white/80 text-sm">{courseData.price}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-white font-semibold">HRDF Net</div>
                <div className="text-white/80 text-sm">{courseData.netCost}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <section className="py-4 bg-muted">
        <div className="container mx-auto px-4">
          <nav className="flex text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/courses" className="hover:text-primary">Courses</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">AI Prompting</span>
          </nav>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              {/* Projects Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Projects You&apos;ll Build</h2>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-6">
                      <h3 className="text-xl font-bold text-card-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-card-foreground mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-card-foreground mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                                <svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Detailed Curriculum</h2>
                <div className="space-y-8">
                  {curriculum.map((day, dayIndex) => (
                    <div key={dayIndex} className="bg-card border border-border rounded-lg overflow-hidden">
                      <div className="bg-primary text-primary-foreground p-4">
                        <h3 className="text-xl font-bold">{day.day}: {day.title}</h3>
                      </div>
                      <div className="p-6">
                        <div className="space-y-6">
                          {day.sessions.map((session, sessionIndex) => (
                            <div key={sessionIndex} className="border-l-4 border-primary/30 pl-6">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <h4 className="font-semibold text-card-foreground">{session.topic}</h4>
                                <span className="text-sm text-muted-foreground font-medium">{session.time}</span>
                              </div>
                              <ul className="grid md:grid-cols-2 gap-2">
                                {session.content.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                                    <svg className="w-3 h-3 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Your Expert Instructor</h2>
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-48 flex-shrink-0">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">{instructor.name}</h3>
                      <p className="text-primary font-semibold mb-4">{instructor.title}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{instructor.bio}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-card-foreground mb-3">Credentials:</h4>
                          <ul className="space-y-2">
                            {instructor.credentials.map((credential, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <svg className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {credential}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-card-foreground mb-3">Specialties:</h4>
                          <div className="flex flex-wrap gap-2">
                            {instructor.specialties.map((specialty, index) => (
                              <span key={index} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-card border border-border rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-card-foreground mb-4">Course Information</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{courseData.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Level:</span>
                      <span className="font-medium">{courseData.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Class Size:</span>
                      <span className="font-medium">{courseData.class_size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Prerequisites:</span>
                      <span className="font-medium text-right">{courseData.prerequisite}</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">Price:</span>
                        <span className="font-bold text-primary">{courseData.price}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>HRDF Claimable:</span>
                        <span>{courseData.hrdfClaim}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-success">
                        <span>Net Cost:</span>
                        <span>{courseData.netCost}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <SubscriptionForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
} 