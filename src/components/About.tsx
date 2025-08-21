import React from 'react';
import { Cpu, Cog, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Cpu, title: 'PLC Programming', desc: 'Delta PLC, Ladder Logic, HMI Design' },
    { icon: Cog, title: 'Industrial Automation', desc: 'VFD Control, Modbus RTU, MQTT IoT' },
    { icon: Zap, title: 'Embedded Systems', desc: 'Arduino, ESP32, 3D Design & Printing' },
    { icon: Users, title: 'Mentoring', desc: 'Guiding Startups & Students in Tech' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I am <strong>Janil Mistry</strong>, a Robotics Engineer with hands-on experience in automation, 
                  embedded systems, and product development. My expertise spans PLC programming, HMI design, 
                  VFD configuration, Arduino systems, 3D design, and IoT integration.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In 2025, I completed a six-week industrial internship at <strong>Spark Automation</strong>, 
                  where I worked on real-world projects involving control panel design, Modbus RTU communication, 
                  and MQTT-based IoT systems.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I am passionate about bridging the gap between engineering concepts and practical solutions, 
                  and I regularly guide students, startups, and hobbyists in adopting emerging technologies.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  I also founded <strong>SmartAutobots</strong>, a platform that provides training, builds prototypes, 
                  and delivers accessible automation solutions for industries and innovators alike.
                </p>
              </div>
            </div>

            <div className="grid gap-6 animate-fade-in-up-delay">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <skill.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
                      <p className="text-gray-600">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;