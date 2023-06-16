interface ProjectProps {
  project: {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-gray-100 text-black border border-gray-200 rounded-xl shadow-xl m-4 p-4 transform transition-transform duration-500 hover:scale-105">
      <h2 className="text-xl font-semibold mb-2 text-center">{project.title}</h2>
      <p className="mb-4 text-center">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover mb-4 rounded"/>
      </a>
    </div>
  );
};

export default Project;
