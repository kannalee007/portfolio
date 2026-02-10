"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; // Ensure this path is correct
import { ArrowUpRight, Github, Code2, BrainCircuit, Activity } from "lucide-react";

// Real data based on your profile
const PROJECTS = [
    {
        id: 1,
        title: "Live Bus Tracking System",
        category: "IoT & Web App",
        year: "2025",
        description: "Smart India Hackathon project providing real-time transit data for commuters.",
        tags: ["React", "Node.js", "Google Maps API", "IoT"],
        span: "md:col-span-2", // Large card
        gradient: "from-blue-50 to-indigo-50",
        icon: <Activity className="w-6 h-6 text-blue-500" />
    },
    {
        id: 2,
        title: "Sign Language Detector",
        category: "Computer Vision",
        year: "2025",
        description: "Real-time gesture recognition using MobileNet-V2 architecture.",
        tags: ["Python", "TensorFlow", "OpenCV", "MobileNet"],
        span: "md:col-span-1", // Standard card
        gradient: "from-orange-50 to-amber-50",
        icon: <BrainCircuit className="w-6 h-6 text-orange-500" />
    },
    {
        id: 3,
        title: "Bio-Taxonomy Tool",
        category: "Data Science",
        year: "2025",
        description: "Automated classification system for biological taxonomies.",
        tags: ["Python", "Pandas", "Scikit-learn"],
        span: "md:col-span-1",
        gradient: "from-emerald-50 to-teal-50",
        icon: <Code2 className="w-6 h-6 text-emerald-500" />
    },
    {
        id: 4,
        title: "GenAI Resume Analyzer",
        category: "LLM Application",
        year: "2026",
        description: "RAG-based application using LangChain and Gemini API.",
        tags: ["LangChain", "Gemini API", "Vector DB"],
        span: "md:col-span-2",
        gradient: "from-purple-50 to-pink-50",
        icon: <BrainCircuit className="w-6 h-6 text-purple-500" />
    }
];

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] selection:bg-black selection:text-white">
            <Navbar />

            <section className="relative px-6 pt-32 pb-24">
                {/* Background Blur Effect */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-100/50 blur-[100px] rounded-full pointer-events-none -z-10" />

                <div className="w-full max-w-[1200px] mx-auto">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 space-y-6"
                    >
                        <div className="flex items-center gap-3 text-gray-500 font-medium">
                            <span className="h-[1px] w-8 bg-gray-400"></span>
                            <span className="uppercase tracking-widest text-xs">Selected Works</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111] max-w-3xl">
                            Building intelligence <br />
                            <span className="text-gray-300 italic font-serif">into software.</span>
                        </h1>

                        <p className="text-[#666] text-lg max-w-xl leading-relaxed">
                            A curated collection of projects exploring Artificial Intelligence,
                            Machine Learning, and Full-Stack Engineering.
                        </p>
                    </motion.div>

                    {/* Masonry Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {PROJECTS.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative rounded-3xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden ${project.span} min-h-[320px]`}
                            >
                                {/* Hover Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Content Container */}
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                                                {project.icon}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/80 border border-gray-200 text-gray-600">
                                                    {project.year}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:translate-x-1 transition-transform duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 mb-6 line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-xs font-semibold text-gray-600 px-2 py-1 bg-gray-100 rounded-md mix-blend-multiply">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Link / CTA */}
                                        <div className="flex items-center gap-2 text-sm font-bold text-black opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            View Case Study <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* GitHub Call to Action Card */}
                        <motion.a
                            href="https://github.com/kannalee007" // Update with your actual GitHub link
                            target="_blank"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="md:col-span-1 min-h-[320px] rounded-3xl bg-[#111] p-8 flex flex-col justify-between text-white group cursor-pointer overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <div className="relative z-10">
                                <Github className="w-10 h-10 mb-6" />
                                <h3 className="text-2xl font-bold mb-2">More on GitHub</h3>
                                <p className="text-gray-400 text-sm">
                                    Explore 9+ repositories and 80+ contributions.
                                </p>
                            </div>

                            <div className="relative z-10 flex justify-end">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.a>
                    </div>

                </div>
            </section>
        </main>
    );
}