import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, TrendingUp, Lock, Calculator, Settings, DollarSign, Clock, Layers, Users, Award, AlertTriangle, Globe, Network } from 'lucide-react'; // Added more icons

export const RopdyMintIntroSlide: React.FC = () => { // Renamed to Intro slide
  const mintTiers = [
    { tier: 1, minStake: 5, horizon2x: 990, roi2x: 0.20, horizon3x: 1350, roi3x: 0.22 },
    { tier: 2, minStake: 10, roi2x: 0.22, roi3x: 0.24 },
    { tier: 3, minStake: 20, roi2x: 0.25, roi3x: 0.26 },
    { tier: 4, minStake: 40, roi2x: 0.28, roi3x: 0.28 },
    { tier: 5, minStake: 80, roi2x: 0.33, roi3x: 0.32 }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Stake RAMA, Earn Daily",
      description: "Rewards calculated in USD terms, paid in RAMA",
      color: "text-yellow-400",
      gradient: "from-yellow-900/20 to-orange-900/20"
    },
    {
      icon: Shield,
      title: "Validator Delegation",
      description: "Yield sourced from Ramestta node delegation",
      color: "text-blue-400",
      gradient: "from-blue-900/20 to-cyan-900/20"
    },
    {
      icon: TrendingUp,
      title: "Dual Income Design",
      description: "Personal minting + 10-level network growth",
      color: "text-purple-400",
      gradient: "from-purple-900/20 to-indigo-900/20"
    },
    {
      icon: Lock,
      title: "3× Cap Protection",
      description: "Total income capped at 3× your stake",
      color: "text-green-400",
      gradient: "from-green-900/20 to-emerald-900/20"
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Stake in USD Terms",
      description: "Deposit RAMA equal to your chosen USD stake",
      icon: "💰"
    },
    {
      step: 2,
      title: "Pick a Horizon",
      description: "2× (shorter) or 3× (longer, higher ROI)",
      icon: "🎯"
    },
    {
      step: 3,
      title: "Earn to 3× Cap",
      description: "Daily USD-pegged rewards in RAMA",
      icon: "📈"
    },
    {
      step: 4,
      title: "Auto Top-Up",
      description: "Configure automatic slot management",
      icon: "⚙️"
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
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400"> {/* Responsive text size */}
          ROPDY Mint
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto"> {/* Responsive text size */}
          Stake RAMA, earn daily USD-pegged rewards with 5% system fee, and grow with a 10-level community engine
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-8 sm:mb-12 cyber-card p-4 sm:p-8 bg-gradient-to-br from-indigo-900/30 to-teal-900/30" {/* Responsive padding and margin */}
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Delegation-Backed, USD-Pegged</h2> {/* Responsive text size */}
        <p className="text-base sm:text-lg text-indigo-200 max-w-4xl mx-auto"> {/* Responsive text size */}
          ROPDY Mint delegates RAMA to Ramestta validators (targeting ~5%–8.4% monthly gross). 
          Rewards are collected daily and redistributed using a <strong className="text-white">USD-pegged calculation</strong>: 
          your daily ROI is computed as a USD value and released in RAMA at the current rate, minus a 5% system fee.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
        className={`cyber-card p-4 sm:p-6 bg-gradient-to-br ${feature.gradient} hover:scale-105 transition-all duration-300`} {/* Responsive padding */}
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
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-8 sm:mb-12" {/* Responsive margin */}
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">Mint Tiers & Daily ROI</h2> {/* Responsive text size */}
        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-indigo-900/20 to-black/50 overflow-x-auto"> {/* Responsive padding */}
          <table className="min-w-full text-xs sm:text-sm"> {/* Responsive text size */}
            <thead>
              <tr className="border-b border-indigo-700/30">
                <th className="px-4 py-3 text-left text-indigo-400 font-medium">Tier</th>
                <th className="px-4 py-3 text-right text-indigo-400 font-medium">Min Stake (USD)</th>
                <th className="px-4 py-3 text-right text-indigo-400 font-medium">2× Daily ROI</th>
                <th className="px-4 py-3 text-right text-indigo-400 font-medium">3× Daily ROI</th>
              </tr>
            </thead>
            <tbody>
              {mintTiers.map((tier, index) => (
                <tr key={index} className="border-b border-indigo-800/20">
                  <td className="px-4 py-3 text-white font-medium">{tier.tier}</td> {/* Responsive table cells */}
                  <td className="px-4 py-3 text-right text-white">${tier.minStake}</td>
                  <td className="px-4 py-3 text-right text-teal-400 font-medium">{tier.roi2x}%</td>
                  <td className="px-4 py-3 text-right text-cyan-400 font-medium">{tier.roi3x}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-8 sm:mb-12" {/* Responsive margin */}
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">How It Works</h2> {/* Responsive text size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"> {/* Responsive gap */}
          {steps.map((step, index) => (
            <div key={index} className="cyber-card p-3 sm:p-6 bg-gradient-to-br from-gray-900/20 to-black/50"> {/* Responsive padding */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-indigo-600 to-teal-600 flex items-center justify-center mx-auto mb-2 sm:mb-4"> {/* Responsive size */}
                <span className="text-white font-bold text-base sm:text-lg">{step.step}</span> {/* Responsive text size */}
              </div>
              <div className="text-2xl sm:text-4xl mb-1 sm:mb-3">{step.icon}</div> {/* Responsive icon size */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{step.title}</h3> {/* Responsive text size */}
              <p className="text-xs sm:text-sm text-gray-300">{step.description}</p> {/* Responsive text size */}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8" {/* Responsive gap */}
      >
        <div className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-orange-900/30 to-red-900/30"> {/* Responsive padding */}
          <Calculator className="w-8 h-8 sm:w-12 sm:h-12 text-orange-400 mx-auto mb-2 sm:mb-4" /> {/* Responsive icon size */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">5% System Fee</h3> {/* Responsive text size */}
          <p className="text-sm sm:text-base text-orange-200">All payouts (ROI, Spot, Growth) have a 5% fee deducted</p> {/* Responsive text size */}
        </div>
        
        <div className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30"> {/* Responsive padding */}
          <Settings className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2 sm:mb-4" /> {/* Responsive icon size */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Auto Top-Up System</h3> {/* Responsive text size */}
          <p className="text-sm sm:text-base text-purple-200">Configure automatic slot resets or new slots when approaching 3× cap</p> {/* Responsive text size */}
        </div>
      </motion.div>
    </div>
  );
};