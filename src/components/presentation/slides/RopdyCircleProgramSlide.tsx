import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Users, Zap, Target, Coins, ArrowRight } from 'lucide-react';

export const RopdyCircleProgramSlide: React.FC = () => {
  const packages = [
    { name: 'Starter', price: 20, perPayment: 10, total: 60 },
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

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
          ROPDY Circle
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          <strong className="text-white">Ramestta On-Chain Passive Dynamic Yield</strong> — 
          100% smart-contract powered, fully decentralized earning system
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-12 cyber-card p-8 bg-gradient-to-br from-green-900/30 to-emerald-900/30"
      >
        <h2 className="text-3xl font-bold text-white mb-6">How ROPDY Circle Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((item, index) => (
            <div key={index} className="cyber-card p-6 bg-gradient-to-br from-black/30 to-gray-900/30">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">{item.step}</span>
              </div>
              <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-3`} />
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Package Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className="cyber-card p-6 bg-gradient-to-br from-green-900/20 to-black/50 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">{pkg.name}</h3>
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
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
      >
        <div className="cyber-card p-8 bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
          <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">CP1 — Sponsor Bonus</h3>
          <p className="text-blue-200">50% goes directly to your sponsor/upline for instant referral rewards</p>
        </div>
        
        <div className="cyber-card p-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30">
          <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">CP2 — Global Bonus</h3>
          <p className="text-purple-200">50% distributed by MOD algorithm across the network</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="cyber-card p-8 bg-gradient-to-br from-emerald-900/30 to-green-900/30"
      >
        <RefreshCw className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">Infinite Earning Cycles</h3>
        <p className="text-lg text-emerald-200 max-w-3xl mx-auto">
          The circle reopens automatically after completion, creating an endless earning loop. 
          No withdrawal button needed — earnings credit directly to your wallet!
        </p>
      </motion.div>
    </div>
  );
};