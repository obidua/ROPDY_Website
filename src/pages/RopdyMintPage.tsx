import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {
  ArrowRight,
  Shield,
  Sparkles,
  Network,
  Target,
  Layers,
  CheckCircle2,
  Wallet,
  TrendingUp,
  Users,
  Award,
  AlertTriangle,
  Zap,
  Lock,
  Globe
} from 'lucide-react';

const RopdyMintPage: React.FC = () => {
  useEffect(() => {
    document.title = 'ROPDY Mint — Stake RAMA, Earn Daily USD-Pegged Rewards | ROPDY';
  }, []);

  const mintTiers = [
    { tier: 1, minStake: 5, horizon2x: 990, roi2x: 0.20, horizon3x: 1350, roi3x: 0.22 },
    { tier: 2, minStake: 10, horizon2x: 900, roi2x: 0.22, horizon3x: 1260, roi3x: 0.24 },
    { tier: 3, minStake: 20, horizon2x: 810, roi2x: 0.25, horizon3x: 1170, roi3x: 0.26 },
    { tier: 4, minStake: 40, horizon2x: 720, roi2x: 0.28, horizon3x: 1080, roi3x: 0.28 },
    { tier: 5, minStake: 80, horizon2x: 600, roi2x: 0.33, horizon3x: 930, roi3x: 0.32 },
  ];

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

  const leadershipRewards = [
    { level: 1, reward: '$100', gtoShare: '2.0%', boosterPct: '10%', selfBusiness: '$200', directs: 2, directStaked: '$300', teamSize: 10, teamBusiness: '$2,000' },
    { level: 2, reward: '$250', gtoShare: '1.8%', boosterPct: '12%', selfBusiness: '$300', directs: 3, directStaked: '$600', teamSize: 20, teamBusiness: '$5,000' },
    { level: 3, reward: '$500', gtoShare: '1.5%', boosterPct: '14%', selfBusiness: '$500', directs: 4, directStaked: '$1,200', teamSize: 40, teamBusiness: '$15,000' },
    { level: 4, reward: '$1,000', gtoShare: '1.2%', boosterPct: '16%', selfBusiness: '$1,000', directs: 5, directStaked: '$2,500', teamSize: 80, teamBusiness: '$40,000' },
    { level: 5, reward: '$2,500', gtoShare: '1.0%', boosterPct: '18%', selfBusiness: '$2,000', directs: 6, directStaked: '$5,000', teamSize: 150, teamBusiness: '$100,000' },
    { level: 6, reward: '$5,000', gtoShare: '0.8%', boosterPct: '20%', selfBusiness: '$4,000', directs: 8, directStaked: '$10,000', teamSize: 300, teamBusiness: '$250,000' },
    { level: 7, reward: '$10,000', gtoShare: '0.6%', boosterPct: '22%', selfBusiness: '$6,000', directs: 10, directStaked: '$20,000', teamSize: 500, teamBusiness: '$500,000' },
    { level: 8, reward: '$25,000', gtoShare: '0.4%', boosterPct: '24%', selfBusiness: '$10,000', directs: 12, directStaked: '$40,000', teamSize: 800, teamBusiness: '$1,200,000' },
    { level: 9, reward: '$50,000', gtoShare: '0.3%', boosterPct: '26%', selfBusiness: '$20,000', directs: 15, directStaked: '$80,000', teamSize: 1500, teamBusiness: '$3,000,000' },
    { level: 10, reward: '$100,000', gtoShare: '0.2%', boosterPct: '28%', selfBusiness: '$50,000', directs: 20, directStaked: '$150,000', teamSize: 3000, teamBusiness: '$8,000,000' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-indigo-950 to-teal-950 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-indigo-500 to-teal-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-teal-500 to-indigo-600 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-teal-400 to-cyan-400">
            ROPDY Mint
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white mb-4">
            Passive, Dynamic, On-Chain.
          </p>
          <p className="text-lg text-indigo-200 mb-8 max-w-3xl mx-auto">
            Stake RAMA, earn daily USD-pegged rewards, and grow with a 10-level community engine — fully transparent and on the Ramestta network.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button variant="primary" size="lg" className="bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700">
              Start Minting
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-teal-500 text-teal-400 hover:bg-teal-900/20">
              View Smart Rules
            </Button>
          </div>

          {/* Hero Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 bg-indigo-900/30 rounded-lg p-4 border border-indigo-700/30">
              <Shield className="w-6 h-6 text-indigo-400" />
              <span className="text-indigo-200 font-medium">Validator-Backed Rewards</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-teal-900/30 rounded-lg p-4 border border-teal-700/30">
              <Sparkles className="w-6 h-6 text-teal-400" />
              <span className="text-teal-200 font-medium">USD-Pegged Daily ROI</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-cyan-900/30 rounded-lg p-4 border border-cyan-700/30">
              <Network className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-200 font-medium">10-Level Growth Income</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why ROPDY Mint */}
      <section className="py-20 bg-gradient-to-b from-black to-indigo-950/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why ROPDY Mint?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-to-br from-indigo-900/20 to-black/50 border border-indigo-700/30">
              <Sparkles className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Stake RAMA, Earn Daily</h3>
              <p className="text-indigo-200">Rewards calculated in USD terms, paid in RAMA.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-teal-900/20 to-black/50 border border-teal-700/30">
              <Zap className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Validator Delegation Engine</h3>
              <p className="text-teal-200">Yield sourced from Ramestta node delegation, harvested and re-deployed daily.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-black/50 border border-purple-700/30">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Dual Income Design</h3>
              <p className="text-purple-200">Personal minting + 10-level network growth.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-black/50 border border-cyan-700/30">
              <Shield className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Transparent Rules</h3>
              <p className="text-cyan-200">3× cap, mandatory top-ups, on-chain logic.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-emerald-900/20 to-black/50 border border-emerald-700/30">
              <Lock className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Volatility Buffer</h3>
              <p className="text-emerald-200">Rewards are pegged to USD value at release time.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-indigo-950/30 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Delegation-Backed, USD-Pegged</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-indigo-200 mb-6 text-lg">
                ROPDY Mint delegates RAMA to Ramestta validators (targeting ~5%–8.4% monthly gross). Rewards are collected daily and redistributed to users using a <strong className="text-white">USD-pegged calculation</strong>: your daily ROI is computed as a <strong className="text-white">USD value and released in RAMA</strong> at the current rate.
              </p>
              <p className="text-indigo-200 mb-8 text-lg">
                This lets users <strong className="text-teal-400">sell instantly</strong> for stability or <strong className="text-teal-400">hold RAMA</strong> for potential upside — while the protocol continues <strong className="text-white">compounding via daily redelegation</strong>.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Stake in USD Terms</h3>
                  <p className="text-indigo-200">You deposit RAMA equal to your chosen USD stake.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Pick a Horizon</h3>
                  <p className="text-teal-200">2× (lower daily ROI, shorter) or 3× (higher daily ROI, longer).</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Earn to 3× Cap</h3>
                  <p className="text-cyan-200">When total income reaches 3× of stake, top up to continue.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mint Tiers & ROI */}
      <section className="py-20 bg-gradient-to-b from-black to-indigo-950/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Mint Tiers & Daily ROI</h2>
            <p className="text-indigo-200">Longer horizons unlock higher daily ROI rates.</p>
          </div>

          <Card className="p-6 bg-gradient-to-br from-indigo-900/20 to-black/50 border border-indigo-700/30 overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-indigo-700/30">
                  <th className="px-4 py-3 text-left text-indigo-400 font-medium">Server (Tier)</th>
                  <th className="px-4 py-3 text-right text-indigo-400 font-medium">Min Stake (USD)</th>
                  <th className="px-4 py-3 text-right text-indigo-400 font-medium">2× Horizon (days)</th>
                  <th className="px-4 py-3 text-right text-indigo-400 font-medium">2× Daily ROI</th>
                  <th className="px-4 py-3 text-right text-indigo-400 font-medium">3× Horizon (days)</th>
                  <th className="px-4 py-3 text-right text-indigo-400 font-medium">3× Daily ROI</th>
                </tr>
              </thead>
              <tbody>
                {mintTiers.map((tier, index) => (
                  <tr key={index} className="border-b border-indigo-800/20">
                    <td className="px-4 py-3 text-white font-medium">{tier.tier}</td>
                    <td className="px-4 py-3 text-right text-white">${tier.minStake.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right text-teal-200">{tier.horizon2x}</td>
                    <td className="px-4 py-3 text-right text-teal-400 font-medium">{tier.roi2x}%</td>
                    <td className="px-4 py-3 text-right text-cyan-200">{tier.horizon3x}</td>
                    <td className="px-4 py-3 text-right text-cyan-400 font-medium">{tier.roi3x}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      {/* Circle Program */}
      <section className="py-20 bg-gradient-to-b from-indigo-950/30 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Community Engine — Two Income Streams</h2>
            <p className="text-indigo-200 max-w-3xl mx-auto">
              Earn beyond personal staking with the <strong className="text-white">10-level Circle Program</strong>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-emerald-900/20 to-black/50 border border-emerald-700/30">
              <Zap className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Spot Commission (Instant)</h3>
              <p className="text-emerald-200">% from each new stake across your network.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-black/50 border border-purple-700/30">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Daily Growth (Ongoing)</h3>
              <p className="text-purple-200">% share of your team's daily ROI.</p>
            </Card>
          </div>

          <Card className="p-6 bg-gradient-to-br from-indigo-900/20 to-black/50 border border-indigo-700/30 overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-indigo-700/30">
                  <th className="px-4 py-3 text-left text-indigo-400 font-medium">Level</th>
                  <th className="px-4 py-3 text-right text-indigo-400 font-medium">Spot Commission</th>
                  <th className="px-4 py-3 text-right text-indigo-400 font-medium">Daily Growth</th>
                </tr>
              </thead>
              <tbody>
                {circleLevels.map((level, index) => (
                  <tr key={index} className="border-b border-indigo-800/20">
                    <td className="px-4 py-3 text-white font-medium">{level.level}</td>
                    <td className="px-4 py-3 text-right text-emerald-400">{level.spotCommission}%</td>
                    <td className="px-4 py-3 text-right text-purple-400">{level.dailyGrowth}%</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-indigo-600/50 bg-indigo-900/20">
                  <td className="px-4 py-3 text-white font-bold">Total</td>
                  <td className="px-4 py-3 text-right text-emerald-400 font-bold">10%</td>
                  <td className="px-4 py-3 text-right text-purple-400 font-bold">35%</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-indigo-300 mt-4">Spot is instant; Daily Growth accrues with active team stakes.</p>
          </Card>
        </div>
      </section>

      {/* Leadership Rewards */}
      <section className="py-20 bg-gradient-to-b from-black to-indigo-950/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Leadership & Global Turnover Sharing</h2>
            <p className="text-indigo-200 max-w-4xl mx-auto">
              Hit milestones to unlock <strong className="text-white">Global Turnover (GTO) shares</strong> and special rewards. 
              Percentages are <strong className="text-teal-400">time-bound</strong> (up to 2 years from qualification) and stack with Circle income.
            </p>
          </div>

          {/* Booster Explanation */}
          <Card className="p-6 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-700/30 mb-12">
            <div className="flex items-start space-x-4">
              <Sparkles className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-3">🚀 60-Day Booster Program</h3>
                <p className="text-yellow-200 mb-4">
                  <strong className="text-white">New members get enhanced rewards!</strong> If you claim any level reward within <strong className="text-yellow-400">60 days of joining</strong>, 
                  you receive a significant bonus on top of the base reward amount.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-yellow-400 font-semibold mb-2">Booster Formula:</h4>
                    <p className="text-yellow-200 text-sm">Level 1: +10% bonus</p>
                    <p className="text-yellow-200 text-sm">Level 2: +12% bonus</p>
                    <p className="text-yellow-200 text-sm">Level 3: +14% bonus</p>
                    <p className="text-yellow-200 text-sm">...and so on (+2% per level)</p>
                    <p className="text-yellow-200 text-sm">Level 10: +28% bonus</p>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-semibold mb-2">Example:</h4>
                    <p className="text-yellow-200 text-sm">Level 5 base reward: $2,500</p>
                    <p className="text-yellow-200 text-sm">With 18% booster: $2,950</p>
                    <p className="text-yellow-200 text-sm font-bold text-yellow-400">Extra $450 bonus!</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-900/30 rounded-lg border border-yellow-700/50">
                  <p className="text-yellow-300 text-sm">
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    <strong>Time-sensitive:</strong> The 60-day window starts from your first stake. Plan your level achievements strategically!
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-indigo-900/20 to-black/50 border border-indigo-700/30 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-indigo-700/30">
                  <th className="px-3 py-3 text-left text-indigo-400 font-medium">Reward</th>
                  <th className="px-3 py-3 text-center text-indigo-400 font-medium">Global T.O. Share</th>
                  <th className="px-3 py-3 text-center text-indigo-400 font-medium">Booster Bonus</th>
                  <th className="px-3 py-3 text-center text-indigo-400 font-medium">Self Business</th>
                  <th className="px-3 py-3 text-center text-indigo-400 font-medium">Directs</th>
                  <th className="px-3 py-3 text-center text-indigo-400 font-medium">Direct USD Staked</th>
                  <th className="px-3 py-3 text-center text-indigo-400 font-medium">Team Size</th>
                  <th className="px-3 py-3 text-center text-indigo-400 font-medium">Team Business</th>
                </tr>
              </thead>
              <tbody>
                {leadershipRewards.map((reward, index) => (
                  <tr key={index} className="border-b border-indigo-800/20">
                    <td className="px-3 py-3 text-white font-medium">{reward.reward}</td>
                    <td className="px-3 py-3 text-center text-yellow-400">{reward.gtoShare}</td>
                    <td className="px-3 py-3 text-center text-orange-400 font-medium">{reward.boosterPct}</td>
                    <td className="px-3 py-3 text-center text-teal-400">{reward.selfBusiness}</td>
                    <td className="px-3 py-3 text-center text-purple-400">{reward.directs}</td>
                    <td className="px-3 py-3 text-center text-cyan-400">{reward.directStaked}</td>
                    <td className="px-3 py-3 text-center text-emerald-400">{reward.teamSize}</td>
                    <td className="px-3 py-3 text-center text-indigo-300">{reward.teamBusiness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 p-3 bg-indigo-900/20 rounded-lg border border-indigo-700/30">
              <p className="text-sm text-indigo-300">
                <Sparkles className="w-4 h-4 inline mr-2 text-yellow-400" />
                <strong>Booster applies to ALL levels:</strong> Claim any level reward within 60 days of joining to receive the bonus percentage on top of the base reward.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Safety & Transparency */}
      <section className="py-20 bg-gradient-to-b from-indigo-950/30 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Program Rules & Protections</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-gradient-to-br from-red-900/20 to-black/50 border border-red-700/30">
              <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">3× Capping</h3>
              <p className="text-red-200">Total received across all incomes is capped at <strong className="text-white">3× of your current stake</strong>.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-900/20 to-black/50 border border-orange-700/30">
              <Target className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Mandatory Top-up</h3>
              <p className="text-orange-200">After reaching 3×, <strong className="text-white">top-up is required</strong> to keep receiving income.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-900/20 to-black/50 border border-green-700/30">
              <Shield className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">On-chain Verification</h3>
              <p className="text-green-200">Rewards, caps, and turnover logic are enforced by smart contracts.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-900/20 to-black/50 border border-blue-700/30">
              <Globe className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">USD-Pegged Distribution</h3>
              <p className="text-blue-200">Daily ROI is <strong className="text-white">computed in USD value</strong> and released in RAMA at the current rate.</p>
            </Card>
          </div>

          <div className="mt-8 p-4 bg-indigo-900/20 rounded-lg border border-indigo-700/30">
            <p className="text-sm text-indigo-300 text-center">
              <strong>Note:</strong> Validator yields and program parameters may evolve; always check the latest details.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-gradient-to-b from-black to-indigo-950/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Get Started in Minutes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {[
              { step: 1, title: 'Create a Ramestta Wallet', desc: 'Back up your keys securely.', icon: Wallet },
              { step: 2, title: 'Choose a Tier', desc: 'Pick 2× or 3× horizon.', icon: Layers },
              { step: 3, title: 'Stake RAMA', desc: 'Deposit RAMA equal to your chosen USD amount.', icon: Lock },
              { step: 4, title: 'Earn Daily ROI', desc: 'Rewards start minting automatically.', icon: Sparkles },
              { step: 5, title: 'Grow Your Network', desc: 'Activate Circle income and aim for Leadership milestones.', icon: Network },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-to-br from-indigo-900/20 to-black/50 border border-indigo-700/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-teal-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <item.icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-indigo-200 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" size="lg" className="bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700">
                Start Minting
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-500 text-purple-400 hover:bg-purple-900/20">
                Explore Circle Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-b from-indigo-950/30 to-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How are rewards protected from price swings?',
                a: 'Your daily ROI is calculated in USD terms and released in RAMA at the current rate. You can sell immediately for stability or hold RAMA for potential upside.'
              },
              {
                q: 'Where do rewards come from?',
                a: 'From Ramestta validator delegation. The protocol redelegates daily to maintain program sustainability.'
              },
              {
                q: 'What happens at the 3× cap?',
                a: 'Income pauses. Top-up your stake to resume receiving rewards.'
              },
              {
                q: 'Can I withdraw anytime?',
                a: 'Subject to smart-contract rules and horizon selection. Review the latest official docs before staking.'
              },
              {
                q: 'Is there an admin who can change payouts?',
                a: 'The program is rules-based and on-chain. Any updates follow published parameters; always review the latest version.'
              },
              {
                q: 'Do I need referrals?',
                a: 'No for personal minting. Referrals accelerate income via Spot Commission and Daily Growth.'
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-indigo-900/20 to-black/50 border border-indigo-700/30">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-indigo-200">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-12 bg-gradient-to-b from-black to-indigo-950/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="p-6 bg-gradient-to-br from-red-900/10 to-black/50 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              Important Disclaimers
            </h3>
            <div className="space-y-2 text-sm text-red-200">
              <p>• Crypto assets are volatile; <strong>returns are not guaranteed</strong>.</p>
              <p>• Program parameters can change; <strong>always review the latest official details</strong>.</p>
              <p>• This material is <strong>informational</strong> and not investment advice.</p>
              <p>• Participation may be restricted in some jurisdictions; ensure <strong>legal compliance</strong>.</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default RopdyMintPage;