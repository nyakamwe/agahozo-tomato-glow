
import React from 'react';
import { MapPin, TrendingUp, Users, Leaf, Droplets, Sun } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Impact = () => {
  const stats = [
    { number: 50, label: "Jobs Created", icon: <Users className="w-6 h-6" />, suffix: "+" },
    { number: 2, label: "Districts Served", icon: <MapPin className="w-6 h-6" />, suffix: "" },
    { number: 365, label: "Days Production", icon: <TrendingUp className="w-6 h-6" />, suffix: "" },
    { number: 90, label: "Water Savings", icon: <Leaf className="w-6 h-6" />, suffix: "%" }
  ];

  return (
    <section className="py-20 bg-green-800 text-white relative overflow-hidden">
      {/* Background Pattern with Moving Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full animate-spin slow"></div>
        
        {/* Greenhouse Animation */}
        <div className="absolute top-20 right-20 animate-bounce delay-300">
          <div className="w-20 h-16 bg-white/10 rounded-lg border border-white/20">
            <div className="w-full h-3 bg-white/20 rounded-t-lg"></div>
            <div className="flex justify-center mt-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200 ml-1"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-400 ml-1"></div>
            </div>
          </div>
        </div>
        
        {/* Solar Panel Animation */}
        <div className="absolute bottom-20 left-20 animate-pulse delay-700">
          <div className="w-16 h-12 bg-white/10 rounded border border-white/20">
            <div className="grid grid-cols-4 gap-0.5 p-1 h-full">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="bg-blue-300/50 rounded-sm animate-pulse" 
                  style={{ animationDelay: `${i * 100}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Irrigation System */}
        <div className="absolute top-1/3 left-1/3 animate-bounce delay-1000">
          <Droplets className="w-8 h-8 text-blue-300/50 animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-spin slow delay-500">
          <Sun className="w-10 h-10 text-yellow-300/50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Impact on Communities
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Transforming lives through sustainable agriculture in Kigali city and Bugesera district
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-orange-300">
                  {stat.icon}
                </div>
              </div>
              <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              <div className="text-green-100 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Location Cards with Moving Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 animate-pulse">
              <div className="w-8 h-6 bg-green-400/30 rounded border border-green-300">
                <div className="w-full h-1 bg-green-300 rounded-t"></div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="w-8 h-8 text-orange-300" />
              <h3 className="text-2xl font-bold">Kigali City</h3>
            </div>
            <p className="text-green-100 leading-relaxed">
              Our urban farming initiatives provide fresh produce to city markets while 
              demonstrating sustainable agriculture practices in urban environments.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 animate-bounce delay-500">
              <div className="w-6 h-4 bg-blue-400/40 rounded border border-blue-300">
                <div className="grid grid-cols-2 gap-0.5 p-0.5 h-full">
                  <div className="bg-blue-300 rounded-sm animate-pulse"></div>
                  <div className="bg-blue-300 rounded-sm animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="w-8 h-8 text-orange-300" />
              <h3 className="text-2xl font-bold">Bugesera District</h3>
            </div>
            <p className="text-green-100 leading-relaxed">
              Empowering rural communities through agricultural training and job creation, 
              building sustainable livelihoods in traditional farming areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
