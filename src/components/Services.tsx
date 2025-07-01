
import React from 'react';
import { Sprout, Droplets, Sun, Users, Zap, Leaf } from 'lucide-react';

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
      title: "Solar-Powered Systems",
      description: "Renewable energy solutions powering our greenhouse operations sustainably",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Training",
      description: "Empowering local farmers with modern agricultural techniques and skills",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-orange-50 relative overflow-hidden">
      {/* Background Moving Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Greenhouse */}
        <div className="absolute top-10 left-10 animate-bounce delay-300">
          <div className="w-12 h-10 bg-green-200/50 rounded-lg border border-green-300">
            <div className="w-full h-2 bg-green-300 rounded-t-lg"></div>
            <div className="flex justify-center mt-1">
              <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse delay-300 ml-0.5"></div>
            </div>
          </div>
        </div>
        
        {/* Solar Panel */}
        <div className="absolute top-20 right-20 animate-pulse delay-700">
          <div className="w-10 h-6 bg-blue-200/50 rounded border border-blue-300">
            <div className="grid grid-cols-3 gap-0.5 p-0.5 h-full">
              <div className="bg-blue-400 rounded-sm animate-pulse"></div>
              <div className="bg-blue-400 rounded-sm animate-pulse delay-200"></div>
              <div className="bg-blue-400 rounded-sm animate-pulse delay-400"></div>
            </div>
          </div>
        </div>
        
        {/* Irrigation Droplets */}
        <div className="absolute bottom-20 left-20 animate-bounce delay-1000">
          <Droplets className="w-8 h-8 text-blue-400/60 animate-pulse" />
        </div>
        
        {/* Spinning Sun */}
        <div className="absolute bottom-32 right-32 animate-spin slow">
          <Sun className="w-10 h-10 text-yellow-500/60" />
        </div>
        
        {/* Electric Elements */}
        <div className="absolute top-1/2 left-1/4 animate-pulse delay-500">
          <Zap className="w-6 h-6 text-yellow-400/60" />
        </div>
        
        {/* Floating Leaves */}
        <div className="absolute top-1/3 right-1/3 animate-bounce delay-800">
          <Leaf className="w-6 h-6 text-green-400/60 animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Service Card Background Animation */}
              <div className="absolute top-4 right-4 opacity-20">
                {index === 0 && (
                  <div className="w-6 h-5 bg-green-200 rounded border border-green-300 animate-pulse">
                    <div className="w-full h-1 bg-green-400 rounded-t"></div>
                  </div>
                )}
                {index === 1 && (
                  <Droplets className="w-6 h-6 text-blue-400 animate-bounce" />
                )}
                {index === 2 && (
                  <div className="w-6 h-4 bg-yellow-200 rounded border border-yellow-400 animate-pulse">
                    <div className="grid grid-cols-2 gap-0.5 p-0.5 h-full">
                      <div className="bg-yellow-400 rounded-sm animate-pulse"></div>
                      <div className="bg-yellow-400 rounded-sm animate-pulse delay-200"></div>
                    </div>
                  </div>
                )}
                {index === 3 && (
                  <Users className="w-6 h-6 text-purple-400 animate-pulse" />
                )}
              </div>
              
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

        {/* Enhanced Animated Tomato Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg relative">
            {/* Greenhouse Icon */}
            <div className="absolute -left-2 -top-2 animate-bounce delay-500">
              <div className="w-8 h-6 bg-green-100 rounded border border-green-300">
                <div className="w-full h-1 bg-green-400 rounded-t"></div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-red-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-6 h-6 bg-red-600 rounded-full animate-bounce delay-200"></div>
            </div>
            <span className="text-green-800 font-semibold">Fresh Tomatoes Daily</span>
            
            {/* Solar Panel Icon */}
            <div className="absolute -right-2 -bottom-2 animate-pulse delay-700">
              <div className="w-6 h-4 bg-blue-100 rounded border border-blue-300">
                <div className="grid grid-cols-2 gap-0.5 p-0.5 h-full">
                  <div className="bg-blue-400 rounded-sm animate-pulse"></div>
                  <div className="bg-blue-400 rounded-sm animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
