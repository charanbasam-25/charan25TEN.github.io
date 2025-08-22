import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const slideInVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    };

    const floatVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const WorkCard = ({ title, company, period, achievements }) => (
        <motion.div 
            className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 mb-8 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 group"
            variants={floatVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
                <h3 className='text-xl font-bold text-emerald-400 mb-1'>{title}</h3>
                <h4 className='text-lg text-blue-300 mb-4 font-medium'>{company} • {period}</h4>
                <div className='space-y-3'>
                    {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                            <p className='text-slate-300 leading-relaxed text-sm'>{achievement}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    const SkillBadge = ({ skill }) => (
        <span className="inline-block bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/30 hover:border-emerald-400/50 transition-colors duration-200 cursor-default">
            {skill}
        </span>
    );

    return (
        <div id='about' className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]'></div>
            
            <div className='relative container mx-auto px-6 py-20'>
                {/* Hero Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={slideInVariants}
                >
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        About Me
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
                </motion.div>

                <div className='grid lg:grid-cols-3 gap-8'>
                    {/* Main Content */}
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* Intro Section */}
                        <motion.div 
                            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
                            variants={floatVariants}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-lg flex items-center justify-center">
                                    <span className="text-slate-900 font-bold text-sm">i</span>
                                </div>
                                <h2 className='text-3xl font-bold text-emerald-400'>Introduction</h2>
                            </div>
                            <p className='text-slate-300 leading-relaxed text-lg'>
                                I'm a passionate Software Engineer with a knack for creating dynamic and user-friendly web applications. My focus lies in delivering solutions that not only meet the user's needs but also enhance their overall experience.
                            </p>
                        </motion.div>

                        {/* Work History */}
                        <motion.div variants={floatVariants}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                                    <span className="text-slate-900 font-bold text-sm">W</span>
                                </div>
                                <h2 className='text-3xl font-bold text-blue-400'>Work History</h2>
                            </div>

                            <WorkCard 
                                title="Software Development Engineer - 1"
                                company="Visa"
                                period="Jan 2024 - Present"
                                achievements={[
                                    "Implemented a multi-step smart form using React Js, featuring dynamic form progression based on user selections and full internationalization support. Leveraged React Context API and React Hooks for state management, while implementing reusable components and i18n functionality for seamless multi-language support.",
                                    "Developed reusable custom form input components adhering to VISA design standards, utilizing TypeScript for strict type safety and ensuring a unified user experience across applications.",
                                    "Revamped the legacy code by migrating from jQuery to React.js with React Redux for improved state management, while simultaneously upgrading the website from Bootstrap 4 to Bootstrap 5, resulting in a more modern, efficient, and responsive codebase with enhanced design consistency.",
                                    "Improved code quality and reduced technical debt by 30% through SonarQube integration. Reduced code smells by 25%, resolved over 100 issues, and enhanced code maintainability, security, and overall codebase quality.",
                                    "Redesigned the FAQ page to significantly increase website usability and customer satisfaction, resulting in a notable decrease in customer support queries. Developed comprehensive unit tests using Jest to ensure the stability and reliability of new features, minimizing the risk of bugs in production.",
                                    "Upgraded website accessibility from WCAG 2.1 Level A to Level AA, boosting the overall user experience and ensuring inclusivity for all users, including those with disabilities.",
                                    "Optimized data-driven decision-making by integrating Google Analytics with the events to track user behavior and gain valuable insights into customer interactions, enabling more effective optimization of the user experience.",
                                    "Collaborated effectively with cross-functional teams, including Product Managers for gathering requirements and QA team members for testing, while working closely with peers to ensure seamless integration and delivery, following Agile methodologies."
                                ]}
                            />

                            <WorkCard 
                                title="Software Development Engineer - 1"
                                company="Zivame"
                                period="May 2022 - Jan 2024"
                                achievements={[
                                    "Developed and optimized the cart and checkout processes, ensuring cross-browser compatibility and improving the overall user journey.",
                                    "Achieved a 15% rise in conversion rates through the development of cross-browser-compatible and engaging website features.",
                                    "Contributed to the revamp of the home page, enhancing user experience and visual appeal, which helped achieve a 15% rise in conversion rates.",
                                    "Implemented a flexible refund method, resulting in a substantial ROI improvement from 7.13 to 10.1 and a 25% increase in customer retention.",
                                    "Integrated Moengage analytics and used A/B testing techniques, leading to a significant 15% boost in user engagement and a 10% increase in conversion rates."
                                ]}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div 
                        className="space-y-6"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* Skills */}
                        <motion.div 
                            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50"
                            variants={floatVariants}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-md"></div>
                                <h2 className='text-2xl font-bold text-purple-400'>Skills</h2>
                            </div>
                            
                            <div className="mb-6">
                                <h3 className='text-lg font-semibold text-emerald-400 mb-3'>Languages & Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['JavaScript', 'React JS', 'TypeScript', 'Node.js', 'Python', 'Java', 'HTML', 'CSS', 'SCSS', 'Bootstrap', 'TailwindCSS'].map(skill => 
                                        <SkillBadge key={skill} skill={skill} />
                                    )}
                                </div>
                            </div>
                            
                            <div>
                                <h3 className='text-lg font-semibold text-blue-400 mb-3'>Tools & Frameworks</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Git', 'Jest', 'Docker', 'Webpack', 'SonarQube', 'MongoDB', 'REST API'].map(skill => 
                                        <SkillBadge key={skill} skill={skill} />
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Interests */}
                        <motion.div 
                            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50"
                            variants={floatVariants}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-md"></div>
                                <h2 className='text-2xl font-bold text-emerald-400'>Interests</h2>
                            </div>
                            
                            {[
                                { title: "Books", items: "Thinking Fast and Slow, The Fountainhead, Walden, Sapiens", icon: "📚" },
                                { title: "Games", items: "Cricket, Badmiton, Marathon", icon: "🏃" },
                                { title: "Movies", items: "Schindlers List, Shawshank Redemption, Gladiator, Pushpakavimanam, SVSC", icon: "🎬" },
                                { title: "Podcasts", items: "J Krishnamurti, Yuval Noah Harari, Andrew Huberman, Lex Friedman", icon: "🎧" },
                                { title: "Fitness", items: "Iyengar Yoga, Dr Rowe fitness, Jeremy Either, Andrew Huberman", icon: "💪" }
                            ].map((interest, index) => (
                                <div key={index} className="mb-4 last:mb-0">
                                    <h3 className='text-sm font-semibold text-slate-400 mb-2 flex items-center gap-2'>
                                        <span>{interest.icon}</span>
                                        {interest.title}
                                    </h3>
                                    <p className='text-slate-300 text-sm leading-relaxed'>{interest.items}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;