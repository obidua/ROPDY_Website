```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Layers } from 'lucide-react';

export const RopdyMintTiersROISlide: React.FC = () => {
  const mintTiers = [
    { tier: 1, minStake: 5, horizon2x: 990, roi2x: 0.20, horizon3x: 1350, roi3x: 0.22 },
    { tier: 2, minStake: 10, horizon2x: 900, roi2x: 0.22, horizon3x: 1260, roi3x: 0.24 },
    { tier: 3, minStake: 20, horizon2x: 810, roi2x: 0.25, horizon3x: 1170, roi3x: 0.26 },
    { tier: 4, minStake: 40, horizon2x: 720, roi2x: 0.28, horizon3x: 1080, roi3x: 0.28 },
    { tier: 5, minStake: 80, horizon2x: 600, roi2x: 0.33, horizon3x: 930, roi3x: 0.32 },
  ];

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
          ROPDY Mint: Tiers & Daily ROI
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
          Choose your staking tier and horizon to optimize your daily returns.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-indigo-900/20 to-black/50 overflow-x-auto mb-8 sm:mb-12"
      >
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Minting Tiers & Horizons</h2>
        <table className="min-w-full text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-indigo-700/30">
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-indigo-400 font-medium">Server (Tier)</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-right text-indigo-400 font-medium">Min Stake (USD)</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-right text-indigo-400 font-medium">2× Horizon (days)</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-right text-indigo-400 font-medium">2× Daily ROI</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-right text-indigo-400 font-medium">3× Horizon (days)</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-right text-indigo-400 font-medium">3× Daily ROI</th>
            </tr>
          </thead>
          <tbody>
            {mintTiers.map((tier, index) => (
              <tr key={index} className="border-b border-indigo-800/20">
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-white font-medium">{tier.tier}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-white">${tier.minStake.toFixed(2)}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-teal-200">{tier.horizon2x}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-teal-400 font-medium">{tier.roi2x}%</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-cyan-200">{tier.horizon3x}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-cyan-400 font-medium">{tier.roi3x}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 p-2 sm:p-3 bg-indigo-900/20 rounded-lg border border-indigo-700/30 text-left">
          <p className="text-xs sm:text-sm text-indigo-300">
            <DollarSign className="w-4 h-4 inline mr-2 text-green-400" />
            <strong>Extra Portfolios:</strong> After opening a server for the first time, you can add extra slots on the same server with just $1 minimum stake.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
      >
        <div className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30">
          <Clock className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2 sm:mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Choose Your Horizon</h3>
          <p className="text-sm sm:text-base text-purple-200 max-w-md mx-auto">
            Select between a 2× or 3× horizon. Longer horizons (3×) typically offer higher daily ROI rates, allowing you to maximize your earnings over time.
          </p>
        </div>
        <div className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-teal-900/30 to-cyan-900/30">
          <Layers className="w-8 h-8 sm:w-12 sm:h-12 text-teal-400 mx-auto mb-2 sm:mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Flexible Staking</h3>
          <p className="text-sm sm:text-base text-teal-200 max-w-md mx-auto">
            Start with a minimum stake for your chosen tier, and easily add extra portfolios with as little as $1 USD to scale your income.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
```