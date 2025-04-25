import React from 'react';
import { motion } from 'framer-motion';
import { Camera, BookOpen, Laptop, Users, Sparkles, Speaker as SpeakerWave } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Camera size={24} />,
      title: "Real-time Recognition",
      description: "Advanced computer vision identifies sign language gestures as they happen"
    },
    {
      icon: <SpeakerWave size={24} />,
      title: "Natural Speech Output",
      description: "Converts sign language into clear, natural-sounding spoken sentences"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Multiple Sign Languages",
      description: "Supports American, British, and International sign language variants"
    },
    {
      icon: <Laptop size={24} />,
      title: "Cross-platform",
      description: "Works on desktop, mobile, and tablet devices with a camera"
    },
    {
      icon: <Users size={24} />,
      title: "No Training Required",
      description: "Ready to use immediately without teaching it your specific gestures"
    },
    {
      icon: <Sparkles size={24} />,
      title: "AI-Powered Accuracy",
      description: "Continuously improving translation quality through machine learning"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-300">
            Our technology breaks down communication barriers with these innovative capabilities
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="glass-card p-8 h-full"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 30px -10px rgba(0,215,200,0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full p-4 inline-block mb-6">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;