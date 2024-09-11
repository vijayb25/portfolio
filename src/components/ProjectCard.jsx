import React from 'react';

const ProjectCard = ({ title, description, link, technologies, thumbnail }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 p-4 max-w-[370px] w-full min-h-[480px]">
      {thumbnail && (
        <img className="w-full h-48 object-cover rounded-lg" src={thumbnail} alt={title} />
      )}
      <div className="py-4">
        <div className="font-bold text-xl mb-2 text-black">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="pt-4 pb-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="px-2 py-4">
        <i className='fa-solid fa-arrow-up-right-from-square text-black mr-2'></i>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-700 text-sm  normal-case">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;