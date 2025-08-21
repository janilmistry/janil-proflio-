import React from 'react';
import { Award, Briefcase, Trophy } from 'lucide-react';

interface AchievementsProps {
  openLightbox: (image: string, title: string) => void;
}

const Achievements: React.FC<AchievementsProps> = ({ openLightbox }) => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Competition Achievements',
      description: 'Multiple robotics competition successes',
      details: 'PST PToP Vadodara (Participated), Robo Sumo (Top 5), Robo Race (Top 4) - Demonstrated expertise in competitive robotics',
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Briefcase,
      title: 'Professional Internships',
      description: 'Multiple industry internship experiences',
      details: 'Spark Automation (60 days), AT Project & Innovation Lab (15 days), KSV Drone Program (30 days) - Gained expertise in Modbus, PLC, VFD, HMI, IoT, Robotics, and UAV systems',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Award,
      title: 'Innovation Leadership',
      description: 'Road Safety Innovation Challenge 2025',
      details: 'Organized major innovation event with Government Polytechnic, Ahmedabad, demonstrating leadership in technology and social impact initiatives',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Achievements</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognitions and milestones in robotics, automation, and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 transform animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div 
                  className="h-48 bg-cover bg-center cursor-pointer relative group"
                  style={{ backgroundImage: `url(${achievement.image})` }}
                  onClick={() => openLightbox(achievement.image, achievement.title)}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <achievement.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{achievement.description}</p>
                  <p className="text-gray-600 leading-relaxed">{achievement.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;