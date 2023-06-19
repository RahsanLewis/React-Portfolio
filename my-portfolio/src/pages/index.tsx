// pages/index.tsx
import React from 'react';
import Project from '../components/project';
import Layout from '../components/layout';
import Link from 'next/link';

const projects = [
    {
        title: 'Password Generator',
        description: 'Generate a random password based on user-selected criteria.',
        link: 'https://react-password-generator-chi.vercel.app/',
        imageUrl: '/images/passwordgen.png',
    },
];

const HomePage = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center mt-6 p-6">
                <h1 className="text-5xl font-bold mb-2 text-black">Welcome!</h1>
                <p className="text-xl text-black text-center m-2 p-2">I have a passion for creating things that live on the internet, whether that be websites, applications, or anything in between.
                    Learn more about me
                    <Link href="/about">
                        <span className="text-blue-500 cursor-pointer hover:text-blue-300 transition-colors duration-200"> here</span>
                    </Link>
                    .
                </p>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-xl mb-6 text-black">Or check out my recent projects!</h2>
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
            <p className="text-xl text-black text-center m-4 p-2">Check out the rest of my
                <Link href="/portfolio">
                    <span className="text-blue-500 cursor-pointer hover:text-blue-300 transition-colors duration-200"> portfolio </span>
                </Link>
                here.
            </p>
        </Layout>
    );
}

export default HomePage;
