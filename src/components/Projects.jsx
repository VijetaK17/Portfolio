import { motion } from "framer-motion";
import { Code, Globe } from "lucide-react";
import { FaSmileBeam } from "react-icons/fa";

const projects = [
    {
        icon: <FaSmileBeam className="w-10 h-10 text-sky-500" />,
        name: "My Portfolio",
        description: "A personal website to showcase my work, skills, and experience as a developer.",
    },
    {
        icon: <Code className="w-10 h-10 text-[#f6c67a]" />,
        name: "GitHub Project",
        description: "A collection of my GitHub projects showcasing my skills and contributions.",
    },
    {
        icon: <Globe className="w-10 h-10 text-emerald-500" />,
        name: "Web Project",
        description: "A web project demonstrating my front-end development skills.",
    }
];
projects[0].url = "https://github.com/VijetaK17";
projects[1].url = "https://github.com/VijetaK17 ";
projects[2].url = "https://github.com/VijetaK17";

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-20 py-24 bg-[#f5f4f1] text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-black mb-4">My Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Here are some of the projects I've worked on:</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <motion.div
                                className="bg-white p-6 rounded-3xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-lg transition-all border border-gray-100 hover:border-sky-300 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="flex items-center justify-center mb-4">
                                    {project.icon}
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-sky-800 text-center">{project.name}</h3>
                                <p className="text-gray-600 text-sm text-center">{project.description}</p>
                            </motion.div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;