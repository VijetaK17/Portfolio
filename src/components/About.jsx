import { FaUser } from "react-icons/fa";
import myImg from "../assets/vije.png";

const About = () => {
    return (
        <section id="about" className="scroll-mt-20 py-24 bg-[#f5f4f1]">
            <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row gap-12 items-center">
                {/* Left side: Image */}
                <div className="justify-center py-8 w-full lg:w-1/2 flex items-center">
                    <div className="w-80 lg:w-[420px] h-96 lg:h-[500px] overflow-hidden flex items-center justify-center rounded-b-full shadow-md bg-[#f5f4f1]">
                        <img
                            src={myImg}
                            alt="About Me"
                            className="w-full h-full object-cover"
                            style={{ objectPosition: "center" }}
                        />
                    </div>
                </div>
                {/* Right side: Icon and Heading side by side, Paragraphs below */}
                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <div className="flex items-center justify-center lg:justify-start mb-4 gap-2">
                        <FaUser className="text-[#b47406] w-7 h-7" />
                        <h2 className="text-4xl font-bold font-sans text-black">About Me</h2>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        I am a passionate software developer with a love for creating innovative solutions. My journey in tech has allowed me to work on diverse projects, from web applications to mobile platforms. I thrive in collaborative environments and enjoy tackling challenging problems.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        I enjoy working with the latest technologies and continuously improving my skills. Staying updated with industry trends motivates me to learn and grow every day. I am committed to delivering high-quality work and making a positive impact through technology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
