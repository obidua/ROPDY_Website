import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, AlertTriangle } from 'lucide-react';

export const RopdyMintLeadershipRewardsSlide: React.FC = () => {
  const leadershipRewards = [
    { level: 1, reward: '$100', gtoShare: '2.0%', boosterPct: '10%' },
    { level: 2, reward: '$250', gtoShare: '1.8%', boosterPct: '12%' },
    { level: 3, reward: '$500', gtoShare: '1.5%', boosterPct: '14%' },
    { level: 4, reward: '$1,000', gtoShare: '1.2%', boosterPct: '16%' },
    { level: 5, reward: '$2,500', gtoShare: '1.0%', boosterPct: '18%' },
    { level: 6, reward: '$5,000', gtoShare: '0.8%', boosterPct: '20%' },
    { level: 7, reward: '$10,000', gtoShare: '0.6%', boosterPct: '22%' },
    { level: 8, reward: '$25,000', gtoShare: '0.4%', boosterPct: '24%' },
    { level: 9, reward: '$50,000', gtoShare: '0.3%', boosterPct: '26%' },
    { level: 10, reward: '$100,000', gtoShare: '0.2%', boosterPct: '28%' },
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
          ROPDY Mint: Leadership Rewards
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
          Global Turnover Sharing & 60-Day Booster Program for new members.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-700/30 mb-8 sm:mb-12"
      >
        <div className="flex items-start space-x-3 sm:space-x-4">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">🚀 60-Day Booster Program</h3>
            <p className="text-sm sm:text-base text-yellow-200 mb-3 sm:mb-4">
              <strong className="text-white">New members get enhanced rewards!</strong> If you claim any level reward within <strong className="text-yellow-400">60 days of joining</strong>, 
              you receive a significant bonus on top of the base reward amount.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <h4 className="text-yellow-400 font-semibold mb-1 sm:mb-2">Booster Formula:</h4>
                <p className="text-xs sm:text-sm text-yellow-200">Level 1: +10% bonus</p>
                <p className="text-xs sm:text-sm text-yellow-200">Level 2: +12% bonus</p>
                <p className="text-xs sm:text-sm text-yellow-200">...and so on (+2% per level)</p>
                <p className="text-xs sm:text-sm text-yellow-200">Level 10: +28% bonus</p>
              </div>
              <div>
                <h4 className="text-yellow-400 font-semibold mb-1 sm:mb-2">Example:</h4>
                <p className="text-xs sm:text-sm text-yellow-200">Level 5 base reward: $2,500</p>
                <p className="text-xs sm:text-sm text-yellow-200">With 18% booster: $2,950</p>
                <p className="text-xs sm:text-sm text-yellow-200 font-bold text-yellow-400">Extra $450 bonus!</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="cyber-card p-4 sm:p-6 bg-gradient-to-br from-indigo-900/20 to-black/50 border border-indigo-700/30 overflow-x-auto"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Leadership Rewards Overview</h2>
        <table className="min-w-full text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-indigo-700/30">
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-indigo-400 font-medium">Level</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-indigo-400 font-medium">Base Reward</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-indigo-400 font-medium">GTO Share</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-indigo-400 font-medium">Booster %</th>
            </tr>
          </thead>
          <tbody>
            {leadershipRewards.slice(0, 5).map((reward, index) => (
              <tr key={index} className="border-b border-indigo-800/20">
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-white font-medium">{reward.level}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-green-400 font-medium">{reward.reward}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-yellow-400">{reward.gtoShare}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-orange-400 font-medium">{reward.boosterPct}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-blue-900/20 rounded-lg border border-blue-700/30">
          <p className="text-xs sm:text-sm text-blue-300">
            <Clock className="w-4 h-4 inline mr-2 text-blue-400" />
            <strong>GTO Entitlement:</strong> Global Turnover percentages are informational entitlements for 2-3 years from qualification, not automatic payouts.
          </p>
        </div>
      </motion.div>
    </div>
  );
};