import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Form */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-400 text-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-400 text-white"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-400 text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-400 text-white"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-400 text-white"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <Send className="ml-2" size={18} />
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-500 rounded-full p-3 mr-4">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Our Location</h3>
                    <p className="text-gray-300">123 Innovation Drive<br />New delhi, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-500 rounded-full p-3 mr-4">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone Number</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-500 rounded-full p-3 mr-4">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Address</h3>
                    <p className="text-gray-300">contact@signspeak.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-500 rounded-full p-3 mr-4">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 flex-grow">
              <h2 className="text-2xl font-bold mb-6">Help & Support</h2>
              <p className="text-gray-300 mb-6">
                Need technical assistance or have questions about our services? Our support team is here to help.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <h3 className="font-medium mb-1">Technical Support</h3>
                  <p className="text-gray-400 mb-2">For issues with the app or service.</p>
                  <a href="#" className="text-secondary-400 hover:underline">support@signspeak.com</a>
                </div>
                
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <h3 className="font-medium mb-1">Sales Inquiries</h3>
                  <p className="text-gray-400 mb-2">For pricing and enterprise solutions.</p>
                  <a href="#" className="text-secondary-400 hover:underline">sales@signspeak.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;