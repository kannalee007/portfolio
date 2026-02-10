"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowRight, BookOpen, Calendar, Clock, Tag } from "lucide-react";

// Pre-filled with content relevant to your profile (AI, Engineering, Student Life)
const BLOG_POSTS = [
    {
        id: 1,
        title: "Demystifying Large Language Models for Developers",
        excerpt: "A deep dive into how RAG architectures are changing the way we build AI applications, based on my recent experiments with Gemini API.",
        date: "Feb 2, 2026",
        readTime: "6 min read",
        category: "Artificial Intelligence",
        slug: "llms-for-devs"
    },
    {
        id: 2,
        title: "Balancing Code & Iron: My Fitness Journey",
        excerpt: "Why physical discipline is crucial for software engineers. Sharing my routine of heavy lifting and how it clears my mind for debugging.",
        date: "Jan 15, 2026",
        readTime: "4 min read",
        category: "Lifestyle",
        slug: "code-and-iron"
    },
    {
        id: 3,
        title: "From Hackathons to Production: Lessons from SIH 2025",
        excerpt: "What I learned about teamwork, deployment, and real-world problem solving while building the Live Bus Tracking System.",
        date: "Dec 20, 2025",
        readTime: "8 min read",
        category: "Engineering",
        slug: "sih-2025-lessons"
    },
    {
        id: 4,
        title: "The Art of the Technical Interview",
        excerpt: "Strategies I used to crack assessments for internships at top firms, including Data Structures patterns that appear repeatedly.",
        date: "Nov 10, 2025",
        readTime: "5 min read",
        category: "Career",
        slug: "technical-interview-prep"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] selection:bg-black selection:text-white">
            <Navbar />

            <section className="min-h-screen pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 text-center md:text-left"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-3 text-gray-500 font-medium mb-4">
                            <BookOpen className="w-4 h-4" />
                            <span className="uppercase tracking-widest text-xs">The Journal</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111] mb-6">
                            Writing & <br />
                            <span className="text-gray-400 font-serif italic">Reflections.</span>
                        </h1>

                        <p className="text-[#666] text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
                            Thoughts on technology, productivity, and the engineering journey.
                            Documenting the process of learning and building.
                        </p>
                    </motion.div>

                    {/* Blog List */}
                    <div className="space-y-4">
                        {BLOG_POSTS.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative border-t border-gray-200 py-10 md:py-12 cursor-pointer hover:bg-gray-50/50 transition-colors duration-300 rounded-2xl px-4 -mx-4"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">

                                    {/* Meta Data (Left Column on Desktop) */}
                                    <div className="md:col-span-3 flex flex-row md:flex-col gap-4 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                        <span className="text-black/70 flex items-center gap-2">
                                            <Calendar className="w-3 h-3" /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Tag className="w-3 h-3" /> {post.category}
                                        </span>
                                    </div>

                                    {/* Content (Right Column) */}
                                    <div className="md:col-span-9">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                                                <Clock className="w-3 h-3" /> {post.readTime}
                                            </div>

                                            <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-4 transition-all duration-300">
                                                Read Article
                                                <div className="bg-black text-white rounded-full p-1 group-hover:bg-gray-800">
                                                    <ArrowRight className="w-3 h-3 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Newsletter / Footer CTA (Optional) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 p-8 md:p-12 bg-[#111] rounded-3xl text-white text-center"
                    >
                        <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
                        <p className="text-gray-400 mb-6 text-sm">Get notified when I publish new engineering deep dives.</p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
                            />
                            <button className="bg-white text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-gray-200 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>

                </div>
            </section>
        </main>
    );
}