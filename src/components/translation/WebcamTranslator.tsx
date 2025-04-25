import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Play, X, Volume2, Mic, Loader } from 'lucide-react';

const WebcamTranslator: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentTranslation, setCurrentTranslation] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sample translations to show as if real-time translation is happening
  const sampleTranslations = [
    "Hello, nice to meet you.",
    "My name is Sarah. What's your name?",
    "I'm learning sign language to communicate better.",
    "The weather is beautiful today.",
    "Would you like to get coffee sometime?",
    "Thank you for your help."
  ];

  useEffect(() => {
    // Request webcam permission on component mount
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => setHasPermission(true))
      .catch(() => setHasPermission(false));

    // Clean up any timeouts on unmount
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  // Simulate getting translation results when active
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * sampleTranslations.length);
        simulateTypingEffect(sampleTranslations[randomIndex]);
      }, 6000); // Change translation every 6 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  // Simulate typing effect for natural text appearance
  const simulateTypingEffect = (text: string) => {
    setIsTyping(true);
    let currentIndex = 0;
    setCurrentTranslation('');

    const typeChar = () => {
      if (currentIndex < text.length) {
        setCurrentTranslation(prev => prev + text[currentIndex]);
        currentIndex++;
        typingTimeoutRef.current = setTimeout(typeChar, 50); // Adjust speed as needed
      } else {
        setIsTyping(false);
      }
    };

    typeChar();
  };

  const toggleTranslation = () => {
    setIsActive(!isActive);
    if (!isActive) {
      // Start with an initial translation after a short delay
      setTimeout(() => {
        simulateTypingEffect("Hello! I'm ready to translate sign language.");
      }, 1500);
    }
  };

  if (hasPermission === null) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader className="animate-spin text-secondary-400" size={40} />
        <p className="ml-4 text-xl">Initializing camera...</p>
      </div>
    );
  }

  if (hasPermission === false) {
    return (
      <div className="text-center p-8 glass-card mx-auto max-w-xl">
        <X className="mx-auto text-accent-500 mb-4" size={48} />
        <h3 className="text-2xl font-bold mb-4">Camera Access Required</h3>
        <p className="mb-6 text-gray-300">
          To use the sign language translator, we need access to your camera. 
          Please enable camera access in your browser settings and refresh the page.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Webcam Feed */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`webcam-container ${isActive ? 'animate-glow' : ''}`}>
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              width: 640,
              height: 480,
              facingMode: "user"
            }}
            className="w-full rounded-xl"
          />
          
          {/* Overlay elements */}
          <div className="absolute inset-0 rounded-xl border border-secondary-400 pointer-events-none" />
          
          {isActive && (
            <motion.div 
              className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-3 py-1 rounded-full flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2 animate-pulse" />
              <span className="text-sm">Recording</span>
            </motion.div>
          )}
          
          <motion.button
            className="absolute bottom-4 right-4 p-3 rounded-full bg-primary-500 hover:bg-primary-600 transition-colors"
            onClick={toggleTranslation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isActive ? <X size={20} /> : <Play size={20} />}
          </motion.button>
        </div>
        
        <motion.div 
          className="flex justify-between mt-4 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center text-gray-400">
            <Camera size={18} className="mr-2" />
            <span className="text-sm">Face the camera and sign clearly</span>
          </div>
          
          <div className="flex space-x-2">
            <button className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full">
              <Mic size={18} />
            </button>
            <button className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full">
              <Volume2 size={18} />
            </button>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Translation Output */}
      <motion.div 
        className="glass-card p-8 min-h-[300px] flex flex-col"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-6">Translation Output</h3>
        
        <div className="flex-grow flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isActive ? (
              <motion.div 
                key="inactive"
                className="text-center text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="mb-4">Click the play button to start translation</p>
                <Play size={32} className="mx-auto opacity-50" />
              </motion.div>
            ) : (
              <motion.div 
                key="active"
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="bg-primary-900 bg-opacity-30 p-6 rounded-xl relative mb-4">
                  {/* Speech bubble tail */}
                  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-primary-900 border-opacity-30 border-b-8 border-b-transparent" />
                  
                  <p className={`text-xl ${isTyping ? 'typing-cursor' : ''}`}>
                    {currentTranslation || "Waiting for signs..."}
                  </p>
                </div>
                
                <div className="flex items-center text-sm text-gray-400">
                  <div className={`w-2 h-2 rounded-full ${isTyping ? 'bg-secondary-400 animate-pulse' : 'bg-gray-600'} mr-2`} />
                  {isTyping ? "Translating..." : "Ready"}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default WebcamTranslator;