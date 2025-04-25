import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users />, value: "5M+", label: "Users Worldwide" },
    { icon: <BookOpen />, value: "8", label: "Sign Languages" },
    { icon: <Clock />, value: "0.2s", label: "Translation Speed" },
    { icon: <Award />, value: "99%", label: "Accuracy Rate" }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About SignSync</h1>
          <p className="text-xl text-gray-300">
            We're on a mission to break down communication barriers between deaf and hearing communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              SignSpeak was founded with a simple yet powerful mission: to make communication accessible to everyone, 
              regardless of hearing ability. We believe technology should bring people together and break down barriers, 
              not create new ones.
            </p>
            <p className="text-gray-300 mb-6">
              Our team of engineers, linguists, and accessibility experts work tirelessly to improve our sign language 
              translation technology, making it more accurate, faster, and easier to use every day.
            </p>
            <p className="text-gray-300">
              We envision a world where the 70 million deaf people globally can communicate effortlessly with the 
              hearing population, and we're building the technology to make that possible.
            </p>
          </motion.div>
          
          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img 
              src="https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="text-secondary-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Timeline Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-500 bg-opacity-30"></div>
            
            {/* Timeline items */}
            <div className="space-y-24 relative">
              {[
                { year: "2025", title: "The Beginning", description: "SignSpeak was founded with the vision of making communication accessible to everyone." },
                { year: "2025", title: "First Prototype", description: "Launched our first prototype translating American Sign Language with 75% accuracy." },
                { year: "2025", title: "Global Expansion", description: "Added support for 6 more sign languages and improved accuracy to over 90%." },
                { year: "2025", title: "AI Revolution", description: "Implemented advanced AI models, raising translation accuracy to 99% and reducing latency." },
                { year: "2025", title: "The Future", description: "Working on embedded solutions for homes, workplaces, and public spaces." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                  
                  <div className="z-10 rounded-full bg-primary-500 w-12 h-12 flex items-center justify-center font-bold text-white relative glow-border">
                    {item.year}
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;