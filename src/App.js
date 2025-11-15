import React, { useState } from 'react';
import { ExternalLink, Github, Linkedin, Mail, Phone, MapPin, ChevronRight, Code, TrendingUp, Users, Database, Layout, BarChart3 } from 'lucide-react';

export default function Portfolio() {
  const [activeDublinBikeImage, setActiveDublinBikeImage] = useState(0);

  const dublinBikeImages = [
    { url: "https://i.imgur.com/B5FONOi.jpeg", label: "Hero Page" },
    { url: "https://i.imgur.com/vxQcUHS.jpeg", label: "Interactive Map" },
    { url: "https://i.imgur.com/wqnrcRq.jpeg", label: "Prediction Dashboard" }
  ];

  const projects = [
    {
      id: 'waterford',
      title: 'Waterford Crystal Inventory System',
      subtitle: 'Real-time Sales & Inventory Management',
      role: 'Full-Stack Developer',
      period: 'Aug 2025 - Present',
      type: 'Featured Project',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Vercel'],
      description: 'Transformed manual inventory tracking into an automated, real-time system that enables data-driven business decisions.',
      impact: [
        'Eliminated manual inventory errors through automated tracking',
        'Reduced restock decision time from days to minutes',
        'Enabled real-time sales performance monitoring across team',
        'Generated automated sales reports saving 5+ hours weekly'
      ],
      features: [
        { icon: Database, text: 'Real-time inventory tracking and alerts' },
        { icon: TrendingUp, text: 'Sales performance visualization' },
        { icon: BarChart3, text: 'Automated stock level warnings' },
        { icon: Users, text: 'Team collaboration and data sharing' }
      ],
      link: 'https://waterford-inventory.vercel.app/',
      github: null,
      image: 'gradient-blue'
    },
    {
      id: 'brickwyze',
      title: 'BrickWyze Business Intelligence Platform',
      subtitle: 'AI-Powered Location Intelligence for NYC Businesses',
      role: 'UI/UX Designer & Frontend Developer',
      period: 'Jan 2025 - May 2025',
      type: 'Design & Development',
      tags: ['Figma', 'React', 'UI/UX', 'Data Visualization'],
      description: 'AI-powered business intelligence platform helping entrepreneurs find optimal commercial locations in New York City through comprehensive data analysis.',
      impact: [
        'Designed intuitive user experience for complex data visualization',
        'Translated technical insights into actionable business recommendations',
        'Created responsive frontend matching high-fidelity Figma designs'
      ],
      features: [
        { icon: Layout, text: 'User-centered design system in Figma' },
        { icon: BarChart3, text: 'Interactive data visualization' },
        { icon: MapPin, text: 'Location-based insights and analytics' },
        { icon: TrendingUp, text: 'ML-powered business recommendations' }
      ],
      figma: 'https://www.figma.com/design/27dOyXmKQrXion9T2dBd5n/BrickWyze-Project?node-id=0-1&m=dev&t=3pz1w6aCbL3I1I8x-1',
      link: 'https://brickwyze-homepage.vercel.app/',
      github: 'https://github.com/Zhuowen-Chen/brickwyze-homepage',
      image: 'gradient-purple'
    },
    {
      id: 'dublinbike',
      title: 'DublinBike Availability Forecasting',
      subtitle: 'Predictive Analytics for Bike-Sharing System',
      role: 'Full-Stack Developer (Team Project)',
      period: 'Jan 2025 - May 2025',
      type: 'Team Collaboration',
      tags: ['Python', 'Flask', 'AWS EC2', 'SQL', 'Data Visualization'],
      description: 'Full-stack application predicting Dublin bike availability using machine learning models and real-time data.',
      impact: [
        'Collaborated in 4-member team on end-to-end development',
        'Translated complex predictions into clear visual insights',
        'Designed user-friendly interface for non-technical users'
      ],
      features: [
        { icon: TrendingUp, text: 'ML-based availability prediction' },
        { icon: MapPin, text: 'Interactive station map with live data' },
        { icon: BarChart3, text: 'Demand trend visualization' },
        { icon: Database, text: 'Real-time data processing pipeline' }
      ],
      link: null,
      github: null,
      note: 'Live demo unavailable due to API deprecation. Screenshots show key features.',
      image: 'gradient-green'
    }
  ];

  const skills = {
    technical: [
      'React & Frontend Development',
      'Firebase & AWS Cloud Services',
      'SQL & Database Management',
      'Git/GitHub Version Control',
      'UI/UX Design (Figma)',
      'Data Visualization'
    ],
    business: [
      'Technical Solution Sales',
      'Needs Analysis & Consultation',
      'CRM & Workflow Optimization',
      'Data-Driven Decision Making',
      'Cross-Functional Collaboration',
      'Client Relationship Management'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-slate-800">Joy Chen</div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/chen-zhuowen" target="_blank" rel="noopener noreferrer" 
               className="text-slate-600 hover:text-blue-600 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Zhuowen-Chen" target="_blank" rel="noopener noreferrer"
               className="text-slate-600 hover:text-slate-900 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:zhuowenchen1993@gmail.com" className="text-slate-600 hover:text-blue-600 transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            Business + Tech Background
          </div>
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            Zhuowen (Joy) Chen
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Results-driven professional with a strong foundation in business management, retail leadership, and customer service excellence. Currently pursuing a Master's in Computer Science to build skills in backend development, data analysis, and technical problem-solving. Passionate about blending business insight and technology to deliver practical solutions.
          </p>
          <div className="flex flex-wrap gap-6 text-slate-600 pt-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Dublin, Ireland</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>zhuowenchen1993@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>+353 89 495 7475</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Projects</h2>
        
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={project.id} 
                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="flex flex-col gap-0">
                {/* Visual/Image Column */}
                <div className={`${
                  project.image === 'gradient-blue' ? 'bg-gradient-to-br from-blue-500 to-blue-700' :
                  project.image === 'gradient-purple' ? 'bg-gradient-to-br from-purple-500 to-pink-600' :
                  'bg-gradient-to-br from-green-500 to-teal-600'
                } p-8 flex items-center justify-center relative overflow-hidden`}>
                  {project.id === 'dublinbike' ? (
                    <div className="w-full h-full flex flex-col">
                      <img 
                        src={dublinBikeImages[activeDublinBikeImage].url} 
                        alt={dublinBikeImages[activeDublinBikeImage].label}
                        className="w-full h-auto rounded-lg shadow-2xl object-cover"
                      />
                      <div className="flex justify-center gap-2 mt-4">
                        {dublinBikeImages.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveDublinBikeImage(i)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              activeDublinBikeImage === i ? 'bg-white w-8' : 'bg-white/50'
                            }`}
                            aria-label={`View image ${i + 1}`}
                          />
                        ))}
                      </div>
                      <div className="text-center mt-2 text-white text-sm font-medium">
                        {dublinBikeImages[activeDublinBikeImage].label}
                      </div>
                    </div>
                  ) : project.id === 'waterford' ? (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <img 
                        src="https://i.imgur.com/dAcq1l6.jpeg"
                        alt="Waterford Crystal Inventory System Screenshot"
                        className="w-full h-auto rounded-lg shadow-2xl object-cover"
                      />
                      <div className="text-center mt-4 text-white text-sm opacity-90">
                        Live Production System — Waterford Crystal
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <img 
                        src="https://i.imgur.com/pjMqAi4.png"
                        alt="BrickWyze UI/UX Design"
                        className="w-full h-auto rounded-lg shadow-2xl object-cover"
                      />
                      <div className="text-center mt-4 text-white text-sm opacity-90">
                        UI/UX Design — BrickWyze
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Column */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm text-blue-600 font-medium mb-1">{project.type}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                      <p className="text-slate-600 font-medium">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="font-semibold text-slate-800 text-sm mb-3">Key Features:</div>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <feature.icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="font-semibold text-slate-800 text-sm mb-3">Business Impact:</div>
                    {project.impact.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <ChevronRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {project.note && (
                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
                      {project.note}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm">
                        View Live Demo <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.figma && (
                      <a href={project.figma} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium text-sm">
                        View Figma Design <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition font-medium text-sm">
                        <Github className="w-4 h-4" /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Core Competencies</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Technical Skills</h3>
            </div>
            <div className="space-y-2">
              {skills.technical.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Business & Sales</h3>
            </div>
            <div className="space-y-2">
              {skills.business.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Education</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Master of Science in Computer Science</h3>
                <p className="text-slate-600">University College Dublin (UCD)</p>
              </div>
              <span className="text-sm text-slate-500">2024 - Present</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Master of Arts in Global Affairs and Management</h3>
                <p className="text-slate-600">Thunderbird School of Global Management</p>
              </div>
              <span className="text-sm text-slate-500">2017 - 2019</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Bachelor of Science in Business Management</h3>
                <p className="text-slate-600">Arizona State University</p>
              </div>
              <span className="text-sm text-slate-500">2013 - 2017</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-slate-400 mb-6">Interested in technical sales solutions or collaboration opportunities?</p>
            <div className="flex justify-center gap-6">
              <a href="mailto:zhuowenchen1993@gmail.com" 
                 className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a href="https://linkedin.com/in/chen-zhuowen" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition font-medium">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            © 2025 Zhuowen (Joy) Chen. Built with React.
          </div>
        </div>
      </footer>
    </div>
  );
}