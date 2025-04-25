import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from '../ui/ParticleBackground';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <ParticleBackground />
      
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            className="loading-screen"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="loading-logo text-5xl font-bold text-white flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-secondary-400">Sign</span>
              <span className="text-accent-400">Speak</span>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      
      <Navbar />
      
      <main className="flex-grow">
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;