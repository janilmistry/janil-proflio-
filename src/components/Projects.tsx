import React, { useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';

interface ProjectsProps {
  openLightbox: (image: string, title: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ openLightbox }) => {
  const [requestedProject, setRequestedProject] = useState<string | null>(null);

  const projects = [
    {
      title: 'Industrial Fault Alert System',
      description: 'Real-time alerting system with SCADA integration using ESP32, RS-485, and GSM modules.',
      technologies: 'ESP32, RS-485, GSM, SCADA',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Industrial Modbus Gateway',
      description: 'Multi-UART Modbus RTU/TCP gateway for connecting various industrial sensors and devices.',
      technologies: 'ESP32, RS-485, Modbus RTU/TCP',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Twilio Emergency Call Alert',
      description: 'Emergency alert system with captive portal configuration and Twilio API integration.',
      technologies: 'ESP32, Twilio API, SPIFFS',
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Home Automation System',
      description: 'Complete IoT home automation with Alexa integration, MQTT protocols, and web dashboards.',
      technologies: 'ESP32, Relays, Alexa, MQTT',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Wireless Audio Announcer',
      description: 'Multi-room wireless audio announcement system using RS-485 communication protocol.',
      technologies: 'ESP32, DFPlayer, RS-485',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'RS-485 Modbus Reader',
      description: 'Industrial sensor data reader with Modbus RTU protocol and real-time data parsing.',
      technologies: 'ESP32, RS-485 TTL, Modbus RTU',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Warehouse Robot with Scissor Lift',
      description: 'Mobile robot with lifting mechanism capable of 2kg load and 1000mm lift height.',
      technologies: 'Mobile Robotics, Scissor Lift Mechanism',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'NSG Glucose Bottle Indicator',
      description: 'IoT-enabled medical monitoring system for glucose bottle level indication.',
      technologies: 'IoT, Medical Monitoring',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Industrial IoT RS-485 Integration',
      description: 'Cloud-connected Modbus machines with comprehensive IoT integration capabilities.',
      technologies: 'ESP32, Modbus, IoT Cloud',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Alexa-Controlled PLC',
      description: 'Voice-controlled industrial PLC system using Alexa API and Modbus communication.',
      technologies: 'ESP32, Modbus, Alexa API',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Smart Industrial Alert System',
      description: 'Comprehensive alert system combining voice announcements and call notifications.',
      technologies: 'ESP32, DFPlayer, RS-485, Twilio',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
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
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 transform animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div 
                  className="h-48 bg-cover bg-center cursor-pointer relative group"
                  style={{ backgroundImage: `url(${project.image})` }}
                  onClick={() => openLightbox(project.image, project.title)}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                      {project.technologies}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <button 
                    onClick={() => handleRequestInfo(project.title)}
                    className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      requestedProject === project.title 
                        ? 'bg-green-600 text-white' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {requestedProject === project.title ? 'Request Sent!' : 'Request Info'}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;