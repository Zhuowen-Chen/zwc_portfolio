import React, { useState } from 'react';
import { ExternalLink, Github, Linkedin, Mail, MapPin, ChevronRight, Code, TrendingUp, Users, Database, Layout, BarChart3, Terminal, Boxes } from 'lucide-react';

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

  const coreSkills = [
    { name: 'React & JavaScript', icon: Code, level: 85 },
    { name: 'UI/UX Design', icon: Layout, level: 80 },
    { name: 'Technical Sales', icon: TrendingUp, level: 90 },
    { name: 'Business Strategy', icon: Users, level: 85 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-900/50 backdrop-blur-xl border-b border-slate-800/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Zhuowen Chen
          </div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/chen-zhuowen" target="_blank" rel="noopener noreferrer" 
               className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Zhuowen-Chen" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:zhuowenchen1993@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Inspired by your references */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold leading-none mb-6">
                <span className="block text-slate-400 text-3xl md:text-4xl font-normal mb-4">
                  Hi. I'm
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zhuowen
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 font-light tracking-wide uppercase">
                Full-Stack Developer & Tech Sales
              </p>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Results-driven professional with a background in business management, retail leadership, and customer service excellence. Currently pursuing a Master's in Computer Science to develop full-stack, data analysis, and technical problem-solving skills, integrating business insight with technology to deliver practical solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-400 group">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">Dublin, Ireland</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 group">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">zhuowenchen1993@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right: Abstract Visual */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-full h-96">
              {/* Geometric shapes - abstract tech visual */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl rotate-12 backdrop-blur-sm border border-cyan-500/30" />
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl -rotate-6 backdrop-blur-sm border border-purple-500/30" />
              <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl rotate-45 backdrop-blur-sm border border-blue-500/30" />
              
              {/* Center icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <Terminal className="w-20 h-20 text-cyan-400" />
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-cyan-400/60 rounded-full animate-pulse" />
              <div className="absolute bottom-20 left-10 w-3 h-3 bg-purple-400/60 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills - Simplified and visual */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Core Competencies
            </span>
          </h2>
          <p className="text-slate-400">Where technology meets business</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {coreSkills.map((skill, i) => (
            <div key={i} className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                    <skill.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100 mb-3">{skill.name}</h3>
                  <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {['Firebase', 'AWS', 'SQL', 'Git', 'Figma', 'Python', 'CRM', 'Data Analysis'].map((tech, i) => (
            <span key={i} className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg text-sm hover:bg-slate-800 hover:border-cyan-500/30 transition-all cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400">Building solutions that bridge technology and business</p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} 
                 className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300">
              {/* Hover glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                project.image === 'gradient-blue' ? 'bg-gradient-to-br from-blue-500/5 to-cyan-500/5' :
                project.image === 'gradient-purple' ? 'bg-gradient-to-br from-purple-500/5 to-pink-500/5' :
                'bg-gradient-to-br from-emerald-500/5 to-teal-500/5'
              }`} />
              
              <div className="relative grid md:grid-cols-2 gap-8 p-8">
                {/* Visual Column */}
                <div className="relative rounded-xl overflow-hidden">
                  <div className={`absolute inset-0 ${
                    project.image === 'gradient-blue' ? 'bg-gradient-to-br from-blue-600 to-cyan-600' :
                    project.image === 'gradient-purple' ? 'bg-gradient-to-br from-purple-600 to-pink-600' :
                    'bg-gradient-to-br from-emerald-600 to-teal-600'
                  }`} />
                  
                  <div className="relative p-6">
                    {project.id === 'dublinbike' ? (
                      <div className="space-y-4">
                        <img 
                          src={dublinBikeImages[activeDublinBikeImage].url} 
                          alt={dublinBikeImages[activeDublinBikeImage].label}
                          className="w-full h-auto rounded-lg shadow-2xl"
                        />
                        <div className="flex justify-center gap-2">
                          {dublinBikeImages.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveDublinBikeImage(i)}
                              className={`h-1 rounded-full transition-all ${
                                activeDublinBikeImage === i ? 'bg-white w-8' : 'bg-white/30 w-1'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-center text-white/90 text-sm">
                          {dublinBikeImages[activeDublinBikeImage].label}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-64">
                        <div className="text-center text-white">
                          {project.id === 'waterford' ? (
                            <>
                              <Database className="w-16 h-16 mb-4 mx-auto opacity-90" />
                              <div className="text-lg font-bold mb-2">Live Production System</div>
                              <div className="text-sm opacity-80">Waterford Crystal</div>
                            </>
                          ) : (
                            <>
                              <Layout className="w-16 h-16 mb-4 mx-auto opacity-90" />
                              <div className="text-lg font-bold mb-2">UI/UX Design</div>
                              <div className="text-sm opacity-80">Figma to React</div>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Column */}
                <div className="space-y-6">
                  <div>
                    <div className="text-xs text-cyan-400 font-medium mb-2 uppercase tracking-wider">
                      {project.type}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 font-medium">{project.subtitle}</p>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                      <Boxes className="w-4 h-4 text-cyan-400" />
                      Key Features
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-400 bg-slate-800/30 px-3 py-2 rounded-lg">
                          <feature.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-xs">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Impact */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      Business Impact
                    </div>
                    <div className="space-y-1.5">
                      {project.impact.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {project.note && (
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs text-amber-400">
                      {project.note}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-all text-sm font-medium">
                        Live Demo <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.figma && (
                      <a href={project.figma} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all text-sm font-medium">
                        Figma <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-800 transition-all text-sm font-medium">
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            { degree: 'Master of Science in Computer Science', school: 'University College Dublin (UCD)', period: '2024 - Present' },
            { degree: 'Master of Arts in Global Affairs and Management', school: 'Thunderbird School of Global Management', period: '2017 - 2019' },
            { degree: 'Bachelor of Science in Business Management', school: 'Arizona State University', period: '2013 - 2017' }
          ].map((edu, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800/50 hover:border-slate-700/50 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-100">{edu.degree}</h3>
                  <p className="text-slate-400">{edu.school}</p>
                </div>
                <span className="text-sm text-cyan-400">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </h3>

            <p className="text-slate-400 mb-6">
              Open to new opportunities and collaborations
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Frontend Developer', 'UI/UX Designer', 'Tech Sales', 'Business Development'].map((role, i) => (
                <span key={i} className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-sm">
                  {role}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <a href="mailto:zhuowenchen1993@gmail.com"
                 className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl hover:bg-cyan-500/20 transition-all font-medium">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a href="https://linkedin.com/in/chen-zhuowen" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-xl hover:bg-slate-800 transition-all font-medium">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800/50 text-center text-slate-500 text-sm">
            © 2025 Zhuowen (Joy) Chen · Built with React & Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  );
}