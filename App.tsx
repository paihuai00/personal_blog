import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import BlogList from './components/BlogList';
import AIChat from './components/AIChat';
import { Menu, X, Code2 } from 'lucide-react';
import { PROJECTS } from './data/content';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-android/30 selection:text-android">
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-700 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <Code2 className="text-android" />
            <span>alex<span className="text-android">.dev</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-android transition-colors">Home</a>
            <a href="#tech-stack" className="hover:text-android transition-colors">Tech Stack</a>
            <a href="#projects" className="hover:text-android transition-colors">Projects</a>
            <a href="#blog" className="hover:text-android transition-colors">Blog</a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-700 p-6 flex flex-col gap-4 shadow-2xl">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-android">Home</a>
            <a href="#tech-stack" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-android">Tech Stack</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-android">Projects</a>
            <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-android">Blog</a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        
        <TechStack />

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
                    <span className="w-2 h-8 bg-android rounded-full"></span>
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map(project => (
                        <div key={project.id} className="group bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-android/50 transition-all hover:-translate-y-1">
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-android transition-colors">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-slate-700 text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <BlogList />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Alex Dev. Built with React, Tailwind & Gemini API.</p>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;