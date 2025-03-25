import * as React from "react";
import logo from "../assets/AK logo.jpg";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Navbar: React.FC = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
                <a href="tel:+1234567890" className="hover:text-gray-400">
                    <FaPhone />
                </a>
                <a href="https://github.com/Anush-Krish" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/anush-krishna-7b839523b" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    <FaLinkedin />
                </a>
                <a href="mailto:anush4krish@gmail.com" className="hover:text-gray-400">
                    <FaEnvelope />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
