
import React from 'react';
import { Leaf, TreePine, Users, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-orange-400">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Tomatoes */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-8 h-8 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-300">
          <div className="w-6 h-6 bg-red-600 rounded-full shadow-lg animate-pulse"></div>
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-500">
          <div className="w-10 h-10 bg-red-400 rounded-full shadow-lg animate-pulse"></div>
        </div>
        
        {/* Floating Leaves */}
        <div className="absolute top-32 right-32 animate-spin slow">
          <Leaf className="w-12 h-12 text-green-300 opacity-70" />
        </div>
        <div className="absolute bottom-40 right-40 animate-spin slow delay-700">
          <Leaf className="w-8 h-8 text-green-200 opacity-60" />
        </div>
        
        {/* Sparkles */}
        <div className="absolute top-24 left-1/4 animate-pulse">
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </div>
        <div className="absolute bottom-24 right-1/4 animate-pulse delay-1000">
          <Sparkles className="w-4 h-4 text-yellow-200" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Agahozo Farm</span>
            <span className="block text-orange-200">Limited</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Climate-smart agribusiness producing high-quality greenhouse tomatoes year-round 
            while creating jobs and empowering rural communities in Kigali city and Bugesera district
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <TreePine className="w-5 h-5" />
              <span>Sustainable Farming</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <Users className="w-5 h-5" />
              <span>Community Empowerment</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <Leaf className="w-5 h-5" />
              <span>Year-Round Production</span>
            </div>
          </div>
          
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Discover Our Story
          </button>
        </div>
      </div>

      {/* Greenhouse Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-800/30 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-green-900/20 rounded-t-full"></div>
      </div>
    </section>
  );
};

export default Hero;
