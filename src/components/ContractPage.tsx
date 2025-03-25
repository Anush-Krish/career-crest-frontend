import * as React from "react";
import { useState } from "react";

const ContactPage: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:anush4krish@gmail.com?subject=Contact from ${name}&body=${message}%0A%0AFrom: ${email}`;
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Contact<span className="text-neutral-500"> Me</span></h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded-md w-full bg-black text-white"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded-md w-full bg-black text-white"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border p-2 rounded-md w-full h-32 bg-black text-white"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
