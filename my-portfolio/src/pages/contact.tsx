import React from 'react';
import '../styles/globals.css';

const ContactPage = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6">
            <h1 className="text-2xl font-bold mb-2 text-black">Contact Me</h1>
            <p className="text-gray-500">
                This is a page where you can find ways to contact me.
                You can reach me via email at <a className="text-blue-500 hover:text-blue-800" href="mailto:your-email@example.com">your-email@example.com</a>
                Connect with me on LinkedIn: <a className="text-blue-500 hover:text-blue-800" href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">Your LinkedIn</a>
            </p>
        </div>
    );
}

export default ContactPage;
