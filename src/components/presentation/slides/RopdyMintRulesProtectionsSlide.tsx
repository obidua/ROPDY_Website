import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, AlertTriangle, Target, Shield, Globe, RefreshCw } from 'lucide-react';

export const RopdyMintRulesProtectionsSlide: React.FC = () => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
          ROPDY Mint: Rules & Protections
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
          Transparent rules ensure fair participation and sustainable growth.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
      >
        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-yellow-900/20 to-black/50 border border-yellow-700/30">
          <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mb-2 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">5% System Fee</h3>
          <p className="text-xs sm:text-sm text-yellow-200">All payouts (ROI, Spot, Growth) have a <strong className="text-white">5% fee deducted</strong> and sent to system collector.</p>
        </div>

        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-red-900/20 to-black/50 border border-red-700/30">
          <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mb-2 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">3× Capping</h3>
          <p className="text-xs sm:text-sm text-red-200">Total received from ROI + Spot + Growth is capped at <strong className="text-white">3× of your total stake</strong>. Level rewards are <strong className="text-white">excluded</strong> from this cap.</p>
        </div>

        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-orange-900/20 to-black/50 border border-orange-700/30">
          <Target className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mb-2 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Mandatory Top-up</h3>
          <p className="text-xs sm:text-sm text-orange-200">After reaching 3×, <strong className="text-white">top-up is required</strong> to keep receiving income.</p>
        </div>

        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-green-900/20 to-black/50 border border-green-700/30">
          <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-2 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">On-chain Verification</h3>
          <p className="text-xs sm:text-sm text-green-200">Rewards, caps, and turnover logic are enforced by smart contracts.</p>
        </div>

        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-blue-900/20 to-black/50 border border-blue-700/30">
          <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-2 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">USD-Pegged Distribution</h3>
          <p className="text-xs sm:text-sm text-blue-200">Daily ROI is <strong className="text-white">computed in USD value</strong> and released in RAMA at the current rate.</p>
        </div>

        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-purple-900/20 to-black/50 border border-purple-700/30">
          <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Flexible Top-ups</h3>
          <p className="text-xs sm:text-sm text-purple-200">Reset existing slots early or add extra slots. Auto top-up prevents income interruption.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-red-900/10 to-black/50 border border-red-700/30"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center justify-center">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-2" />
          Important Disclaimers
        </h3>
        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-red-200">
          <p>• Crypto assets are volatile; <strong>returns are not guaranteed</strong>.</p>
          <p>• Program parameters can change; <strong>always review the latest official details</strong>.</p>
          <p>• All payouts include a <strong>5% system fee</strong>; factor this into your calculations.</p>
          <p>• The 3× cap applies to ROI + Spot + Growth income; <strong>level rewards are separate</strong>.</p>
          <p>• This material is <strong>informational</strong> and not investment advice.</p>
        </div>
      </motion.div>
    </div>
  );
};