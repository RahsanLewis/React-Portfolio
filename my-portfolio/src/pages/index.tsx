// pages/index.tsx
import React from 'react';
import Project from '../components/project';
import Layout from '../components/layout';

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
      <div className="bg-gray-100 border border-gray-200 rounded-xl shadow-xl flex flex-col items-center m-12 p-6">
        <h1 className="text-2xl font-bold mb-2 text-black">Welcome to My Portfolio</h1>
        <p className="text-black text-center">Here you can learn more about me, see my projects, and get in touch with me.</p>
      </div>
      <div className="flex flex-col items-center">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </Layout>
  );
}

export default HomePage;
