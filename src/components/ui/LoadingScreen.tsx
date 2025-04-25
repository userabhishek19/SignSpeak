import React from 'react';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-background-dark flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div 
          animate={{ 
            rotate: 360,
            transition: { duration: 2, repeat: Infinity, ease: "linear" }
          }}
        >
          <Loader size={48} className="text-secondary-400 mb-6" />
        </motion.div>
        
        <motion.h2 
          className="text-3xl font-bold mb-2 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-white">Sign</span>
          <span className="text-secondary-400">Speak</span>
        </motion.h2>
        
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading amazing things...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;