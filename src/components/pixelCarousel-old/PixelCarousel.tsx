import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import type { Project } from './types';
import './PixelCarousel.css';

interface PixelCarouselProps {
  projects: Project[];
}

export const PixelCarousel: React.FC<PixelCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getVisibleCards = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const visibleCards = getVisibleCards();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCards);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => {
      if (prevIndex >= maxIndex) {
        return 0; // Loop para o início
      }
      return prevIndex + 1;
    });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => {
      if (prevIndex <= 0) {
        return maxIndex; // Loop para o final
      }
      return prevIndex - 1;
    });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className="pixel-carousel-container">
      <div className="pixel-window">
        <div className="pixel-window-header">
          <div className="pixel-dots">
            <span className="pixel-dot"></span>
            <span className="pixel-dot"></span>
            <span className="pixel-dot"></span>
          </div>
        </div>
        <div className="pixel-carousel-content">
          <button
            className="pixel-nav-button pixel-prev"
            onClick={prevSlide}
            disabled={isTransitioning || projects.length <= visibleCards}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="pixel-carousel-track">
            <div
              className="pixel-carousel-inner"
              style={{
                display: 'flex',
                transition: 'transform 0.3s ease',
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                width: `${(projects.length / visibleCards) * 100}%`
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  style={{
                    flex: `0 0 ${100 / projects.length}%`,
                    maxWidth: `${100 / projects.length}%`,
                    boxSizing: 'border-box',
                    height: '100%',
                  }}
                >
                  <ProjectCard
                    project={project}
                    isActive={index >= currentIndex && index < currentIndex + visibleCards}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="pixel-nav-button pixel-next"
            onClick={nextSlide}
            disabled={isTransitioning || projects.length <= visibleCards}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        {projects.length > visibleCards && (
          <div className="pixel-indicators">
            {Array.from({ length: projects.length - visibleCards + 1 }).map((_, index) => (
              <button
                key={index}
                className={`pixel-indicator ${currentIndex === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
