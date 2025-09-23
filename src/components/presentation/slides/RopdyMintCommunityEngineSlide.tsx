```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Users, Network } from 'lucide-react';

export const RopdyMintCommunityEngineSlide: React.FC = () => {
  const circleLevels = [
    { level: 'L1', spotCommission: 5, dailyGrowth: 10 },
    { level: 'L2', spotCommission: 0.5, dailyGrowth: 5 },
    { level: 'L3', spotCommission: 0.5, dailyGrowth: 3 },
    { level: 'L4', spotCommission: 0.5, dailyGrowth: 2 },
    { level: 'L5', spotCommission: 0.5, dailyGrowth: 2 },
    { level: 'L6', spotCommission: 0.5, dailyGrowth: 2 },
    { level: 'L7', spotCommission: 0.5, dailyGrowth: 2 },
    { level: 'L8', spotCommission: 0.5, dailyGrowth: 2 },
    { level: 'L9', spotCommission: 0.5, dailyGrowth: 2 },
    { level: 'L10', spotCommission: 1, dailyGrowth: 5 },
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
          ROPDY Mint: Community Engine
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
          Earn beyond personal staking with the 10-level Circle Program.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12"
      >
        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-emerald-900/20 to-black/50 border border-emerald-700/30">
          <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-400 mx-auto mb-2 sm:mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Spot Commission (Instant)</h3>
          <p className="text-sm sm:text-base text-emerald-200 max-w-md mx-auto">
            Receive a percentage from each new stake across your network instantly. This rewards your direct efforts in growing the ROPDY Mint community.
          </p>
        </div>

        <div className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-purple-900/20 to-black/50 border border-purple-700/30">
          <TrendingUp className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2 sm:mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Daily Growth (Ongoing)</h3>
          <p className="text-sm sm:text-base text-purple-200 max-w-md mx-auto">
            Earn a percentage share of your team's daily ROI. This is a continuous income stream that accrues as long as your team members have active stakes.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-indigo-900/20 to-black/50 border border-indigo-700/30 overflow-x-auto"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">10-Level Circle Program Breakdown</h2>
        <table className="min-w-full text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-indigo-700/30">
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-indigo-400 font-medium">Level</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-right text-indigo-400 font-medium">Spot Commission</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-right text-indigo-400 font-medium">Daily Growth</th>
            </tr>
          </thead>
          <tbody>
            {circleLevels.map((level, index) => (
              <tr key={index} className="border-b border-indigo-800/20">
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-white font-medium">{level.level}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-emerald-400">{level.spotCommission}%</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-purple-400">{level.dailyGrowth}%</td>
              </tr>
            ))}
            <tr className="border-t-2 border-indigo-600/50 bg-indigo-900/20">
              <td className="px-2 sm:px-4 py-2 sm:py-3 text-white font-bold">Total</td>
              <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-emerald-400 font-bold">10%</td>
              <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-purple-400 font-bold">35%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs sm:text-sm text-indigo-300 mt-4 text-left">
          Spot Commission is instant; Daily Growth accrues with active team stakes.
        </p>
      </motion.div>
    </div>
  );
};
```