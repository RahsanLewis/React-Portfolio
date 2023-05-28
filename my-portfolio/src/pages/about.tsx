import React from 'react';
import Layout from '../components/layout';
import '../styles/globals.css';

const AboutPage = () => {
    return (
        <Layout>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-2 text-black ">About Me</h1>
            <p className="text-gray-500">This is a page where I tell you all about me.</p>
            <p className="mt-4 text-gray-500">View my <a className="text-blue-500 hover:text-blue-800" href="/path-to-your-resume.pdf" target="_blank">Resume</a></p>
        </div>
        </Layout>
    );
}

export default AboutPage;
