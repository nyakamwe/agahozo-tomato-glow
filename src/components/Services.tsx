
import React from 'react';
import { Sprout, Droplets, Sun, Package, Shield, Wheat } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Land Preparation",
      description: "Professional land preparation services to optimize soil conditions for maximum crop yield",
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-800"
    },
    {
      icon: <Wheat className="w-8 h-8" />,
      title: "Crop Management",
      description: "Comprehensive crop management solutions from planting to harvest optimization",
      color: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-800"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Irrigation Systems",
      description: "Modern irrigation system installation and maintenance for efficient water management",
      color: "from-cyan-400 to-cyan-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-800"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Agricultural Input Supply & Raw Materials",
      description: "Quality agricultural inputs, seeds, fertilizers, and raw materials supply",
      color: "from-violet-400 to-violet-600",
      bgColor: "bg-violet-50",
      textColor: "text-violet-800"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pest Control",
      description: "Integrated pest management solutions to protect crops and ensure healthy yields",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-800"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Harvesting",
      description: "Professional harvesting services and post-harvest handling for optimal produce quality",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-800"
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
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive agricultural services designed to enhance productivity 
            and sustainability across Rwanda's farming communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group ${service.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden border-2 border-white`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-semibold ${service.textColor} mb-4`}>
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
