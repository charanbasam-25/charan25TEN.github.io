import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div id='about' className='min-h-screen flex flex-col bg-gray-900 text-white'>

            <div className='container mx-auto flex flex-wrap px-6' style={{paddingTop:"100px"}}>
                {/* Left Section */}
                <motion.div
                    className="w-full md:w-3/4 p-8 bg-gray-800 rounded-lg shadow-md mb-12 md:mb-0"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {/* Intro Section */}
                    <motion.div variants={fadeInUpVariants}>
                        <h2 className='text-4xl font-semibold mb-6 border-b-2 border-purple-500'>Intro</h2>
                        <p className='text-lg leading-relaxed'>
                            I'm a passionate Software Engineer with a knack for creating dynamic and user-friendly web applications. My focus lies in delivering solutions that not only meet the user’s needs but also enhance their overall experience.
                        </p>
                    </motion.div>

                    {/* Work History Section */}
                    <motion.div className='mt-12' variants={fadeInUpVariants}>
                        <h2 className='text-4xl font-semibold mb-6 border-b-2 border-purple-500'>Work History</h2>
                        <div className='mt-8'>
                            <h3 className='text-2xl font-bold'>Software Development Engineer - 1</h3>
                            <h4 className='text-xl font-medium text-purple-300'>Visa (Jan 2024 - Present)</h4>
                            <ul className='list-disc pl-6 text-lg space-y-3 mt-4'>
                                <li>Implemented a multi-step smart form using React Js, featuring dynamic form progression based on user selections and full internationalization support. Leveraged React Context API and React Hooks for state management, while implementing reusable components and i18n functionality for seamless multi-language support.</li>
                                <li>Developed reusable custom form input components adhering to VISA design standards, utilizing TypeScript for strict type safety and ensuring a unified user experience across applications.</li>
                                <li>Revamped the legacy code by migrating from jQuery to React.js with React Redux for improved state management, while simultaneously upgrading the website from Bootstrap 4 to Bootstrap 5, resulting in a more modern, efficient, and responsive codebase with enhanced design consistency.</li>
                                <li>Improved code quality and reduced technical debt by 30% through SonarQube integration. Reduced code smells by 25%, resolved over 100 issues, and enhanced code maintainability, security, and overall codebase quality.</li>
                                <li>Redesigned the FAQ page to significantly increase website usability and customer satisfaction, resulting in a notable decrease in customer support queries. Developed comprehensive unit tests using Jest to ensure the stability and reliability of new features, minimizing the risk of bugs in production.</li>
                                <li>Upgraded website accessibility from WCAG 2.1 Level A to Level AA, boosting the overall user experience and ensuring inclusivity for all users, including those with disabilities.</li>
                                <li>Optimized data-driven decision-making by integrating Google Analytics with the events to track user behavior and gain valuable insights into customer interactions, enabling more effective optimization of the user experience.</li>
                                <li>Collaborated effectively with cross-functional teams, including Product Managers for gathering requirements and QA team members for testing, while working closely with peers to ensure seamless integration and delivery, following Agile methodologies.</li>
                            </ul>
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-2xl font-bold'>Software Development Engineer - 1</h3>
                            <h4 className='text-xl font-medium text-purple-300'>Zivame (May 2022 - Jan 2024)</h4>
                            <ul className='list-disc pl-6 text-lg space-y-3 mt-4'>
                                <li>Developed and optimized the cart and checkout processes, ensuring cross-browser compatibility and improving the overall user journey.</li>
                                <li>Achieved a 15% rise in conversion rates through the development of cross-browser-compatible and engaging website features.</li>
                                <li>Contributed to the revamp of the home page, enhancing user experience and visual appeal, which helped achieve a 15% rise in conversion rates.</li>
                                <li>Implemented a flexible refund method, resulting in a substantial ROI improvement from 7.13 to 10.1 and a 25% increase in customer retention.</li>
                                <li>Integrated Moengage analytics and used A/B testing techniques, leading to a significant 15% boost in user engagement and a 10% increase in conversion rates.</li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
                {/* Right Section */}
                <div className="w-full md:w-1/4">
                    <motion.div
                        className="p-8 bg-purple-700 rounded-lg shadow-md text-white"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUpVariants}
                    >
                        <h2 className='text-4xl font-semibold mb-6'>Skills</h2>
                        <div>
                            <h3 className='text-2xl font-bold'>Languages & Technologies</h3>
                            <p className='text-lg mt-4'>JavaScript, React JS, React Redux, TypeScript, Node.js, SQL, Python, Java, HTML, CSS, SCSS, Bootstrap, TailwindCSS, REST API, AJAX, jQuery, MongoDb, Handlebars </p>
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-2xl font-bold'>Other Skills</h3>
                            <p className='text-lg mt-4'>Data Structures & Algorithms, Agile Development, Web Accessibility, Git, Jest, Docker, Browser Developer Tools, Vite, webpack, SonarQube, Web Accessibility, MVC Architcture. </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="p-8 bg-purple-700 rounded-lg shadow-md text-white mt-8"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUpVariants}
                    >
                        <h2 className='text-4xl font-semibold mb-6'>Other Interests</h2>
                        <div>
                            <h3 className='text-2xl font-bold'>Books</h3>
                            <p className='text-lg mt-4'>Thinking Fast and Slow, The Fountainhead, Walden, Sapiens</p>
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-2xl font-bold'>Games</h3>
                            <p className='text-lg mt-4'>Cricket, Badmiton, Marathon</p>
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-2xl font-bold'>Movies</h3>
                            <p className='text-lg mt-4'>Schindlers List, Shawshank Redemption, Gladiator, Pushpakavimanam, SVSC, Kshanakshanam, Sarkar </p>
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-2xl font-bold'>Podcasts</h3>
                            <p className='text-lg mt-4'>J Krishnamurti, Yuval Noah Harari, Andrew Huberman, Lex friedman</p>
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-2xl font-bold'>Fitness</h3>
                            <p className='text-lg mt-4'>Iyengar Yoga, Dr Rowe fitness, Jeremy Either, Andrew Huberman.</p>
                        </div>
                        

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
