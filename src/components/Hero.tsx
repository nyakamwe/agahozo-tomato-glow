
import React from 'react';
import { Leaf, TreePine, Users, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Tomatoes */}
        <div className="absolute top-20 left-4 sm:left-10 animate-bounce">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
        </div>
        <div className="absolute top-40 right-10 sm:right-20 animate-bounce delay-300">
          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-red-600 rounded-full shadow-lg animate-pulse"></div>
        </div>
        <div className="absolute bottom-32 left-10 sm:left-20 animate-bounce delay-500">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-400 rounded-full shadow-lg animate-pulse"></div>
        </div>
        
        {/* Floating Leaves */}
        <div className="absolute top-32 right-16 sm:right-32 animate-spin slow">
          <Leaf className="w-8 h-8 sm:w-12 sm:h-12 text-green-300 opacity-70" />
        </div>
        <div className="absolute bottom-40 right-20 sm:right-40 animate-spin slow delay-700">
          <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-200 opacity-60" />
        </div>
        
        {/* Greenhouse Images */}
        <div className="absolute top-1/4 left-4 sm:left-10 animate-bounce delay-1000">
          <div className="w-12 h-9 sm:w-16 sm:h-12 bg-green-400/30 rounded-lg border-2 border-green-300 backdrop-blur-sm">
            <div className="w-full h-1 sm:h-2 bg-green-300 rounded-t-lg"></div>
          </div>
        </div>
        
        {/* Solar Panel Animation */}
        <div className="absolute bottom-1/4 right-4 sm:right-10 animate-pulse delay-500">
          <div className="w-10 h-6 sm:w-12 sm:h-8 bg-blue-400/40 rounded border border-blue-300 backdrop-blur-sm">
            <div className="grid grid-cols-3 gap-0.5 p-1 h-full">
              <div className="bg-blue-300 rounded-sm animate-pulse"></div>
              <div className="bg-blue-300 rounded-sm animate-pulse delay-100"></div>
              <div className="bg-blue-300 rounded-sm animate-pulse delay-200"></div>
              <div className="bg-blue-300 rounded-sm animate-pulse delay-300"></div>
              <div className="bg-blue-300 rounded-sm animate-pulse delay-400"></div>
              <div className="bg-blue-300 rounded-sm animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
        
        {/* Sparkles */}
        <div className="absolute top-24 left-1/4 animate-pulse">
          <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-300" />
        </div>
        <div className="absolute bottom-24 right-1/4 animate-pulse delay-1000">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-200" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-[slideInFromTop_1s_ease-out]">
            <span className="block animate-[slideInFromLeft_1s_ease-out_0.2s_both]">Welcome to</span>
            <span className="block text-blue-400 animate-[slideInFromRight_1s_ease-out_0.4s_both]">Agahozo Farm Ltd</span>
          </h1>
          
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2 animate-[slideInFromBottom_1s_ease-out_0.6s_both]">
            Your trusted partner in sustainable agriculture, livestock production, and agribusiness support in Rwanda. We are dedicated to delivering innovative, high-quality agricultural services that empower farmers, enhance food security, and promote rural development.
          </p>

          <p className="font-sans text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2 animate-[fadeInUp_1s_ease-out_0.8s_both]">
            Agahozo Farm LTD is a Rwandan registered company with its Head office in Kigali City, Remera – Gasabo and offer distinguished mixing farm services according to the business activities like support activities for animal production and wholesale of agricultural raw materials and live animals and so, on hereinafter referred to as the "Client", represented by Managing Director, Mr. Vincent TWAGIRAMUNGU.
          </p>
          
          <button 
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-[bounceIn_1s_ease-out_1.2s_both]"
          >
            Discover Our Story
          </button>
        </div>
      </div>

      {/* Greenhouse Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-800/30 rounded-t-full"></div>
      </div>
    </section>
  );
};

export default Hero;
