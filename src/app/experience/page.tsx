'use client'

import { motion } from 'framer-motion'

export default function Experience() {
    const experiences = [
        {
            role: 'Web Developer Intern',
            company: 'Oygul',
            duration: 'June 2024 – September 2024',
            description:
                'Developed responsive web interfaces using Next.js and Tailwind CSS. Collaborated with the backend team to integrate APIs and enhance UI performance.',
        },
        {
            role: 'Linux Club member',
            company: 'Riga Technical University',
            duration: '2023 – Present',
            description:
                'Conducted research on image recognition and bouquet classification using YOLO and Faster R-CNN. Focused on model optimization and dataset preparation.',
        },
        {
            role: 'Computer vision research',
            company: 'Riga Technical University',
            duration: '2023 – Present',
            description:
                'Conducted research on image recognition and bouquet classification using YOLO and Faster R-CNN. Focused on model optimization and dataset preparation.',
        },
    ]

    return (
        <section className=" flex flex-col items-center px-6 py-20">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-10"
            >
                Experience
            </motion.h1>

            <div className="max-w-3xl space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                            {exp.role} — <span className="text-indigo-600 dark:text-indigo-400">{exp.company}</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-2">{exp.duration}</p>
                        <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
