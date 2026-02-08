import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const ImpactCard = ({ role, company, duration, achievements, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.1 }}
            className="relative pl-8 md:pl-0"
        >
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-slate-800 ml-[8.5rem]" />

            <div className="md:flex gap-12 group">
                {/* Time & Date Column */}
                <div className="md:w-32 shrink-0 md:text-right pt-2">
                    <div className="inline-flex items-center gap-2 text-sm font-mono text-slate-500 bg-void-900/80 px-3 py-1 rounded-full border border-slate-800">
                        <Calendar size={12} />
                        <span>{duration}</span>
                    </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-[8.5rem] -ml-[5px] top-[1.5rem] w-3 h-3 rounded-full bg-blue-600 border-4 border-void-950 z-10 group-hover:scale-125 transition-transform" />

                {/* Content Card */}
                <div className="flex-1 bg-void-900/40 backdrop-blur-sm border border-slate-800 hover:border-blue-500/30 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                        <div>
                            <h3 className="text-2xl font-bold font-display text-slate-100 group-hover:text-blue-400 transition-colors">
                                {role}
                            </h3>
                            <div className="flex items-center gap-2 text-lg text-slate-400 font-medium mt-1">
                                <Briefcase size={16} className="text-blue-500" />
                                {company}
                            </div>
                        </div>
                    </div>

                    <ul className="space-y-4">
                        {achievements.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + (i * 0.05) }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3"
                            >
                                <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-blue-500/60" />
                                <span className="text-slate-300 leading-relaxed text-[15px]">
                                    {item.split(/(\d+%?)/).map((part, index) =>
                                        /\d+%?/.test(part) ? (
                                            <span key={index} className="text-white font-semibold">
                                                {part}
                                            </span>
                                        ) : (
                                            part
                                        )
                                    )}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default ImpactCard;

