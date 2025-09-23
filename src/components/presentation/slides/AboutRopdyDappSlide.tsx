import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Shield, Zap, Users, Coins, Target, Globe, Lock } from 'lucide-react';

export const AboutRopdyDappSlide: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Decentralized",
      description: "No admin control - rules enforced by smart contract",
      color: "text-green-400"
    },
    {
      icon: Wallet,
      title: "Wallet-to-Wallet",
      description: "Direct payouts in RAMA Coin to your wallet",
      color: "text-blue-400"
    },
    {
      icon: Zap,
      title: "Instant Transactions",
      description: "Fast, low-fee transactions on Ramestta blockchain",
      color: "text-yellow-400"
    },
    {
      icon: Target,
      title: "Transparent Tracking",
      description: "All transactions visible on Ramascan explorer",
      color: "text-purple-400"
    }
  ];

  const programs = [
    {
      name: "ROPDY Circle",
      description: "Circle-based earning system with 6-payment cycles",
      icon: "🔄",
      color: "from-green-900/30 to-emerald-900/30"
    },
    {
      name: "ROPDY Mint",
      description: "Stake RAMA, earn daily USD-pegged rewards",
      icon: "⚡",
      color: "from-blue-900/30 to-indigo-900/30"
    }
  ];

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 sm:mb-12" {/* Responsive margin */}
      >
        <div className="flex items-center justify-center mb-4 sm:mb-6"> {/* Responsive margin */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center"> {/* Responsive size */}
            <span className="text-white font-bold text-xl sm:text-2xl">⚡</span> {/* Responsive text size */}
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400"> {/* Responsive text size */}
          ROPDY DApp
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto"> {/* Responsive text size */}
          Your gateway to decentralized earning opportunities on the Ramestta blockchain
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-8 sm:mb-12 cyber-card p-4 sm:p-8 bg-gradient-to-br from-green-900/30 to-black/50" {/* Responsive padding and margin */}
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">What is ROPDY?</h2> {/* Responsive text size */}
        <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-4 sm:mb-6"> {/* Responsive text size */}
          <strong className="text-white">ROP-DY</strong> (Ramestta On-chain Passive Dynamic Yield) is a fully 
          decentralized income engine that runs without human interference. It operates 24/7 on the Ramestta 
          blockchain, rewarding participants in RAMA tokens.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"> {/* Responsive gap */}
          <div className="cyber-card p-3 sm:p-4 bg-gradient-to-br from-emerald-900/20 to-black/50"> {/* Responsive padding */}
            <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mx-auto mb-2 sm:mb-3" /> {/* Responsive icon size */}
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Global Access</h3> {/* Responsive text size */}
            <p className="text-xs sm:text-sm text-gray-300">Anyone, anywhere can join with a Web3 wallet</p> {/* Responsive text size */}
          </div>
          <div className="cyber-card p-3 sm:p-4 bg-gradient-to-br from-blue-900/20 to-black/50"> {/* Responsive padding */}
            <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2 sm:mb-3" /> {/* Responsive icon size */}
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">No KYC Required</h3> {/* Responsive text size */}
            <p className="text-xs sm:text-sm text-gray-300">Complete privacy and anonymity</p> {/* Responsive text size */}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-gray-900/20 to-black/50 hover:scale-105 transition-all duration-300" {/* Responsive padding */}
          >
            <feature.icon className={`w-8 h-8 sm:w-12 sm:h-12 ${feature.color} mx-auto mb-2 sm:mb-4`} /> {/* Responsive icon size */}
            <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-3">{feature.title}</h3> {/* Responsive text size */}
            <p className="text-xs sm:text-sm text-gray-300">{feature.description}</p> {/* Responsive text size */}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-4 sm:mb-8" {/* Responsive margin */}
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">Two Powerful Programs</h2> {/* Responsive text size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"> {/* Responsive gap */}
          {programs.map((program, index) => (
            <div
              key={index}
              className={`cyber-card p-4 sm:p-8 bg-gradient-to-br ${program.color} hover:scale-105 transition-all duration-300`} {/* Responsive padding */}
            >
              <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">{program.icon}</div> {/* Responsive icon size */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">{program.name}</h3> {/* Responsive text size */}
              <p className="text-sm sm:text-base text-gray-300">{program.description}</p> {/* Responsive text size */}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30" {/* Responsive padding */}
      >
        <Users className="w-10 h-10 sm:w-16 sm:h-16 text-purple-400 mx-auto mb-2 sm:mb-4" /> {/* Responsive icon size */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Join the Revolution</h3> {/* Responsive text size */}
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"> {/* Responsive text size */}
          Experience the future of decentralized finance with ROPDY. No middlemen, no hidden fees, 
          just transparent, automated earning opportunities powered by smart contracts.
        </p>
      </motion.div>
    </div>
  );
};