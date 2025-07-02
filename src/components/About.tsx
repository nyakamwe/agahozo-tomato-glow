
import React from 'react';
import { Target } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Agahozo Farm Ltd
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Agahozo Farm Ltd provides high-quality farm services aimed at boosting agricultural productivity and sustainability in Rwanda. The company works with partners and service providers to enhance value chains through improved livestock management, farm yield optimization, and agribusiness solutions tailored to local contexts. The farm is committed to promoting innovative farming practices and contributing to Rwanda's agricultural transformation. Its operations align with national development goals, including job creation, food security, and rural economic empowerment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 bg-green-50 p-8 rounded-2xl shadow-lg">
            <div className="bg-green-100 p-4 rounded-full flex-shrink-0">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To revolutionize agriculture through climate-smart practices while creating 
                sustainable employment opportunities for rural communities in Rwanda. We strive to 
                enhance food security, promote innovative farming techniques, and contribute to 
                the country's agricultural transformation through comprehensive agribusiness support 
                and livestock production services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
