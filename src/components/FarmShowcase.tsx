
import React from 'react';
import { Leaf, Sun, Droplets } from 'lucide-react';

const FarmShowcase = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-green-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-4 animate-bounce delay-300">
          <Leaf className="w-6 h-6 text-green-400/50" />
        </div>
        <div className="absolute bottom-10 right-4 animate-pulse delay-700">
          <Sun className="w-8 h-8 text-yellow-400/50" />
        </div>
        <div className="absolute top-1/2 left-8 animate-bounce delay-1000">
          <Droplets className="w-5 h-5 text-blue-400/50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4 sm:mb-6">
              Modern Sustainable Farming
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Experience our state-of-the-art farming facilities equipped with solar-powered irrigation systems, 
              climate-controlled greenhouses, and innovative agricultural technology that ensures optimal crop yields 
              while maintaining environmental sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start space-x-2 bg-green-100 px-4 py-2 rounded-full">
                <Sun className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-medium text-green-800">Solar Powered</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                <Droplets className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Smart Irrigation</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white p-2 sm:p-3 rounded-2xl shadow-xl">
                <img
                  src="/lovable-uploads/29467388-aa39-43ae-884d-69956263a26c.png"
                  alt="Solar-powered greenhouse with automated irrigation system"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-full animate-bounce delay-500">
                <Leaf className="w-4 h-4" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-2 rounded-full animate-pulse delay-700">
                <Droplets className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmShowcase;
