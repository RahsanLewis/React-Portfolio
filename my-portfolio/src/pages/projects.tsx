import React from 'react';
import Layout from '../components/layout';
import '../styles/globals.css';

const ProjectsPage = () => {
    return (
        <Layout>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-2 text-black">My Projects</h1>
            <p className="text-gray-500">This is a page where I showcase my projects. Stay tuned for updates!</p>
        </div>
        </Layout>
    );
}

export default ProjectsPage;
