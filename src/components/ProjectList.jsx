import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects = [] }) => {
  const [filter, setFilter] = useState('all');

  // Extract unique technologies from all projects
  const allTechnologies = [...new Set(
    projects.flatMap(project => project.technologies || [])
  )];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project =>
      project.technologies && project.technologies.includes(filter)
    );

  return (
    <div className="project-list-container">
      <div className="filter-buttons">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        {allTechnologies.map(tech => (
          <button
            key={tech}
            className={filter === tech ? 'active' : ''}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))
        ) : (
          <p className="no-projects">No projects found for the selected filter.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectList;