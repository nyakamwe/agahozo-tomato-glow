
import React from 'react';
import { Leaf, Heart, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Growing Excellence, Nurturing Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Agahozo Farm Ltd, we believe in the power of sustainable agriculture 
            to transform lives and communities while protecting our environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-red-400 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                alt="Greenhouse farming" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-4 rounded-full animate-pulse">
              <Heart className="w-8 h-8" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To revolutionize agriculture through climate-smart practices while creating 
                  sustainable employment opportunities for rural communities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Leaf className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Sustainable Practices</h3>
                <p className="text-gray-600">
                  Our greenhouse technology enables year-round production with minimal water usage 
                  and maximum yield efficiency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Quality Excellence</h3>
                <p className="text-gray-600">
                  Premium greenhouse tomatoes that meet international standards while 
                  supporting local food security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
