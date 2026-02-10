"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blog" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-1 bg-white rounded-full px-6 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#E5E5E5]">
                <ThemeToggle />

                <div className="w-px h-5 bg-[#E5E5E5] mx-3" />

                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full
                ${isActive
                                    ? "text-[#111111]"
                                    : "text-[#6B6B6B] hover:text-[#111111]"
                                }`}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="navbar-active"
                                    className="absolute inset-0 bg-[#F5F5F5] rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}
