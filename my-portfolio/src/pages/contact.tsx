// pages/contact.tsx
import React from 'react';
import Layout from '../components/layout';

const ContactPage = () => {
    return (
        <Layout>
            <div className="max-w-md mx-auto bg-gray-100 border border-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10 p-6 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-2 text-black">Contact Me</h1>
                <p className="text-black text-center">You can reach me via email or LinkedIn:</p>
                <p className="text-black flex flex-col items-center text-center mt-4">
                    rahsanlewis@gmail.com
                </p>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 flex flex-col items-center text-center mt-4">
                    LinkedIn Profile
                </a>
            </div>
        </Layout>
    );
}

export default ContactPage;
