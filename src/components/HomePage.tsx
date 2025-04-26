import * as React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

const hardcodedData = {
    intro: "Anush's Career Crest",
    about: "I'm Anush Krishna, experienced Java backend developer with a strong track record of designing and implementing core functionalities from the ground up, as well as optimizing the performance of existing systems. Alongside my backend expertise, I have hands-on knowledge of frontend development, enabling me to contribute effectively to full-stack project success.",
    title: "Full Stack Developer",
    topSkills: [
        { name: "Spring Boot", logo: "spring/spring-original.svg" },
        { name: "Redis", logo: "redis/redis-original.svg" },
        { name: "Kafka", logo: "apachekafka/apachekafka-original.svg", light: true },
        { name: "Postgres", logo: "postgresql/postgresql-original.svg" },
        { name: "Hibernate", logo: "hibernate/hibernate-plain.svg" },
        { name: "React", logo: "react/react-original.svg" },
        { name: "TypeScript", logo: "typescript/typescript-original.svg" },
        { name: "Git", logo: "git/git-original.svg" },
    ],
    experience: {
        company: "Pogoso Pvt. Ltd.",
        role: "Backend Developer Intern",
        duration: "Jan 2024 - Present",
        details: [
            "Developing, testing, and maintaining RESTful APIs of live application, efficiently handling a workload of 10,000-15,000 concurrent users.",
            "Integrated AWS secret manager, and moved application properties file.",
            "Implemented Asynchronous logging using Log4j2.",
            "Developed many functionalities from scratch and improved performance of existing functionality.",
            "Analyzed system logs to identify anomalies within the backend environment.",
            "Maintained documentation on all changes made to the backend infrastructure during development cycles.",
            "Utilized version control systems like Git for source code management.",
            "Optimized database queries for better performance and scalability.",
            "Collaborated with frontend developers and testers to ensure a seamless integration of UI components with the backend infrastructure.",
            "Deployed new versions of software releases through continuous integration pipelines.",
            "Improved fetch feed API, which earlier took 6 seconds, optimized it to 500ms, and also improved reaction, comment, reply, and count services.",
            "Implemented WebSocket from scratch in the project, including setting up the WebSocket connection, to enable collection of user impressions.",
            "Implemented Spring batch from scratch for deleting all user-related data by scheduling jobs."
        ]
    },
    education: "KIIT UNIVERSITY — BTECH, CSE\nSEP 2022 - JUL 2026"
};

const HomePage: React.FC = () => {
    return (
        <>
            {/* Top Title */}
            <motion.section
                initial="hidden"
                animate="visible"
                className="pt-1 pb-4 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
            >
                <motion.h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-100 font-serif tracking-wide mb-2"
                    style={{ fontFamily: `'Merriweather', Georgia, serif` }}
                    variants={fadeUp}
                    custom={0}
                >
                    {hardcodedData.intro}
                </motion.h1>
            </motion.section>

            {/* Developer Title + Skills Side by Side */}
            <motion.section
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 px-4 sm:px-6 lg:px-8 items-start"
            >
                {/* Full Stack Developer Title */}
                <motion.div className="flex flex-col gap-6" variants={fadeUp} custom={1}>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-white">{hardcodedData.title}</h2>

                    <motion.p
                        className="max-w-3xl text-lg sm:text-xl text-neutral-400 leading-relaxed"
                        variants={fadeUp}
                        custom={2}
                    >
                        {hardcodedData.about}
                    </motion.p>
                </motion.div>

                {/* Skills */}
                <motion.div
                    className="flex flex-col gap-4 items-start border-l border-neutral-800 pl-6"
                    variants={fadeUp}
                    custom={3}
                >
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Top Skills</h3>
                    {hardcodedData.topSkills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 bg-neutral-900 px-4 py-2 rounded-lg shadow-sm border border-neutral-700 w-full hover:scale-[1.02] transition-transform"
                        >
                            <img
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.logo}`}
                                alt={skill.name}
                                className={`w-6 h-6 ${skill.light ? "brightness-200" : ""}`}
                            />
                            <span className="text-sm text-cyan-200 font-medium">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Experience + Education Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-800 scroll-mt-20"
            >
                <div className="max-w-6xl mx-auto">
                    {/* Experience */}
                    <motion.div className="mb-16" variants={fadeUp} custom={0}>
                        <h3 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">Experience</h3>
                        <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-700 shadow-lg">
                            <h4 className="font-bold text-lg text-cyan-400">{hardcodedData.experience.company}</h4>
                            <p className="text-sm text-neutral-400">{hardcodedData.experience.role}</p>
                            <p className="text-sm text-neutral-500 mb-4">{hardcodedData.experience.duration}</p>
                            <ul className="list-disc list-inside text-neutral-300 space-y-2 text-sm">
                                {hardcodedData.experience.details.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div variants={fadeUp} custom={1}>
                        <h3 className="text-3xl font-bold text-white mb-4 text-center lg:text-left">Education</h3>
                        <p className="whitespace-pre-line text-neutral-400 text-base leading-relaxed">
                            {hardcodedData.education}
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default HomePage;
