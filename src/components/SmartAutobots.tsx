import React from 'react';
import { Bot, Users, Lightbulb, Wrench, Globe, BookOpen, Award, Heart } from 'lucide-react';

const SmartAutobots: React.FC = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Training & Workshops',
      items: ['Basics of Electronics & Robotics', 'Arduino Programming & Projects', 'IoT (ESP, Raspberry Pi, etc.)', '3D Printing & Design']
    },
    {
      icon: Users,
      title: 'Student Support',
      items: ['Guidance for College/School Projects', 'Circuit Simulation & PCB Design', 'Mentorship in Robotics Competitions']
    },
    {
      icon: Wrench,
      title: 'Products & Solutions',
      items: ['Arduino & ESP-based Devices', 'Robotics Kits for Students', 'Custom Prototypes for Startups']
    }
  ];

  const whyChoose = [
    { icon: Lightbulb, text: 'Hands-on Learning: Students actually build and experiment.' },
    { icon: Award, text: 'Expert Mentorship: Team of young robotics engineers.' },
    { icon: Users, text: 'School/College Partnership: Teacher training, student workshops.' },
    { icon: Heart, text: 'Innovation for Good: Focus on tech with social impact.' },
  ];

  return (
    <section id="smartautobots" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">SmartAutobots</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An Innovation & Learning Platform focused on Robotics, IoT, and Automation. We help students, schools, and enthusiasts learn, build, and innovate using electronics and smart technologies.
            </p>
          </div>

          {/* What We Do Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What We Do</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h4>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose SmartAutobots */}
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 md:p-12 rounded-2xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose SmartAutobots?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {whyChoose.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <reason.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="text-center mb-12 p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4">
                <div className="text-3xl mb-2">🎯</div>
                <p className="text-gray-700 font-medium">Fun + Easy-to-understand learning</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🔧</div>
                <p className="text-gray-700 font-medium">Practical Projects students can build</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🚀</div>
                <p className="text-gray-700 font-medium">Future-Ready Skills</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🤝</div>
                <p className="text-gray-700 font-medium">Student-friendly approach</p>
              </div>
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