import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Layers, Settings, AlertTriangle } from 'lucide-react';

export const RopdyMintAutoTopUpSlide: React.FC = () => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
          ROPDY Mint: Auto Top-Up System
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
          Never miss earnings due to cap limits. Maintain active income streams automatically.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12"
      >
        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-orange-900/20 to-black/50 border border-orange-700/30">
          <RefreshCw className="w-8 h-8 sm:w-12 sm:h-12 text-orange-400 mb-2 sm:mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Reset Mode</h3>
          <p className="text-sm sm:text-base text-orange-200 mb-3 sm:mb-4">
            Automatically reset an existing slot when your remaining cap drops below your defined threshold (10%-100%).
          </p>
          <ul className="text-orange-200 text-xs sm:text-sm space-y-1 text-left pl-4">
            <li>• Forfeits remaining cap from old slot</li>
            <li>• Starts fresh with new stake amount</li>
            <li>• Pays commissions on new volume</li>
          </ul>
        </div>

        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-purple-900/20 to-black/50 border border-purple-700/30">
          <Layers className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mb-2 sm:mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Extra Slot Mode</h3>
          <p className="text-sm sm:text-base text-purple-200 mb-3 sm:mb-4">
            Automatically open a new slot on the same server while keeping your existing slot running.
          </p>
          <ul className="text-purple-200 text-xs sm:text-sm space-y-1 text-left pl-4">
            <li>• Keeps old slot active and earning</li>
            <li>• Adds additional earning capacity</li>
            <li>• Minimum $1 for extra slots</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-indigo-900/20 to-black/50 border border-indigo-700/30"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Configuration Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div>
            <h4 className="text-indigo-400 font-semibold mb-1 sm:mb-2">Threshold</h4>
            <p className="text-xs sm:text-sm text-indigo-200">Set trigger point: 10%-100% remaining cap</p>
          </div>
          <div>
            <h4 className="text-purple-400 font-semibold mb-1 sm:mb-2">Mode</h4>
            <p className="text-xs sm:text-sm text-purple-200">Choose reset existing or add new slot</p>
          </div>
          <div>
            <h4 className="text-teal-400 font-semibold mb-1 sm:mb-2">Amount</h4>
            <p className="text-xs sm:text-sm text-teal-200">USD amount for the auto top-up</p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-semibold mb-1 sm:mb-2">Horizon</h4>
            <p className="text-xs sm:text-sm text-cyan-200">Select 2× or 3× horizon for new stake</p>
          </div>
        </div>
        <div className="mt-4 p-2 sm:p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30 text-left">
          <p className="text-xs sm:text-sm text-yellow-300">
            <Settings className="w-4 h-4 inline mr-2" />
            <strong>Third-Party Execution:</strong> Anyone can trigger your auto top-up once conditions are met, making it truly automated and decentralized.
          </p>
        </div>
      </motion.div>
    </div>
  );
};