
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Database, Server, Network } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Typewriter = ({ text, speed = 100, delay = 1000 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lineIndex, setLineIndex] = useState(0);

    // text should be an array of strings, where each string is a new line
    const lines = Array.isArray(text) ? text : [text];

    useEffect(() => {
        if (lineIndex >= lines.length) return;

        const currentLine = lines[lineIndex];

        if (currentIndex < currentLine.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + currentLine[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            // Line finished
            if (lineIndex < lines.length - 1) {
                // Move to next line
                const timeout = setTimeout(() => {
                    setDisplayText(prev => prev + '\n');
                    setCurrentIndex(0);
                    setLineIndex(prev => prev + 1);
                }, speed * 5); // Pause before next line
                return () => clearTimeout(timeout);
            }
        }
    }, [currentIndex, lineIndex, lines, speed]);

    return (
        <span className="whitespace-pre-line">
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[3px] h-[1em] bg-blue-500 ml-1 align-middle"
            />
        </span>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-void-950">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* Super Prominent Title Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block"
                    >
                        <h2 className="text-blue-400 font-mono font-bold tracking-widest text-xl md:text-3xl mb-4 uppercase drop-shadow-lg">
                            &lt; Senior Data Engineer /&gt;
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 120 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="h-1.5 bg-blue-600 rounded-full"
                        />
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight min-h-[160px] md:min-h-[220px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient pb-2">
                        <Typewriter
                            text={["Building High-Scale", "Data Solutions."]}
                            speed={70}
                            delay={100}
                        />
                    </h1>

                    <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-light">
                        I design and implement robust ETL pipelines, optimize cloud infrastructure, and turn complex datasets into actionable business intelligence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#experience"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                        >
                            View My Work
                            <ArrowRight size={20} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/resume.pdf"
                            download="Mahadev_Duary_Resume.pdf"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-void-800 border border-slate-700/50 hover:border-blue-500/50 text-slate-300 hover:text-white transition-all hover:bg-void-800/80 backdrop-blur-sm"
                        >
                            <Download size={20} />
                            <span>Download Resume</span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Visual Graphic - Abstract Pipeline */}
                <motion.div
                    className="relative hidden lg:flex items-center justify-center h-full min-h-[500px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Center Core */}
                    <div className="absolute w-[400px] h-[400px] border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-[300px] h-[300px] border border-cyan-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                    <div className="relative w-48 h-48 bg-void-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl flex items-center justify-center shadow-2xl z-10">
                        <div className="absolute inset-0 bg-blue-500/5 rounded-2xl animate-pulse" />
                        <Database className="w-16 h-16 text-blue-400" />
                    </div>

                    {/* Orbiting Icons */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none animate-[spin_15s_linear_infinite_reverse]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-void-900 border border-slate-700 p-3 rounded-xl shadow-lg">
                            <Server className="w-6 h-6 text-cyan-400" />
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none animate-[spin_20s_linear_infinite]">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-void-900 border border-slate-700 p-3 rounded-xl shadow-lg">
                            <Network className="w-6 h-6 text-purple-400" />
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
