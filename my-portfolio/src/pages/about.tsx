import React from 'react';
import Link from 'next/link'; // Add this import
import Layout from '../components/layout';
import '../styles/globals.css';

const AboutPage = () => {
    return (
        <Layout>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-2 text-black ">About Me</h1>
            <p className="text-gray-500">This is a page where I tell you all about me.</p>
            <p className="mt-4 text-gray-500">
              View my 
              <Link href="/path-to-your-resume.pdf">
                <a className="text-blue-500 hover:text-blue-800" target="_blank">Resume</a>
              </Link>
            </p>
        </div>
        </Layout>
    );
}

export default AboutPage;
