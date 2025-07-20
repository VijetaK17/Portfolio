import images from "../assets/vije.png";
import { useEffect, useState } from "react";

// Typing effect hook
const useTypingEffect = (text, speed = 100) => {
    const [typed, setTyped] = useState("");
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTyped(text.slice(0, i + 1));
            i++;
            if (i === text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);
    return typed;
};

const First = () => {
    const typedText = useTypingEffect("a Software Developer", 100);
    return (
        <section id="home" className="scroll-m-20 py-16 bg-[rgb(241,230,209)]">
            <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
                <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-6">
                    <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
                        Welcome to My Portfolio<br />
                        <span className="text-3xl font-bold text-black">I'm Vijeta, <span className="typing text-yellow-600">{typedText}</span></span>
                    </h1>
                    <p className="text-gray-600 text-sm lg:text-lg">
                        Explore my projects and skills below. Browse through my portfolio to see the technologies I work with.
                    </p>
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center bg-[#e19208] text-white px-3 py-1 sm:py-2 sm:px-6 rounded-xl hover:bg-[#d18a07] transition text-base font-medium"
                    >
                        Resume
                    </a>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src={images}
                        alt="Description"
                        className="object-contain w-full max-w-xs lg:max-w-md bg-transparent"
                        style={{ background: "transparent" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default First;
