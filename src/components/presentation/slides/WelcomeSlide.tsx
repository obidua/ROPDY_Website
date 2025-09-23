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
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-2xl">⚡</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-indigo-400">
          Welcome to ROPDY
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Decentralized Smart Contract Earnings Platform
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
          Powered by Ramestta blockchain with multiple earning modules and lifetime income opportunities
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        <div className="cyber-card p-6 bg-gradient-to-br from-green-900/20 to-black/50">
          <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">100% Decentralized</h3>
          <p className="text-green-200">Smart contract powered with no admin control</p>
        </div>
        
        <div className="cyber-card p-6 bg-gradient-to-br from-emerald-900/20 to-black/50">
          <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Transparent & Secure</h3>
          <p className="text-emerald-200">All transactions visible on Ramestta blockchain</p>
        </div>
        
        <div className="cyber-card p-6 bg-gradient-to-br from-blue-900/20 to-black/50">
          <Coins className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Earn RAMA Coins</h3>
          <p className="text-blue-200">Multiple earning streams with lifetime income</p>
        </div>
      </motion.div>
    </div>
  );
};