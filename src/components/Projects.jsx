import React, { useState } from 'react';
import { projects } from './utils/constants';
import Project from './Project';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div id='projects' className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center">Projects</h2>
      </div>
      <div className="container mx-auto lg:grid lg:grid-cols-2 gap-2 py-10">
        {projects.map((project) => (
          <div key={project.id} className=" w-full p-2">
            <Project {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
