'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center mt-12 md:mt-20 space-y-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src="/profile1.png"
                    alt="Diyorbek Kholmirzaev"
                    width={180}
                    height={180}
                    priority
                    className="rounded-full shadow-2xl border-4 border-indigo-500/20 dark:border-indigo-400/30"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400">
                    Diyorbek Kholmirzaev
                </h1>
                <p className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                    Web Developer & Computer Vision Enthusiast
                </p>
            </motion.div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-2xl text-gray-700 dark:text-gray-400 leading-relaxed"
            >
                I specialize in building modern web interfaces, integrating machine learning models,
                and optimizing deep learning systems for real-world applications. Passionate about
                bridging design, development, and AI.
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex gap-6 mt-4"
            >
                <Link
                    href="/projects"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition"
                >
                    View Projects
                </Link>
                <Link
                    href="/contact"
                    className="px-6 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-xl font-medium hover:bg-indigo-600 hover:text-white transition"
                >
                    Contact Me
                </Link>
            </motion.div>
        </section>
    )
}
