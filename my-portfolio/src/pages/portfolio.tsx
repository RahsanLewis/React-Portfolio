import React from 'react';
import Layout from '../components/layout';
import Project from '../components/project';

const projects = [
    {
        title: 'Password Generator',
        description: 'Generate a random password based on user-selected criteria.',
        link: 'https://react-password-generator-chi.vercel.app/',
        imageUrl: '/images/passwordgen.png',
    },
];

const ProjectsPage = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <h2 className="text-2xl m-6 p-4 text-bold text-black">Here is where you will find all my projects!</h2>
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </Layout>
    );
}

export default ProjectsPage;
