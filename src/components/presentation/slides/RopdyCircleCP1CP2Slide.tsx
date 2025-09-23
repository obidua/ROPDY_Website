```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Network, Coins } from 'lucide-react';

export const RopdyCircleCP1CP2Slide: React.FC = () => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
          ROPDY Circle: CP1 & CP2
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
          Every package activation fuels two powerful earning streams.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12"
      >
        <div className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
          <Users className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2 sm:mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">CP1 — Sponsor Bonus (50%)</h3>
          <p className="text-sm sm:text-base text-blue-200 max-w-md mx-auto">
            This is your direct referral income. When someone joins ROPDY Circle through your link and activates a package, 50% of that activation value is paid instantly to your wallet. No conditions, just direct rewards for your efforts.
          </p>
        </div>
        
        <div className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30">
          <Network className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2 sm:mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">CP2 — Global Bonus (50%)</h3>
          <p className="text-sm sm:text-base text-purple-200 max-w-md mx-auto">
            The remaining 50% of each package activation contributes to the global bonus pool. This is distributed through the advanced MOD algorithms (MOD1-MOD4), ensuring rewards flow across the network, even for passive participants.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="cyber-card p-4 sm:p-8 bg-gradient-to-br from-emerald-900/30 to-green-900/30"
      >
        <Coins className="w-10 h-10 sm:w-16 sm:h-16 text-emerald-400 mx-auto mb-2 sm:mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Instant & Automated Payouts</h3>
        <p className="text-base sm:text-lg text-emerald-200 max-w-3xl mx-auto">
          Both CP1 and CP2 earnings are processed automatically by the smart contract and sent directly to your Web3 wallet in RAMA Coin, ensuring transparency and efficiency.
        </p>
      </motion.div>
    </div>
  );
};
```