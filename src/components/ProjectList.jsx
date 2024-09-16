import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList = () => {
  const projects = [
    {
      title: 'Food Recipe App',
      description: 'A recipe app that lets users search and explore recipes using the Spoonacular API.',
      link: 'https://vb-recipe-app.vercel.app/',
      ghLink: 'https://github.com/vijayb25/recipe-app',
      technologies: ['React', 'API', 'Vercel'],
      thumbnail: 'recipe.png',
    },
    {
      title: 'To-Do List App',
      description: 'A simple to-do-list app to manage task.',
      link: 'https://todo-reactjs-vite.vercel.app/',
      ghLink: 'https://github.com/vijayb25/react-to-do-list',
      technologies: ['React', 'HTML', 'CSS'],
      thumbnail: 'to-do-list.PNG',
    },
    {
      title: 'Weather App',
      description: 'Weather App that fetches data from OpenWeather API',
      link: 'https://wapp-js.netlify.app/',
      ghLink: 'https://github.com/vijayb25/weatherApp',
      technologies: ['Javascript', 'Openweather API', 'CSS'],
      thumbnail: 'weather-thumb.png',
    }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          technologies={project.technologies}
          thumbnail={project.thumbnail}
          ghLink={project.ghLink}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
