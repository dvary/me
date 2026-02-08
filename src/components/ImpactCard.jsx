import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, ShieldCheck, Database, Layers, Brain, Coins, BarChart3, Lock, Clock } from 'lucide-react';

const KPICard = ({ text, index }) => {
    // Advanced heuristics for icon/color assignment
    let icon = Database;
    let colorTheme = "blue"; // default
    let title = "Optimization";

    const content = text.toLowerCase();

    if (content.includes('cost') || content.includes('saving') || content.includes('fund')) {
        icon = Coins;
        colorTheme = "green";
        title = "Cost Efficiency";
    } else if (content.includes('security') || content.includes('governance') || content.includes('rls')) {
        icon = Lock;
        colorTheme = "red";
        title = "Security & Governance";
    } else if (content.includes('visualization') || content.includes('quicksight') || content.includes('reporting')) {
        icon = BarChart3;
        colorTheme = "purple";
        title = "BI & Analytics";
    } else if (content.includes('real-time') || content.includes('streaming') || content.includes('velocity')) {
        icon = Zap;
        colorTheme = "yellow";
        title = "High Velocity";
    } else if (content.includes('ai') || content.includes('genai') || content.includes('chatbot')) {
        icon = Brain;
        colorTheme = "pink";
        title = "AI & Innovation";
    } else if (content.includes('automation') || content.includes('manual')) {
        icon = Clock;
        colorTheme = "orange";
        title = "Automation";
    }

    const colorMap = {
        blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20 hover:border-blue-500/60", glow: "hover:shadow-blue-500/20" },
        green: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20 hover:border-emerald-500/60", glow: "hover:shadow-emerald-500/20" },
        red: { text: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20 hover:border-rose-500/60", glow: "hover:shadow-rose-500/20" },
        purple: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20 hover:border-violet-500/60", glow: "hover:shadow-violet-500/20" },
        yellow: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20 hover:border-amber-500/60", glow: "hover:shadow-amber-500/20" },
        pink: { text: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20 hover:border-fuchsia-500/60", glow: "hover:shadow-fuchsia-500/20" },
        orange: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20 hover:border-orange-500/60", glow: "hover:shadow-orange-500/20" }
    };

    const colors = colorMap[colorTheme];
    const Icon = icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
            className={`
                relative p-6 rounded-2xl bg-void-900/60 backdrop-blur-md border 
                transition-all duration-300 group cursor-default
                ${colors.border} hover:shadow-xl ${colors.glow}
            `}
        >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon size={80} />
            </div>

            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-6 h-6 ${colors.text}`} />
            </div>

            <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 ${colors.text} opacity-80`}>
                {title}
            </h4>

            <p className="text-slate-300 text-sm leading-relaxed font-medium">
                {text.split(/(\d+(?:%|\+|X)?)/).map((part, i) =>
                    /\d+(?:%|\+|X)?/.test(part) ? (
                        <span key={i} className={`font-bold text-white text-lg ${colors.text.replace('text-', 'decoration-')}`}>{part}</span>
                    ) : (
                        part
                    )
                )}
            </p>
        </motion.div>
    );
};

const ImpactCard = ({ role, company, duration, achievements }) => {
    return (
        <div className="relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800/50">
                <div>
                    <h3 className="text-3xl font-bold font-display text-white mb-2">
                        {role}
                    </h3>
                    <div className="text-xl text-blue-400 font-medium">{company}</div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-mono mt-4 md:mt-0 bg-void-900 px-4 py-2 rounded-lg border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {duration}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((item, i) => (
                    <KPICard key={i} text={item} index={i} />
                ))}
            </div>
        </div>
    );
};

export default ImpactCard;
