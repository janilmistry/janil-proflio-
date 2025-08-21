import React from 'react';
import { Bot, Users, Lightbulb, Wrench, Globe } from 'lucide-react';

const SmartAutobots: React.FC = () => {
  const features = [
    { icon: Bot, text: 'Founded in 2025 as a robotics and automation initiative.' },
    { icon: Users, text: 'Provides training in Arduino, robotics, and 3D printing.' },
    { icon: Wrench, text: 'Works on IoT and industrial automation projects.' },
    { icon: Lightbulb, text: 'Helps startups with prototyping and automation solutions.' },
    { icon: Globe, text: 'Focused on making advanced tech accessible to everyone.' },
  ];

  return (
    <section id="smartautobots" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">SmartAutobots</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A robotics and automation initiative dedicated to making advanced technology accessible to everyone
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              Learn More About SmartAutobots
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartAutobots;