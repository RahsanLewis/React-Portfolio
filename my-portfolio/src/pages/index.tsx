import React from 'react';
import Layout from '../components/layout';
import '../styles/globals.css';

const HomePage = () => {
    return (
        <Layout>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-2 text-black">Welcome to My Portfolio</h1>
            <p className="text-gray-500">This is my portfolio homepage. Here you can learn more about me, see my projects, and get in touch with me.</p>
        </div>
        </Layout>
    );
}

export default HomePage;
