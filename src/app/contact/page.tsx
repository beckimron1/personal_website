'use client'

import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function ContactPage() {
    return (
        <div className="items-center flex justify-center p-20">
        <section className="flex flex-col items-center justify-center ">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-6"
            >
                Get in Touch
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-600 dark:text-gray-300 text-center max-w-xl mb-12"
            >
                I’m always open to discussing new projects, research collaborations, or exciting ideas.
                Feel free to drop me a message or connect on GitHub or Telegram!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 md:p-10"
            >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-10">
                    <div className="flex-1 space-y-5">
                        <div className="flex items-center gap-3">
                            <FiMail className="w-6 h-6 text-indigo-500 dark:text-indigo-400"/>
                            <a
                                href="mailto:khdbeckholmirz@gmail.com"
                                className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
                            >
                                khdbeckholmirz@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <FiMapPin className="w-6 h-6 text-indigo-500 dark:text-indigo-400"/>
                            <p className="text-gray-700 dark:text-gray-200">From Tashkent, Uzbekistan</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FiMapPin className="w-6 h-6 text-indigo-500 dark:text-indigo-400"/>
                            <p className="text-gray-700 dark:text-gray-200">Lives in Riga, Latvia</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FiLinkedin className="w-6 h-6 text-indigo-500 dark:text-indigo-400"/>
                            <a
                                href="https://linkedin.com/in/diyorbek-kholmirzaev"
                                target="_blank"
                                className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
                            >
                                linkedin.com/in/diyorbek-kholmirzaev
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <FiGithub className="w-6 h-6 text-indigo-500 dark:text-indigo-400"/>
                            <a
                                href="https://github.com/khdbeck"
                                target="_blank"
                                className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
                            >
                                github.com/khdbeck
                            </a>
                        </div>
                    </div>
                </div>

                {/*<form
                    action="https://formspree.io/f/mleqbzkp"
                    method="POST"
                    className="grid grid-cols-1 gap-6"
                >
                <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        required
                        className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    />

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-lg transition duration-300"
                    >
                        Send Message
                    </motion.button>
                </form>*/}
            </motion.div>
        </section>
        </div>
    )
}
