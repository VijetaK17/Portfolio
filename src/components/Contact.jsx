import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/yourFormId"; // Replace with your Formspree form ID

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });
            if (response.ok) {
                setStatus("Message sent!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send. Try again.");
            }
        } catch {
            setStatus("Failed to send. Try again.");
        }
    };

    return (
        <section id="contact" className="scroll-m-20 py-16 bg-[#f2ede7]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-black mb-6">Contact Me</h2>
                <p className="text-gray-700 mb-4">Feel free to reach out for any inquiries or collaborations.</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 h-32"
                        required
                    ></textarea>
                    <button type="submit" className="bg-[#e79b20] text-white px-6 py-3 rounded-lg hover:bg-[#e79b20e9] transition">
                        Send Message
                    </button>
                    {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;