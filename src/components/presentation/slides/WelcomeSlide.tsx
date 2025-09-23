import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Coins } from 'lucide-react';

export const WelcomeSlide: React.FC = () => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="flex items-center justify-center mb-4 sm:mb-6"> {/* Adjusted margin for mobile */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center animate-pulse"> {/* Responsive size */}
            <span className="text-white font-bold text-xl sm:text-2xl">⚡</span> {/* Responsive text size */}
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-indigo-400"> {/* Responsive text size */}
          Welcome to ROPDY
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4"> {/* Responsive text size */}
          Decentralized Smart Contract Earnings Platform
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto"> {/* Responsive text size */}
          Powered by Ramestta blockchain with multiple earning modules and lifetime income opportunities
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto" {/* Responsive gap */}
      >
        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-green-900/20 to-black/50"> {/* Responsive padding */}
          <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-green-400 mx-auto mb-2 sm:mb-4" /> {/* Responsive icon size */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">100% Decentralized</h3> {/* Responsive text size */}
          <p className="text-sm sm:text-base text-green-200">Smart contract powered with no admin control</p> {/* Responsive text size */}
        </div>
        
        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-emerald-900/20 to-black/50"> {/* Responsive padding */}
          <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-400 mx-auto mb-2 sm:mb-4" /> {/* Responsive icon size */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Transparent & Secure</h3> {/* Responsive text size */}
          <p className="text-sm sm:text-base text-emerald-200">All transactions visible on Ramestta blockchain</p> {/* Responsive text size */}
        </div>
        
        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-blue-900/20 to-black/50"> {/* Responsive padding */}
          <Coins className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2 sm:mb-4" /> {/* Responsive icon size */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Earn RAMA Coins</h3> {/* Responsive text size */}
          <p className="text-sm sm:text-base text-blue-200">Multiple earning streams with lifetime income</p> {/* Responsive text size */}
        </div>
      </motion.div>
    </div>
  );
};