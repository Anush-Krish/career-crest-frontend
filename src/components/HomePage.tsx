import * as React from "react";

interface InfoApiResponse {
    intro: string;
    about: string;
    title: string;
    topSkills: string[];
    experience: { company: string; role: string; duration: string; details: string[] };
    education: string;
}

const hardcodedData: InfoApiResponse = {
    intro: "Anush's Career Crest",
    about: "I'm Anush Krishna, experienced Java backend developer with a strong track record of designing and " +
        "implementing core functionalities from the ground up, as well as optimizing the performance" +
        " of existing systems. Alongside my backend expertise, I have hands-on knowledge of frontend " +
        "development, enabling me to contribute effectively to full-stack project success.",
    title: "Full Stack Developer",
    topSkills: ["Spring boot", "Redis", "Apache Kafka", "PostgresSql", "Hibernate", "React", "TypeScript", "Git"],
    experience: {
        company: "Pogoso Pvt. Ltd.",
        role: "Backend Developer Intern",
        duration: "January 2024 - PRESENT (1+ year of experience.)",
        details: [
            "\n\nDeveloping, testing, and maintaining RESTful APIs of live application, efficiently handling a workload of 10,000-15,000 concurrent users.",
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
    education: "KIIT UNIVERSITY — BTECH, CSE\nSEPTEMBER 2022 - JULY 2026, Bhubaneswar"
};

const HomePage: React.FC = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb35">
            <div className="flex flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-1/2 p-4">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            <span className="block lg:text-start text-center">{hardcodedData.intro.split(' ')[0]}</span>
                            <span className="lg:pl-32">{hardcodedData.intro.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <span className="bg-clip-text text-4xl tracking-tight items-start">
                            {hardcodedData.title}
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight">
                            {hardcodedData.about}
                        </p>
                        <div className="flex items-center">
                            <h3 className="font-semibold text-white mr-2 tracking-wide">
                                Top Skills: {hardcodedData.topSkills.join(', ')}
                            </h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="text-xl font-semibold">Education</h3>
                            <p className="mt-2 font-light whitespace-pre-line text-gray-500">{hardcodedData.education}</p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block border-l border-neutral-700"></div>
                <div className="w-full lg:w-1/2 p-4 overflow-auto max-h-96 lg:max-h-none">
                    <h3 className="text-xl font-semibold">Experience</h3>
                    <div className="mt-2">
                        <h4 className="font-bold text-lg">{hardcodedData.experience.company}</h4>
                        <h5 className="font-semibold text-md text-gray-400">{hardcodedData.experience.role}</h5>
                        <h5 className="text-sm text-gray-400 ">{hardcodedData.experience.duration}</h5>
                        <ul className="mt-2 list-disc list-inside text-light">
                            {hardcodedData.experience.details.map((item, index) => (
                                <li key={index} className="mb-1">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;