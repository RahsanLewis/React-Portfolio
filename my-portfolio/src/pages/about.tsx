import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

const AboutPage = () => (
    <Layout>
        <div className="flex flex-col items-center mt-6 p-6">
            <p className="text-xl text-black text-center m-4 p-2">Hello! I am a full-stack developer based in Central Pennsylvania with a specialty in building applications using React. I have a strong passion for coding and love every aspect of my work.
                For years I have been constantly striving to improve my skills and learn new technologies. The joy I find in solving complex problems and creating intuitive, dynamic user experiences is what drives me in this rapidly evolving industry.</p>

            <p className="text-xl text-black text-center m-4 p-2">When I am not in front of a computer screen, I enjoy playing basketball, traveling, and spending time with family and friends.
                I am always up for a new challenge and look forward to bringing my passion to new projects.</p>

            <p className="text-xl text-black text-center m-4 p-2">
                If you would like to know more about my work or discuss potential opportunities, please feel free to get in
                <Link href="/contact">
                    <span className="text-blue-500 cursor-pointer hover:text-blue-300 transition-colors duration-200"> touch</span>
                </Link>
                .
            </p>
            <p className="text-xl text-black text-center m-4 p-2">
                View my <a href="/resume.pdf" download className="text-blue-500">Resume</a>.
            </p>

        </div>
    </Layout>
)

export default AboutPage;
