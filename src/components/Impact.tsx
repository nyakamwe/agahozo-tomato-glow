
import React from 'react';
import { MapPin, TrendingUp, Users, Leaf } from 'lucide-react';

const Impact = () => {
  const stats = [
    { number: "50+", label: "Jobs Created", icon: <Users className="w-6 h-6" /> },
    { number: "2", label: "Districts Served", icon: <MapPin className="w-6 h-6" /> },
    { number: "365", label: "Days Production", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "90%", label: "Water Savings", icon: <Leaf className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-green-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
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
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">
                {stat.number}
              </div>
              <div className="text-green-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="w-8 h-8 text-orange-300" />
              <h3 className="text-2xl font-bold">Kigali City</h3>
            </div>
            <p className="text-green-100 leading-relaxed">
              Our urban farming initiatives provide fresh produce to city markets while 
              demonstrating sustainable agriculture practices in urban environments.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
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
