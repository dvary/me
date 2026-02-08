import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Mail, Linkedin, Briefcase, Cpu, GraduationCap, Trophy } from 'lucide-react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { EXPERIENCE_DATA, EDUCATION_DATA, AWARDS_DATA } from './constants/data';

// Lazy load heavy components
const ImpactCard = lazy(() => import('./components/ImpactCard'));
const TechPipelines = lazy(() => import('./components/TechPipelines'));

// Loading Fallback
const SectionLoader = () => (
  <div className="flex items-center justify-center p-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

const Portfolio = () => {
  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen font-sans bg-void-950 text-slate-100 transition-colors duration-300 selection:bg-blue-500/30 overflow-x-hidden">

        <Navbar />

        {/* Hero Section */}
        <div id="about">
          <Hero />
        </div>

        {/* Experience Section (Impact) */}
        <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-visible">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-blue-400 font-mono text-sm mb-4"
                >
                  <Briefcase size={16} />
                  <span>WORK HISTORY</span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-display font-bold text-white relative z-10"
                >
                  Engineering Impact
                </motion.h2>
              </div>
              <p className="text-slate-500 max-w-sm text-right hidden md:block">
                Proven track record of optimizing data infrastructure and reducing operational costs.
              </p>
            </div>

            <div className="grid gap-12">
              <Suspense fallback={<SectionLoader />}>
                {EXPERIENCE_DATA.map((job, index) => (
                  <ImpactCard key={index} {...job} delay={index} />
                ))}
              </Suspense>
            </div>
          </div>
        </section>

        {/* Skills Section (Pipeline) */}
        <section id="skills" className="py-24 px-4 sm:px-6 bg-void-900/50 border-y border-white/5 relative backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/30 text-cyan-400 text-sm font-mono mb-6"
              >
                <Cpu size={14} />
                <span>TECHNICAL ARSENAL</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                The Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Pipeline</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                My technical expertise visualized as a complete data lifecycle.
              </p>
            </div>

            <Suspense fallback={<SectionLoader />}>
              <TechPipelines />
            </Suspense>
          </div>
        </section>

        {/* Education & Awards Section */}
        <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-blue-400 font-mono text-sm mb-6">
                <GraduationCap size={16} />
                <span>EDUCATION</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                Academic Background
              </h3>

              <div className="bg-void-900/40 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap size={100} />
                </div>

                <div className="relative z-10">
                  <div className="text-2xl font-bold text-white mb-1">{EDUCATION_DATA.degree}</div>
                  <div className="text-blue-400 text-lg mb-4">{EDUCATION_DATA.institution}</div>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm font-mono mb-6">
                    Class of {EDUCATION_DATA.year}
                  </div>

                  <ul className="space-y-2">
                    {EDUCATION_DATA.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                        <span className="mt-1.5 min-w-[5px] h-[5px] rounded-full bg-slate-600" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-yellow-500 font-mono text-sm mb-6">
                <Trophy size={16} />
                <span>HONORS & AWARDS</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                Recognition
              </h3>

              <div className="grid gap-4">
                {AWARDS_DATA.map((award, i) => (
                  <div key={i} className="flex items-center gap-4 bg-void-900/40 border border-slate-800 p-5 rounded-xl hover:border-yellow-500/30 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                      <Trophy size={18} />
                    </div>
                    <span className="text-lg font-medium text-slate-200">{award}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* CTA / Contact Section */}
        <footer id="contact" className="py-32 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-void-950 -z-10">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Ready to scale your data?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Currently open to opportunities in Delhi or Remote. Let's discuss how we can optimize your data infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="mailto:mahadev.duary17@gmail.com" className="group flex items-center gap-4 px-8 py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl transition-all shadow-lg shadow-blue-600/20 hover:scale-105">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white font-medium text-lg">mahadev.duary17@gmail.com</span>
              </a>

              <a href="https://www.linkedin.com/in/mahadevduary" className="group flex items-center gap-4 px-8 py-5 bg-void-800 hover:bg-void-700 border border-slate-700 rounded-2xl transition-all hover:scale-105">
                <Linkedin className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300 group-hover:text-white font-medium text-lg">LinkedIn</span>
              </a>
            </div>

            <div className="mt-24 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
              <p>© {new Date().getFullYear()} Mahadev Duary. Built with React & Tailwind.</p>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Github</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LazyMotion>
  );
};

export default Portfolio;
