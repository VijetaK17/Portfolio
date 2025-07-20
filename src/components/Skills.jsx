import { SkillsInfo } from "../constant";

const Skills = () => {
    return (
        <section id="skills" className="pb-24 py-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans bg-[#f2ede7] text-white">
            <div className="text-center mb-8">
                <h2 className="text-4xl sm:text-4xl font-bold text-black mb-4">My Skills</h2>
                <div className="w-24 h-1 bg-black mx-auto mt-2"></div>
                <p className="text-gray-600 mt-4 text-lg font-semibold">Here are some of the technologies and tools I work with:</p>
            </div>

            <div className="flex flex-wrap gap-4 w-full justify-between px-0">
                <div className="w-full px-2 md:px-4 lg:px-8 flex flex-wrap gap-4 justify-between">
                    {SkillsInfo.map((category) => (
                        <div
                            key={category.title}
                            className="bg-[#ffffff] backdrop-blur-md px-6 md:px-8 lg:px-10 py-8 md:py-6 mb-10 w-full md:w-[48%] lg:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
                        >
                            <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-500 mb-4 text-center">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 md:py-2 md:px-2 text-center"
                                    >
                                        <img
                                            src={skill.logo}
                                            alt={`${skill.name} logo`}
                                            className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                                        />
                                        <span className="text-xs md:text-sm lg:text-sm text-gray-500">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}

export default Skills;
