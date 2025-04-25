import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Heart, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Live Translation', href: '/live-translation' },
        { name: 'Mobile App', href: '#' },
        { name: 'API', href: '#' },
        { name: 'Enterprise', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Help Center', href: '#' }
      ]
    }
  ];
  
  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4">
        {/* Back to top button */}
        <motion.div 
          className="absolute right-8 -top-6"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button 
            onClick={scrollToTop}
            className="bg-primary-500 hover:bg-primary-600 transition-colors p-3 rounded-full shadow-lg"
            aria-label="Back to top"
          >
            <ChevronUp size={24} />
          </button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Brand and mission */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
              Sign<span className="text-secondary-400">Speak</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Breaking barriers in communication through innovative sign language translation technology. Making the world more accessible, one conversation at a time.
            </p>
            
            {/* Social media links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((column) => (
            <motion.div key={column.title} variants={itemVariants}>
              <h4 className="font-semibold text-lg mb-4 text-white">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SignSpeak. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-accent-500" /> for accessibility
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;