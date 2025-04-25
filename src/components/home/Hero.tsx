import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Accessibility, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-44 md:pb-24 overflow-hidden">
      <motion.div
        className="absolute -top-40 right-0 w-96 h-96 bg-secondary-500 rounded-full filter blur-[128px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-accent-500 rounded-full filter blur-[128px] opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Text content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block bg-white bg-opacity-10 backdrop-blur-sm text-secondary-400 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Breaking Communication Barriers
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Transforming Sign Language into 
              <span className="text-secondary-400"> Spoken Words</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Our cutting-edge technology bridges the gap between sign language and speech,
              making communication accessible for everyone in real-time.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link to="/live-translation">
                <motion.button 
                  className="btn-primary flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try it Now <ArrowRight className="ml-2" size={18} />
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button 
                  className="btn bg-white bg-opacity-10 hover:bg-opacity-20 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Hero Image/Illustration */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="glass-card p-4 overflow-hidden relative"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,215,200,0.3)" }}
              >
                <img 
                  src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sign language translation" 
                  className="rounded-lg w-full"
                />
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl flex items-center space-x-3 border border-white border-opacity-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="bg-secondary-500 rounded-full p-2">
                    <Accessibility size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Real-time</p>
                    <p className="text-xs text-gray-300">Translation</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-6 -right-6 glass-card p-4 rounded-xl flex items-center space-x-3 border border-white border-opacity-20"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="bg-accent-500 rounded-full p-2">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Spoken</p>
                    <p className="text-xs text-gray-300">Sentences</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;