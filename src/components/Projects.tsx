import React, { useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';

interface ProjectsProps {
  openLightbox: (image: string, title: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ openLightbox }) => {
  const [requestedProject, setRequestedProject] = useState<string | null>(null);

  const projects: any[] = [];

  const handleRequestInfo = (projectTitle: string) => {
    setRequestedProject(projectTitle);
    setTimeout(() => setRequestedProject(null), 2000);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selected PLC & industrial automation projects showcasing practical solutions and technical expertise
            </p>
          </div>

          <div className="text-center py-16">
            <div className="bg-gray-50 rounded-xl p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Projects Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                I'm currently working on documenting my latest PLC and industrial automation projects. 
                Check back soon for detailed project showcases and technical implementations.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Contact for Project Details
              </a>
            </div>
          </div>

          <div className="text-center mt-12 p-6 bg-blue-50 rounded-xl">
            <p className="text-gray-700 mb-4">
              Interested in detailed technical specifications, source code, or collaboration opportunities?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Get in Touch for Full Project Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;