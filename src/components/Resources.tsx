import React from 'react';
import { BookOpen, Lock, Download } from 'lucide-react';

const Resources: React.FC = () => {
  const resources = [
    {
      title: 'PLC Programming Fundamentals',
      description: 'Essential concepts and best practices for ladder logic programming, including common industrial applications and troubleshooting techniques.',
      type: 'Guide',
      restricted: false,
    },
    {
      title: 'Industrial IoT Integration Strategies',
      description: 'Overview of connecting traditional industrial systems with modern IoT platforms, including protocol selection and security considerations.',
      type: 'Whitepaper',
      restricted: false,
    },
    {
      title: 'Advanced Automation Architectures',
      description: 'Comprehensive analysis of scalable automation systems, including distributed control systems and edge computing implementations.',
      type: 'Technical Manual',
      restricted: true,
    },
    {
      title: 'VFD Configuration & Optimization',
      description: 'Detailed procedures for variable frequency drive setup, parameter tuning, and integration with PLC control systems.',
      type: 'Technical Guide',
      restricted: true,
    },
    {
      title: 'Modbus Communication Protocols',
      description: 'Complete implementation guide covering Modbus RTU/TCP configuration, register mapping, and troubleshooting methodologies.',
      type: 'Reference Manual',
      restricted: true,
    },
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Resources</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technical guides and documentation for PLC programming, IoT integration, and industrial automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  {resource.restricted && (
                    <Lock className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>
                
                <button className={`w-full flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  resource.restricted 
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  {resource.restricted ? (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Request Access
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gray-50 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Detailed Resources?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Advanced technical documentation, project source codes, and specialized guides are available upon request. 
              Contact me directly to discuss your specific learning or implementation needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Request Detailed Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;