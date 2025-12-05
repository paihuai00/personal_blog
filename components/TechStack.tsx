import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { SKILLS } from '../data/content';

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-android rounded-full"></span>
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {SKILLS.map((skill) => (
                 <div key={skill.subject} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-android/50 transition-colors">
                    <div className="flex justify-between mb-2">
                      <span className="font-mono text-sm text-gray-300">{skill.subject}</span>
                      <span className="font-mono text-sm text-android">{skill.A}%</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-android h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.A}%` }}
                      ></div>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="flex-1 w-full h-[400px] flex items-center justify-center relative">
            <div className="absolute inset-0 bg-android/5 blur-3xl rounded-full"></div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#3DDC84"
                  strokeWidth={2}
                  fill="#3DDC84"
                  fillOpacity={0.3}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                  itemStyle={{ color: '#3DDC84' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;