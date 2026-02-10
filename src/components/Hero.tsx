"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-[#FDFDFD] overflow-hidden selection:bg-black selection:text-white">

            {/* Background Decorative Element (Subtle Blur) */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gray-100/50 blur-[120px] pointer-events-none" />

            {/* Main Container */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left pt-10 lg:pt-0 order-2 lg:order-1"
                    >
                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-6 flex items-center justify-center lg:justify-start gap-3"
                        >
                            <span className="h-[2px] w-8 bg-gray-800 hidden lg:block"></span>
                            <p className="text-lg md:text-xl text-gray-600 font-medium">
                                Hello, I'm an <span className="text-black font-bold italic font-serif">Engineer</span>
                            </p>
                        </motion.div>

                        {/* Massive Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-extrabold tracking-tighter text-[#111] leading-[0.9] mb-8"
                        >
                            KAARUNYA
                            <br />
                            <span className="text-gray-300" >LAKSHMAN</span>
                        </motion.h1>

                        {/* Stats / Metrics */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-sm md:text-base text-gray-600 font-medium mb-10"
                        >
                            <div className="flex items-center gap-2">
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-black border border-gray-200">
                                    Jain University
                                </span>
                            </div>
                            <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></span>
                            <div className="flex items-center gap-2">
                                <span>AI/ML Engineer</span>
                            </div>
                            <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></span>
                            <div className="text-gray-400">Bangalore, India</div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex justify-center lg:justify-start"
                        >
                            <a href="#work" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#111] px-10 font-medium text-white transition-all duration-300 hover:w-56 hover:bg-black shadow-xl">
                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                    <div className="relative h-full w-8 bg-white/20"></div>
                                </div>
                                <span className="mr-2">View My Work</span>
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Image Stack */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-5 relative flex justify-center lg:justify-end items-center order-1 lg:order-2"
                    >
                        {/* The Stack Container */}
                        <div className="relative w-[300px] h-[380px] md:w-[380px] md:h-[480px] perspective-1000">

                            {/* Decorative Back Cards */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-[32px] transform rotate-[-6deg] translate-x-[-20px] z-0 opacity-60 border border-gray-300/50"></div>
                            <div className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-[32px] transform rotate-[-3deg] translate-x-[-10px] z-10 border border-gray-200 shadow-lg"></div>

                            {/* Main Image Card */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full bg-white rounded-[32px] z-20 shadow-2xl overflow-hidden border border-gray-100"
                                whileHover={{ scale: 1.02, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* IMPORTANT: 
                                   1. Name your image "profile.jpg"
                                   2. Place it in the "public" folder of your Next.js project
                                */}
                                <div className="relative w-full h-full bg-gray-50">
                                    <Image
                                        src="/image.jpeg"
                                        alt="Kaarunya Lakshmana"
                                        fill
                                        className="object-cover"
                                        priority
                                    />

                                    {/* Optional Overlay gradient for better text contrast if you add text over image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                                </div>
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 z-30 bg-white px-6 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
                            >
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-bold text-gray-800">Open for Work</span>
                            </motion.div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}