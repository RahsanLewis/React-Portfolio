import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-200 text-black border border-gray-300 shadow-xl py-6 px-4">
            <div className="flex justify-around items-center">
                <Link href="/" passHref>
                    <h1 className="text-2xl font-bold mb-2 text-black">Rahsan Lewis</h1>
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" passHref>
                                <p className="cursor-pointer hover:text-gray-300 transition-colors duration-200">Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" passHref>
                                <p className="cursor-pointer hover:text-gray-300 transition-colors duration-200">About</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio" passHref>
                                <p className="cursor-pointer hover:text-gray-300 transition-colors duration-200">Porfolio</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" passHref>
                                <p className="cursor-pointer hover:text-gray-300 transition-colors duration-200">Contact</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://github.com/RahsanLewis">
                                <img src="/images/github-mark/github-mark.svg" alt="GitHub" width="24" height="24" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rahsan-lewis/">
                                <img src="/images/Linkedin-Logos/LI-In-Bug.png" alt="LinkedIn" width="24" height="24" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
