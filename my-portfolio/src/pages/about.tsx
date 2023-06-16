import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout>
        <div className="max-w-md mx-auto bg-gray-100 border border-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-2 text-black ">About Me</h1>
            <p className="text-gray-500">This is a page where I tell you all about me.</p>
            <p className="mt-4 text-gray-500">
              View my 
              <a href="/path-to-your-resume.pdf" className="text-blue-500 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Resume</a>
            </p>
        </div>
        </Layout>
    );
}

export default AboutPage;
