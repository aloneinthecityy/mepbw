import React from 'react';
import type { Project } from './types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive }) => {
  return (
    <div className={`pixel-project-card ${isActive ? 'active' : ''}`}>
      <div className="pixel-card-header">
        <div className="pixel-dots">
          <span className="pixel-dot"></span>
          <span className="pixel-dot"></span>
          <span className="pixel-dot"></span>
        </div>
        <h3 className="pixel-project-title">
          <span className="pixel-arrow">{'>'}</span> {project.title}
        </h3>
      </div>
      
      <div className="pixel-card-date">[{project.date}]</div>
      
      <div className="pixel-card-description">
        {project.description}
      </div>
      
      <div className="pixel-card-footer">
        <a href={project.link} className="pixel-read-more">
          Read more <span className="pixel-arrow">{'>'}</span>
        </a>
      </div>
      
      {project.technologies && (
        <div className="pixel-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="pixel-tech-tag">{tech}</span>
          ))}
        </div>
      )}
    </div>
  );
};