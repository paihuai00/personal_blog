import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/content';
import { BlogPost } from '../types';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';

const BlogList: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900 overflow-y-auto">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-8 flex items-center gap-2 text-android hover:text-white transition-colors"
          >
            <X size={20} /> Close Article
          </button>
          
          <article className="prose prose-invert prose-lg max-w-none">
            <div className="mb-8 border-b border-slate-700 pb-8">
                <span className="text-android text-sm font-mono mb-4 block">{selectedPost.category}</span>
                <h1 className="text-4xl font-bold mb-4">{selectedPost.title}</h1>
                <div className="flex items-center gap-6 text-gray-400 text-sm font-mono">
                    <span className="flex items-center gap-2"><Calendar size={14}/> {selectedPost.date}</span>
                    <span className="flex items-center gap-2"><Clock size={14}/> {selectedPost.readTime}</span>
                </div>
            </div>
            
            <div className="text-gray-300 leading-relaxed whitespace-pre-line font-serif">
              {/* Simulating markdown rendering with whitespace-pre-line for simplicity */}
              {selectedPost.content}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="w-2 h-8 bg-android rounded-full"></span>
          Technical Writings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id} 
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-android transition-all hover:shadow-xl hover:shadow-android/10 cursor-pointer group flex flex-col"
              onClick={() => setSelectedPost(post)}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-android px-2 py-1 bg-android/10 rounded uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-gray-500 font-mono">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-android transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{post.excerpt}</p>
                
                <div className="flex items-center justify-between mt-auto border-t border-slate-700/50 pt-4">
                   <span className="text-xs text-gray-500 flex items-center gap-1">
                     <Clock size={12} /> {post.readTime}
                   </span>
                   <span className="text-android text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                     Read <ArrowRight size={14} />
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;