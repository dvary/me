import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Cpu, Cloud, GitBranch, ArrowRight } from 'lucide-react';

const PipelineStage = ({ title, icon: Icon, skills, index, isLast }) => {
    return (
        <div className="relative flex-1 flex flex-col items-center group min-w-[200px] w-full lg:w-auto">

            {/* Connecting Line (Right side, unless last) - Desktop Only */}
            {!isLast && (
                <div className="hidden lg:block absolute top-[2rem] left-1/2 w-full h-[2px] z-0">
                    <div className="absolute inset-x-0 h-full bg-slate-800" />
                    {/* Animated Data Packet */}
                    <motion.div
                        className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] z-10"
                        initial={{ x: '-100%' }}
                        animate={{
                            x: '400%', // Move well past the container
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.5,
                        }}
                    />
                </div>
            )}

            {/* Node Content */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 w-full flex flex-col items-center"
            >
                {/* Icon Header */}
                <div className="w-16 h-16 rounded-2xl bg-void-950 border border-slate-700 flex items-center justify-center mb-6 shadow-xl relative group-hover:border-blue-500/50 transition-colors z-20">
                    <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="w-8 h-8 text-slate-400 group-hover:text-blue-400 transition-colors relative z-10" />

                    {/* Step Badge */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-void-900 border border-slate-700 flex items-center justify-center text-xs text-slate-500 font-mono shadow-sm">
                        {index + 1}
                    </div>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-6 font-display tracking-tight text-center">{title}</h3>

                {/* Stacked Skills List - Vertical Column */}
                <div className="flex flex-col gap-3 w-full max-w-[200px]">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill}
                            whileHover={{ x: 5, backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                            className="px-4 py-3 rounded-lg bg-void-900/50 border border-slate-800 text-sm text-slate-400 text-center hover:text-white hover:border-blue-500/30 transition-all cursor-default shadow-sm backdrop-blur-sm"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

const TechPipelines = () => {
    const stages = [
        {
            title: 'Ingestion',
            icon: GitBranch,
            skills: ['Kafka', 'Sqoop', 'Airflow', 'Public APIs']
        },
        {
            title: 'Processing',
            icon: Cpu,
            skills: ['Spark', 'AWS EMR', 'Scala', 'Hadoop']
        },
        {
            title: 'Storage / Lake',
            icon: Database,
            skills: ['AWS S3', 'Hudi', 'HDFS', 'Doris', 'Hive']
        },
        {
            title: 'Analytics',
            icon: Cloud,
            skills: ['AWS Athena', 'QuickSight', 'SQL', 'OLAP']
        }
    ];

    return (
        <div className="w-full py-8">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-4 relative">
                {stages.map((stage, index) => (
                    <PipelineStage
                        key={stage.title}
                        {...stage}
                        index={index}
                        isLast={index === stages.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default TechPipelines;
