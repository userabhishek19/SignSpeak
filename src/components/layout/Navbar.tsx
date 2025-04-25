import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Accessibility, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
    scrolled
      ? 'bg-background-dark bg-opacity-80 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
  }`;

  const navVariants = {
    open: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.4 }
    }
  };

  const links = [
    { to: '/', label: 'Home' },
    { to: '/live-translation', label: 'Live Translation' },
    { to: '/about', label: 'About' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NavLink 
              to="/" 
              className="text-3xl font-bold flex items-center"
            >
              <Accessibility className="mr-2 text-secondary-400" size={28} />
              <span className="text-white">Sign<span className="text-secondary-400">Sync</span></span>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {links.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => 
                  `nav-link hover:text-secondary-400 ${isActive ? 'text-secondary-400' : 'text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
      >
        <div className="bg-background-dark bg-opacity-95 backdrop-blur-lg flex flex-col items-center justify-center h-full">
          {links.map((link) => (
            <motion.div key={link.to} variants={itemVariants}>
              <NavLink
                to={link.to}
                className={({ isActive }) => 
                  `nav-link text-2xl py-4 block ${isActive ? 'text-secondary-400' : 'text-white'}`
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
          <motion.div variants={itemVariants} className="mt-6">
            <button className="btn-primary text-xl">
              Get Started
            </button>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;