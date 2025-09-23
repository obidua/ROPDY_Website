import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Users, Zap, Target, Coins, ArrowRight, AlertTriangle, Crown, Diamond, Rocket, Star, Award } from 'lucide-react'; // Added more icons

export const RopdyCircleIntroSlide: React.FC = () => { // Renamed to Intro slide
  const packages = [
    { name: 'Starter', price: 20, perPayment: 10, total: 60, icon: Star },
    { name: 'Silver', price: 40, perPayment: 20, total: 120 },
    { name: 'Gold', price: 80, perPayment: 40, total: 240 },
    { name: 'Platinum', price: 160, perPayment: 80, total: 480 },
    { name: 'Diamond', price: 320, perPayment: 160, total: 960 }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Activate Package",
      description: "Choose a package using RAMA Coin from your Web3 wallet",
      icon: Coins,
      color: "text-green-400"
    },
    {
      step: 2,
      title: "Circle Opens",
      description: "Each package opens a circle that collects 6 payments",
      icon: Target,
      color: "text-blue-400"
    },
    {
      step: 3,
      title: "Earn Instantly",
      description: "Payments #1-#4 pay instantly to your wallet",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      step: 4,
      title: "Auto Reactivation",
      description: "Payments #5-#6 are held for auto reactivation",
      icon: RefreshCw,
      color: "text-purple-400"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Activate Package",
      description: "Choose a package using RAMA Coin from your Web3 wallet",
      icon: Coins,
      color: "text-green-400"
    },
    {
      step: 2,
      title: "Circle Opens",
      description: "Each package opens a circle that collects 6 payments",
      icon: Target,
      color: "text-blue-400"
    },
    {
      step: 3,
      title: "Earn Instantly",
      description: "Payments #1-#4 pay instantly to your wallet",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      step: 4,
      title: "Auto Reactivation",
      description: "Payments #5-#6 are held for auto reactivation",
      icon: RefreshCw,
      color: "text-purple-400"
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
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400"> {/* Responsive text size */}
          ROPDY Circle
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto"> {/* Responsive text size */}
          <strong className="text-white">Ramestta On-Chain Passive Dynamic Yield</strong> — 
          100% smart-contract powered, fully decentralized earning system
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-8 sm:mb-12 cyber-card p-4 sm:p-8 bg-gradient-to-br from-green-900/30 to-emerald-900/30" {/* Responsive padding and margin */}
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">How ROPDY Circle Works</h2> {/* Responsive text size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"> {/* Responsive gap */}
          {howItWorks.map((item, index) => (
            <div key={index} className="cyber-card p-3 sm:p-6 bg-gradient-to-br from-black/30 to-gray-900/30"> {/* Responsive padding */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center mx-auto mb-2 sm:mb-4"> {/* Responsive size */}
                <span className="text-white font-bold text-base sm:text-lg">{item.step}</span> {/* Responsive text size */}
              </div>
              <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${item.color} mx-auto mb-1 sm:mb-3`} /> {/* Responsive icon size */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{item.title}</h3> {/* Responsive text size */}
              <p className="text-xs sm:text-sm text-gray-300">{item.description}</p> {/* Responsive text size */}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-8 sm:mb-12 cyber-card p-4 sm:p-8 bg-gradient-to-br from-green-900/30 to-emerald-900/30" {/* Responsive padding and margin */}
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">How ROPDY Circle Works</h2> {/* Responsive text size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"> {/* Responsive gap */}
          {howItWorks.map((item, index) => (
            <div key={index} className="cyber-card p-3 sm:p-6 bg-gradient-to-br from-black/30 to-gray-900/30"> {/* Responsive padding */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center mx-auto mb-2 sm:mb-4"> {/* Responsive size */}
                <span className="text-white font-bold text-base sm:text-lg">{item.step}</span> {/* Responsive text size */}
              </div>
              <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${item.color} mx-auto mb-1 sm:mb-3`} /> {/* Responsive icon size */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{item.title}</h3> {/* Responsive text size */}
              <p className="text-xs sm:text-sm text-gray-300">{item.description}</p> {/* Responsive text size */}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-8 sm:mb-12" {/* Responsive margin */}
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">Package Options</h2> {/* Responsive text size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6"> {/* Responsive grid and gap */}
          {packages.map((pkg, index) => ( {/* Responsive layout for packages */}
            <div key={index} className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-green-900/20 to-black/50 hover:scale-105 transition-all duration-300"> {/* Responsive padding */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">{pkg.name}</h3> {/* Responsive text size */}
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-green-400">Price</p>
                  <p className="text-2xl font-bold text-green-300">${pkg.price}</p>
                </div>
                <div>
                  <p className="text-sm text-green-400">Per Payment</p>
                  <p className="text-lg font-semibold text-white">${pkg.perPayment}</p>
                </div>
                <div>
                  <p className="text-sm text-green-400">Total Earnings</p>
                  <p className="text-lg font-semibold text-emerald-400">${pkg.total}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8" {/* Responsive gap and margin */}
      >
        <div className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-blue-900/30 to-cyan-900/30"> {/* Responsive padding */}
          <Users className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2 sm:mb-4" /> {/* Responsive icon size */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">CP1 — Sponsor Bonus</h3> {/* Responsive text size */}
          <p className="text-sm sm:text-base text-blue-200">50% goes directly to your sponsor/upline for instant referral rewards</p> {/* Responsive text size */}
        </div>
        
        <div className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30"> {/* Responsive padding */}
          <Target className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2 sm:mb-4" /> {/* Responsive icon size */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">CP2 — Global Bonus</h3> {/* Responsive text size */}
          <p className="text-sm sm:text-base text-purple-200">50% distributed by MOD algorithm across the network</p> {/* Responsive text size */}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-emerald-900/30 to-green-900/30" {/* Responsive padding */}
      >
        <div className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-blue-900/30 to-cyan-900/30"> {/* Responsive padding */}
          <Users className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2 sm:mb-4" /> {/* Responsive icon size */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">CP1 — Sponsor Bonus</h3> {/* Responsive text size */}
          <p className="text-sm sm:text-base text-blue-200">50% goes directly to your sponsor/upline for instant referral rewards</p> {/* Responsive text size */}
        </div>
        
        <div className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30"> {/* Responsive padding */}
          <Target className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2 sm:mb-4" /> {/* Responsive icon size */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">CP2 — Global Bonus</h3> {/* Responsive text size */}
          <p className="text-sm sm:text-base text-purple-200">50% distributed by MOD algorithm across the network</p> {/* Responsive text size */}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-emerald-900/30 to-green-900/30" {/* Responsive padding */}
      >
        <RefreshCw className="w-10 h-10 sm:w-16 sm:h-16 text-emerald-400 mx-auto mb-2 sm:mb-4" /> {/* Responsive icon size */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Infinite Earning Cycles</h3> {/* Responsive text size */}
        <p className="text-base sm:text-lg text-emerald-200 max-w-3xl mx-auto"> {/* Responsive text size */}
          The circle reopens automatically after completion, creating an endless earning loop. 
          No withdrawal button needed — earnings credit directly to your wallet!
        </p>
      </motion.div>
    </div>
  );
};