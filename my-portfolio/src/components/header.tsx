import React from 'react';
import Link from 'next/link'; // Add this import

const Header = () => {
    return (
        <header className="bg-black text-white flex justify-between items-center py-6 px-4">
            <h1 className="text-2xl font-bold">Rahsan Lewis</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="hover:text-gray-300 transition-colors duration-200">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-300 transition-colors duration-200">About</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:text-gray-300 transition-colors duration-200">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-300 transition-colors duration-200">Contact</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="https://github.com/RahsanLewis">
                            <img src="/images/github-mark/github-mark-white.svg" alt="GitHub" width="24" height="24" />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/yourusername">
                            <img src="/images/Linkedin-Logos/LI-In-Bug.png" alt="LinkedIn" width="24" height="24" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
