'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
    return (
        <section className=" flex flex-col items-center justify-center px-6 py-24">
            <motion.h1
                initial={{ opacity: 0, y: -220 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-6"
            >
                About Me
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 130 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1.4 }}
                className="max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
            >
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                    Hello! I’m <span className="font-semibold text-indigo-600 dark:text-indigo-400">Diyorbek Kholmirzaev</span>, a passionate
                    <span className="font-semibold"> Web Developer </span> and
                    <span className="font-semibold"> Computer Vision Enthusiast</span> graduated at Riga Technical University.
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                    I enjoy combining user interfaces with back-end systems. My focus lies in
                    developing efficient and scalable applications, and recently, I’ve been exploring the exciting
                    intersection between web technologies and machine learning — particularly in image recognition
                    and classification.
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Beyond coding, I love sports, anime, and gaming 🎮 — they help me balance creativity and focus.
                    My goal is to continue growing as a full-stack developer while contributing to innovative
                    projects that connect technology and human experience.
                </p>
            </motion.div>
        </section>
    )
}
