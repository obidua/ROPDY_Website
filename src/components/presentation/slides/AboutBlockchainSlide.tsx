import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Network, Zap, Lock, Globe, Users } from 'lucide-react';

export const AboutBlockchainSlide: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Immutable Security",
      description: "Once data is recorded, it cannot be altered or deleted",
      color: "text-green-400"
    },
    {
      icon: Network,
      title: "Decentralized Network",
      description: "No single point of failure or control",
      color: "text-blue-400"
    },
    {
      icon: Lock,
      title: "Cryptographic Protection",
      description: "Advanced encryption secures all transactions",
      color: "text-purple-400"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Available 24/7 worldwide without borders",
      color: "text-cyan-400"
    },
    {
      icon: Zap,
      title: "Smart Contracts",
      description: "Self-executing contracts with automated rules",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "Trustless System",
      description: "No need to trust intermediaries or third parties",
      color: "text-emerald-400"
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
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"> {/* Responsive text size */}
          Understanding Blockchain
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto"> {/* Responsive text size */}
          A revolutionary technology that creates a distributed ledger of transactions across a network of computers
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-8 sm:mb-12 cyber-card p-4 sm:p-8 bg-gradient-to-br from-indigo-900/30 to-purple-900/30" {/* Responsive padding and margin */}
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">How Blockchain Works</h2> {/* Responsive text size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"> {/* Responsive gap */}
          <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-blue-900/20 to-black/50"> {/* Responsive padding */}
            <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">📦</div> {/* Responsive icon size */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">1. Transaction Block</h3> {/* Responsive text size */}
            <p className="text-sm sm:text-base text-gray-300">Each transaction is grouped into a block with other transactions</p> {/* Responsive text size */}
          </div>
          
          <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-purple-900/20 to-black/50"> {/* Responsive padding */}
            <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">⛓️</div> {/* Responsive icon size */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">2. Chain Formation</h3> {/* Responsive text size */}
            <p className="text-sm sm:text-base text-gray-300">Blocks are linked together using cryptographic hashes</p> {/* Responsive text size */}
          </div>
          
          <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-green-900/20 to-black/50"> {/* Responsive padding */}
            <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">✅</div> {/* Responsive icon size */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">3. Network Validation</h3> {/* Responsive text size */}
            <p className="text-sm sm:text-base text-gray-300">Network participants validate and confirm transactions</p> {/* Responsive text size */}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-gray-900/20 to-black/50 hover:from-gray-800/30 hover:to-black/60 transition-all duration-300" {/* Responsive padding */}
          >
            <feature.icon className={`w-8 h-8 sm:w-12 sm:h-12 ${feature.color} mx-auto mb-2 sm:mb-4`} /> {/* Responsive icon size */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-3">{feature.title}</h3> {/* Responsive text size */}
            <p className="text-sm sm:text-base text-gray-300">{feature.description}</p> {/* Responsive text size */}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-8 sm:mt-12 cyber-card p-4 sm:p-8 bg-gradient-to-br from-green-900/30 to-emerald-900/30" {/* Responsive padding and margin */}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Why Blockchain Matters</h3> {/* Responsive text size */}
        <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto"> {/* Responsive text size */}
          Blockchain eliminates the need for trusted intermediaries, reduces costs, increases transparency, 
          and enables new forms of digital value exchange that were previously impossible.
        </p>
      </motion.div>
    </div>
  );
};