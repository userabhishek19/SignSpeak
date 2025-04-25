import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "NLP expert with a passion for accessibility technology. Former research lead at MIT's AI lab.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      bio: "Computer vision specialist with 15+ years experience building AI systems for accessibility.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Linguistics",
      bio: "Professional sign language interpreter and computational linguist specializing in ASL.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "David Kim",
      role: "Lead Engineer",
      bio: "Full-stack developer with experience building real-time translation systems and neural networks.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Maya Patel",
      role: "UX Director",
      bio: "Designer specializing in accessible interfaces with a background in cognitive psychology.",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Thomas Weber",
      role: "AI Research Scientist",
      bio: "PhD in Machine Learning with focus on gesture recognition and temporal modeling.",
      image: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const advisors = [
    {
      name: "Professor James Lee",
      role: "Academic Advisor",
      bio: "Director of the Center for Accessible Technology at Stanford University.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Lisa Thompson",
      role: "Accessibility Advocate",
      bio: "Deaf community leader and advisor to multiple technology accessibility initiatives.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-gray-300">
            Meet the experts and visionaries behind SignSpeak's revolutionary technology
          </p>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="glass-card overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 10px 30px -10px rgba(0,215,200,0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="h-64 w-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-secondary-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    <motion.a 
                      href="#" 
                      className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Linkedin size={16} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Twitter size={16} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Globe size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advisors */}
        <motion.div
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Advisors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div 
                key={index}
                className="glass-card overflow-hidden flex flex-col md:flex-row"
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 30px -10px rgba(0,215,200,0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-semibold mb-1">{advisor.name}</h3>
                  <p className="text-secondary-400 mb-4">{advisor.role}</p>
                  <p className="text-gray-300 mb-6">{advisor.bio}</p>
                  
                  <div className="flex space-x-3">
                    <motion.a 
                      href="#" 
                      className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Linkedin size={16} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Globe size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Us Section */}
        <motion.div 
          className="glass-card p-8 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about using technology to make a difference in people's lives.
          </p>
          <motion.button 
            className="btn-primary text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;