import React from 'react';
import { Github, Linkedin, Mail, Smartphone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-android/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-android/10 text-android text-sm font-medium mb-6 border border-android/20">
              <Smartphone size={16} />
              <span>Senior Android Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-android to-emerald-400">
                Mobile Future
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Hi, I'm Alex. I craft robust, high-performance Android applications using Kotlin and Jetpack Compose. Obsessed with clean architecture and smooth UI/UX.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-8 py-3 bg-android text-gray-900 font-bold rounded-lg hover:bg-android-dark transition-colors shadow-lg shadow-android/20">
                View Projects
              </a>
              <div className="flex gap-4 items-center px-4">
                <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                  <Github size={24} />
                </a>
                <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-tr from-android to-blue-500 rounded-full blur-lg opacity-40 animate-pulse"></div>
                <img 
                  src="https://picsum.photos/400/400" 
                  alt="Profile" 
                  className="rounded-full w-full h-full object-cover border-4 border-slate-800 relative z-10 shadow-2xl"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;