
import React from 'react';
import { Mail, Phone, MapPin, Leaf } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to learn more about our sustainable farming practices or 
            partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 p-4 rounded-full">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Email Us</h3>
                <p className="text-gray-600">info@agahozofarm.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-100 p-4 rounded-full">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Call Us</h3>
                <p className="text-gray-600">+250789049051</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 p-4 rounded-full">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Visit Us</h3>
                <p className="text-gray-600">Kigali City & Bugesera District, Rwanda</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your interest in our farm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-red-500 hover:from-green-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Leaf className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
