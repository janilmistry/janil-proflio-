import React, { useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';

interface ProjectsProps {
  openLightbox: (image: string, title: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ openLightbox }) => {
  const [requestedProject, setRequestedProject] = useState<string | null>(null);

  const projects = [
    {
      title: 'PLC-Controlled Industrial Automation',
      description: 'Developed and tested Delta PLC programs for controlling motors, interlocks, and alarms, integrated with HMI touch panels for real-time monitoring.',
      skills: ['Ladder Logic', 'HMI Design', 'Industrial Wiring'],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'VFD Motor Control System',
      description: 'Configured INVT VFDs to adjust motor speed/direction based on PLC logic. Integrated safety interlocks and conducted performance testing.',
      skills: ['PLC-VFD Integration', 'Electrical Safety'],
      image: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Modbus RTU RS-485 Communication',
      description: 'Created a communication link between ESP32 microcontrollers and PLCs using Modbus RTU for industrial device control and monitoring.',
      skills: ['RS-485 Wiring', 'Modbus Registers', 'Embedded C++'],
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Voice-Controlled Automation System',
      description: 'Designed a voice → MQTT → ESP32 → RS-485 pipeline to trigger industrial devices via voice commands using Banana Pi and Python.',
      skills: ['IoT Protocols', 'MQTT', 'Python Scripting'],
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Robotic Scissor Lift Mechanism',
      description: 'Built a compact 2kg load-capable robotic lift for small-sized robots to reach up to 1000 mm height, using precision mechanics and optimized weight distribution.',
      skills: ['Mechanical Design', 'Arduino Control'],
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 transform border border-gray-100 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div 
                  className="h-48 bg-cover bg-center cursor-pointer relative group"
                  style={{ backgroundImage: `url(${project.image})` }}
                  onClick={() => openLightbox(project.image, project.title)}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleRequestInfo(project.title)}
                    className={`w-full flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      requestedProject === project.title
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                    }`}
                    disabled={requestedProject === project.title}
                  >
                    {requestedProject === project.title ? (
                      'Request Sent!'
                    ) : (
                      <>
                        <Info className="w-4 h-4 mr-2" />
                        Request More Info
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
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