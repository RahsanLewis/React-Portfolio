import React from 'react';
import '../styles/globals.css';

const HomePage = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6">
            <h1 className="text-2xl font-bold mb-2 text-black">Welcome to My Portfolio</h1>
            <p className="text-gray-500">This is my portfolio homepage. Here you can learn more about me, see my projects, and get in touch with me.</p>
            <nav className="mt-4">
                <ul className="space-x-4">
                    <li className="inline">
                        <a className="text-blue-500 hover:text-blue-800" href="/about">About Me</a>
                    </li>
                    <li className="inline">
                        <a className="text-blue-500 hover:text-blue-800" href="/projects">Projects</a>
                    </li>
                    <li className="inline">
                        <a className="text-blue-500 hover:text-blue-800" href="/contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HomePage;
