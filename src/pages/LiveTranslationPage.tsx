import React from 'react';
import { motion } from 'framer-motion';
import WebcamTranslator from '../components/translation/WebcamTranslator';

const LiveTranslationPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Live Translation</h1>
          <p className="text-xl text-gray-300">
            Experience real-time sign language translation right in your browser.
            Position yourself clearly in the camera frame and begin signing.
          </p>
        </motion.div>
        
        <WebcamTranslator />
        
        <motion.div 
          className="glass-card p-8 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our technology uses advanced computer vision and machine learning algorithms to
            recognize sign language gestures and convert them into spoken language in real-time.
            The more you use it, the better it gets at understanding your specific signing style.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveTranslationPage;