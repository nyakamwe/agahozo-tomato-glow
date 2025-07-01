
import React from 'react';
import { Sprout, Droplets, Sun, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Greenhouse Production",
      description: "State-of-the-art controlled environment agriculture for premium tomato production",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water-Smart Irrigation",
      description: "Advanced hydroponic systems that reduce water usage by up to 90%",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Climate Control",
      description: "Optimized growing conditions for maximum yield and quality year-round",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Training",
      description: "Empowering local farmers with modern agricultural techniques and skills",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Our Services & Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining traditional farming wisdom with cutting-edge technology 
            to create sustainable agricultural solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Animated Tomato Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-red-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-6 h-6 bg-red-600 rounded-full animate-bounce delay-200"></div>
            </div>
            <span className="text-green-800 font-semibold">Fresh Tomatoes Daily</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
