import React from 'react';
import { Settings, Shield, Zap } from 'lucide-react';

const IndustrialProducts: React.FC = () => {
  const products = [
    {
      icon: Settings,
      title: 'Universal Control Panels',
      description: 'Customizable PLC-based control systems designed for diverse industrial applications, enabling seamless integration across different machinery and processes.',
      features: ['Multi-protocol support', 'Scalable architecture', 'User-friendly HMI'],
    },
    {
      icon: Shield,
      title: 'Safety Automation Systems',
      description: 'Comprehensive safety solutions incorporating emergency stops, interlocks, and fail-safe mechanisms to ensure operator protection and equipment integrity.',
      features: ['Emergency protocols', 'Fault detection', 'Compliance standards'],
    },
    {
      icon: Zap,
      title: 'Smart IoT Integration Modules',
      description: 'Advanced connectivity solutions that bridge traditional industrial equipment with modern IoT platforms, enabling remote monitoring and predictive maintenance.',
      features: ['Cloud connectivity', 'Real-time analytics', 'Remote diagnostics'],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industrial Products</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PLC-related industrial solutions designed to enable universal access and streamline automation processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 transform animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <product.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  Request Technical Details
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Custom Solutions Available</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Need a tailored automation solution for your specific industrial requirements? 
              Let's discuss how we can develop custom products that fit your unique needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Discuss Custom Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialProducts;