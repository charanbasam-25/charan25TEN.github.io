import React from "react";
import { motion } from "framer-motion";

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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const WorkCard = ({ title, company, period, achievements }) => (
    <motion.div
      className="relative overflow-hidden bg-black/80 rounded-xl p-6 mb-8 border border-green-500/40 hover:border-green-400/70 shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300 group"
      variants={floatVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-green-400 mb-1 tracking-wider">
          {title}
        </h3>
        <h4 className="text-md text-green-200 mb-4 font-mono">
          {company} • {period}
        </h4>
        <div className="space-y-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-green-400">▸</span>
              <p className="text-green-200 text-sm font-mono leading-relaxed">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const SkillBadge = ({ skill }) => (
    <span className="inline-block bg-black/70 text-green-300 px-3 py-1 rounded-md text-sm font-mono border border-green-500/40 hover:border-green-400 transition-colors duration-200 cursor-default shadow-[0_0_6px_rgba(34,197,94,0.5)]">
      {skill}
    </span>
  );

  return (
    <div
      id="about"
      className="min-h-screen bg-black text-green-300 relative font-mono"
    >
      {/* Faint Matrix-style falling code bg effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.15),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.1),transparent_70%)]"></div>

      <div className="relative container mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={slideInVariants}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-green-400 tracking-widest drop-shadow-[0_0_10px_rgba(34,197,94,0.6)] mb-4">
            ABOUT ME
          </h1>
          <div className="w-32 h-1 bg-green-500 mx-auto rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Intro Section */}
            <motion.div
              className="bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-green-500/40 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
              variants={floatVariants}
            >
              <h2 className="text-2xl font-bold text-green-400 mb-4 tracking-wider">
                INTRODUCTION
              </h2>
              <p className="text-green-200 leading-relaxed text-sm">
                I’m a Software Engineer who loves building futuristic,
                user-friendly web apps. I focus on performance, clean design,
                and creating seamless digital experiences.
              </p>
            </motion.div>

            {/* Work History */}
            <motion.div variants={floatVariants}>
              <h2 className="text-2xl font-bold text-green-400 mb-6 tracking-wider">
                WORK HISTORY
              </h2>

              <WorkCard
                title="Software Development Engineer - 1"
                company="Visa"
                period="Jan 2024 - Present"
                achievements={[
                  
                                    "Engineered a cross-device real-time notification system with React.js, overcoming sync challenges to boost user engagement by 25% and slashing notification delays from 45 to 3 seconds.",
                                    "Led the development of a responsive multi-step form using React.js and i18next, implementing complex validation logic that enhanced data consistency by 45% for over 10,000 global users across 3 languages.",
                                    "Built and maintained a component library with Storybook and TypeScript, ensuring design system consistency and reducing UI development time by 30%.",
                                    "Created reusable custom form components with TypeScript and React Hooks, leveraging Webpack Module Federation for cross-application integration, while resolving cross-browser compatibility issues and reducing development time by 35% across 3 product lines.",
                                    "Developed a comprehensive dashboard using React.js, Redux implementing virtualised lists and optimized queries that increased data management efficiency by 40% and cut load times from 12 to 2 seconds.",
                                    "Migrated 40% of the Vanilla JavaScript and jQuery codebase to modern React, enhancing performance, scalability, and maintainability.",
                                    "Revamped homepage with drag-and-drop functionality using React.js, enabling users to customise topic tile ordering and personalise content layout, increasing user session time by 32% and improving engagement by 28%.",
                                    "Elevated website accessibility from WCAG 2.1 Level A to Level AA, improving user experience for 15-20% of users with disabilities.",
                                    "Implemented responsive design patterns and mobile-first development using CSS Grid, Flexbox, and media queries, achieving 98% cross-device compatibility."
                ]}
              />

              <WorkCard
                title="Software Development Engineer - 1"
                company="Zivame"
                period="May 2022 - Jan 2024"
                achievements={[
                 "Implemented a flexible refund method using React.js, Redux, and Node.js backend services with modern JavaScript (ES6+) features, enhancing ROI from 7.13 to 10.1 and increasing customer retention by 25%.",
                                    "Revamped the homepage using modern frontend technologies with Express.js server-side rendering and JavaScript (ES6+), improving user experience and visual appeal, contributing to an 18% rise in conversions and optimising SEO recommendations.",
                                    "Optimised cart and checkout processes using JavaScript (ES6+), Node.js, and Express.js, enhancing cross-browser compatibility and increasing completed transactions by 10%.",
                                    "Redesigned and revamped category pages using Next.js, JavaScript (ES6+) improving product discovery and navigation flow, resulting in a 22% increase in page engagement and 12% boost in category-to-cart conversions.",
                                    "Developed dynamic widget features with React.js, JavaScript (ES6+), and SCSS, integrating backend APIs built with Node.js and Express.js, driving a 15% boost in user engagement and conversion rates.",
                                    "Streamlined development and deployment workflows using Docker containerisation and CI/CD pipelines, reducing deployment time and ensuring consistent environments across development stages."
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
              className="bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-green-500/40 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
              variants={floatVariants}
            >
              <h2 className="text-xl font-bold text-green-400 mb-4">
                SKILLS
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript (ES6+)", "React.js", "TypeScript", "HTML", "CSS",
  "Next.js (SSR)", "React Redux", "React Context", "Zustand",
  "Node.js", "Express.js", "REST API", "MongoDB", "Storybook",
  "Webpack", "Bootstrap", "Jest", "Web Vitals", "Docker", "Git",
  "CI/CD", "Microsoft Dynamics 365", "Power Pages",
                ].map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
