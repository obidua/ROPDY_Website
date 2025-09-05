import React, { useEffect, useState } from 'react';
import { useWallet } from '../context/WalletContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Wallet, ArrowUpRight, ArrowDownRight, RefreshCw, BarChart, Landmark } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { address, isConnected, connectWallet } = useWallet();
  const [balance, setBalance] = useState<string>('0');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Dashboard | Ropdy';
  }, []);

  useEffect(() => {
    if (isConnected) {
      setIsLoading(true);
      setTimeout(() => {
        setBalance('2,450.75');
        setIsLoading(false);
      }, 1500);
    }
  }, [isConnected]);

  if (!isConnected) {
    return (
      <div className="min-h-screen pt-16 pb-12 flex flex-col items-center justify-center bg-gradient-to-b from-black to-green-900/30">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-green-500 to-emerald-700 animate-gradient">
            <Wallet className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Connect Your Wallet</h1>
          <p className="text-green-200 mb-8">
            Connect your wallet to access the Ropdy dashboard and interact with the smart contract.
          </p>
          <Button 
            onClick={connectWallet} 
            variant="primary" 
            size="lg" 
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-12 bg-gradient-to-b from-black to-green-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-green-200 mt-2">Welcome to your Ropdy dashboard</p>
        </div>

        {/* Account Overview */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20 group">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Account Overview</h2>
            <button className="p-2 rounded-lg hover:bg-green-900/20 transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 group-hover:from-blue-400 group-hover:to-cyan-500 flex items-center justify-center">
                <RefreshCw size={18} className="text-white" />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-green-400 mb-1">Connected Address</h3>
              <div className="bg-green-900/20 rounded-lg p-3 border border-green-900/30">
                <code className="text-green-100 break-all">{address}</code>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-green-400 mb-1">RPD Balance</h3>
              <div className="bg-green-900/20 rounded-lg p-3 h-full flex items-center border border-green-900/30">
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-green-400" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-green-200">Loading balance...</span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-white">{balance} RPD</span>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Actions and Interactions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="p-6 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20 group">
            <h2 className="text-xl font-bold text-white mb-4">Transfer Tokens</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="recipient" className="block text-sm font-medium text-green-400 mb-1">
                  Recipient Address
                </label>
                <input
                  type="text"
                  id="recipient"
                  className="w-full bg-green-900/20 border border-green-900/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0x..."
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-green-400 mb-1">
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  className="w-full bg-green-900/20 border border-green-900/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0.0"
                />
              </div>
              <Button variant="primary" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 group">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 group-hover:from-yellow-400 group-hover:to-amber-500 flex items-center justify-center mr-2">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
                Send Tokens
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20 group">
            <h2 className="text-xl font-bold text-white mb-4">Stake Tokens</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="stake-amount" className="block text-sm font-medium text-green-400 mb-1">
                  Stake Amount
                </label>
                <input
                  type="text"
                  id="stake-amount"
                  className="w-full bg-green-900/20 border border-green-900/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0.0"
                />
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-green-400 mb-1">
                  Lock Duration
                </label>
                <select
                  id="duration"
                  className="w-full bg-green-900/20 border border-green-900/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option>30 days (10% APY)</option>
                  <option>90 days (15% APY)</option>
                  <option>180 days (22% APY)</option>
                  <option>365 days (30% APY)</option>
                </select>
              </div>
              <Button variant="primary" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 group">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 group-hover:from-purple-400 group-hover:to-indigo-500 flex items-center justify-center mr-2">
                  <Landmark size={16} className="text-white" />
                </div>
                Stake Now
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20 group">
            <h2 className="text-xl font-bold text-white mb-4">Claim Rewards</h2>
            <div className="space-y-4">
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-900/30">
                <h3 className="text-sm font-medium text-green-400 mb-1">Available Rewards</h3>
                <p className="text-2xl font-bold text-white">125.75 RPD</p>
                <p className="text-xs text-green-200 mt-1">≈ $10.94 USD</p>
              </div>
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-900/30">
                <h3 className="text-sm font-medium text-green-400 mb-1">Next Reward</h3>
                <p className="text-sm text-white">In 12 hours and 45 minutes</p>
              </div>
              <Button variant="secondary" className="w-full bg-green-900/40 hover:bg-green-900/60 border border-green-900/30 text-green-100 group">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 group-hover:from-pink-400 group-hover:to-rose-500 flex items-center justify-center mr-2">
                  <ArrowDownRight size={16} className="text-white" />
                </div>
                Claim Rewards
              </Button>
            </div>
          </Card>
        </div>

        {/* Transaction History */}
        <Card className="p-6 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Transaction History</h2>
            <Button variant="outline" size="sm" className="border-green-900/30 text-green-200 hover:bg-green-900/20 group">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 group-hover:from-amber-400 group-hover:to-orange-500 flex items-center justify-center mr-2">
                <BarChart size={16} className="text-white" />
              </div>
              View All
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-green-900/30">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-400 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-400 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-400 uppercase tracking-wider">Tx Hash</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-900/30">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Stake</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">500 RPD</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/30 text-green-400">Confirmed</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-200">2025-03-15 14:30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 hover:text-green-300 cursor-pointer">0x8a...3b4f</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Claim</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">75 RPD</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/30 text-green-400">Confirmed</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-200">2025-03-14 09:15</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 hover:text-green-300 cursor-pointer">0x4c...9e2a</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Transfer</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">250 RPD</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-900/30 text-yellow-400">Pending</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-200">2025-03-13 17:22</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 hover:text-green-300 cursor-pointer">0xf1...7d3c</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;