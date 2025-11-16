'use client'

import { motion } from 'framer-motion'
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiPython,
    SiOpencv,

    SiPostgresql,
} from 'react-icons/si'

export default function SkillsPage() {
    const skills = [
        {
            name: 'Next.js',
            level: 'Advanced',
            icon: <SiNextdotjs className="w-14 h-14 text-black dark:text-white mb-4" />,
            desc: 'Building optimized, SSR-ready React apps with API routes and ISR.',
        },
        {
            name: 'React',
            level: 'Advanced',
            icon: <SiReact className="w-14 h-14 text-sky-500 mb-4" />,
            desc: 'Developing interactive, component-driven UIs with reusable logic.',
        },
        {
            name: 'Tailwind CSS',
            level: 'Advanced',
            icon: <SiTailwindcss className="w-14 h-14 text-teal-500 mb-4" />,
            desc: 'Designing elegant and responsive interfaces with utility-first styling.',
        },
        {
            name: 'TypeScript',
            level: 'Intermediate',
            icon: <SiTypescript className="w-14 h-14 text-blue-500 mb-4" />,
            desc: 'Writing reliable, type-safe code in modern React and Node projects.',
        },
        {
            name: 'Python',
            level: 'Intermediate',
            icon: <SiPython className="w-14 h-14 text-yellow-500 mb-4" />,
            desc: 'Developing AI-driven backends and automating workflows.',
        },
        {
            name: 'OpenCV',
            level: 'Intermediate',
            icon: <SiOpencv className="w-14 h-14 text-rose-500 mb-4" />,
            desc: 'Performing image processing and computer vision tasks.',
        },
        /*{
            name: 'YOLO',
            level: 'Research-level',
            icon: <SiYolo className="w-14 h-14 text-purple-500 mb-4" />,
            desc: 'Implementing deep learning models for real-time object detection.',
        },*/
        {
            name: 'PostgreSQL',
            level: 'Intermediate',
            icon: <SiPostgresql className="w-14 h-14 text-indigo-500 mb-4" />,
            desc: 'Designing scalable relational databases and complex queries.',
        },
    ]

    return (
        <section className="min-h-screen flex flex-col items-center px-6 py-20">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-10"
            >
                Skills
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                        className="flex flex-col items-center text-center bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                    >
                        {skill.icon}
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{skill.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{skill.level}</p>
                        <p className="text-gray-700 dark:text-gray-300 text-base">{skill.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
