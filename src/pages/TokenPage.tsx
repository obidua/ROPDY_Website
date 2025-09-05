import React, { useEffect } from 'react';
import TokenData from '../components/ui/TokenData';
import Card from '../components/ui/Card';
import { PieChart, LineChart, Landmark, Wallet } from 'lucide-react';

const TokenPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Token | Ropdy';
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-green-900/50 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-6">Ropdy Token (RPD)</h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Our native utility token powering the entire Ropdy ecosystem.
          </p>
        </div>
      </section>

      {/* Token Info Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <TokenData 
                contractAddress="0x67f395e14Ef05f3dD31A2936426035D867f82C33"
                tokenName="Ropdy Token"
                tokenSymbol="RPD"
                totalSupply="1,000,000,000"
                decimals={18}
              />
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Price History</h3>
                  <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-black/30 rounded-lg p-6">
                    <LineChart size={120} className="text-blue-400 opacity-70" />
                    <p className="text-green-200 mt-4 text-center">Chart visualization would appear here</p>
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Token Distribution</h3>
                  <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-black/30 rounded-lg p-6">
                    <PieChart size={120} className="text-purple-400 opacity-70" />
                    <p className="text-green-200 mt-4 text-center">Chart visualization would appear here</p>
                  </div>
                </Card>
              </div>
            </div>
            
            <div>
              <Card className="p-6 mb-8 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
                <h3 className="text-xl font-bold mb-4 text-white">Token Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-green-400 text-sm font-medium mb-1">Current Price</h4>
                    <p className="text-white text-2xl font-bold">$0.087</p>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 text-sm font-medium mb-1">Market Cap</h4>
                    <p className="text-white text-2xl font-bold">$87,000,000</p>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 text-sm font-medium mb-1">Circulating Supply</h4>
                    <p className="text-white text-2xl font-bold">650,000,000 RPD</p>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 text-sm font-medium mb-1">24h Volume</h4>
                    <p className="text-white text-2xl font-bold">$12,450,000</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
                <h3 className="text-xl font-bold mb-4 text-white">Token Utility</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Wallet className="w-5 h-5 text-blue-400" />
                    </div>
                    <p className="ml-3 text-green-200">Governance voting rights in the Ropdy DAO</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Wallet className="w-5 h-5 text-purple-400" />
                    </div>
                    <p className="ml-3 text-green-200">Fee reduction for platform transactions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Landmark className="w-5 h-5 text-yellow-400" />
                    </div>
                    <p className="ml-3 text-green-200">Staking rewards and yield farming opportunities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Wallet className="w-5 h-5 text-teal-400" />
                    </div>
                    <p className="ml-3 text-green-200">Access to premium features and early product releases</p>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Token Distribution Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Token Distribution</h2>
            <p className="text-green-200">
              The RPD token has been distributed to ensure long-term sustainability and alignment of incentives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
              <div className="w-24 h-24 rounded-full bg-blue-900/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">40%</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community & Ecosystem</h3>
              <p className="text-green-200">Reserved for community incentives, grants, and ecosystem growth.</p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
              <div className="w-24 h-24 rounded-full bg-purple-900/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">25%</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Team & Advisors</h3>
              <p className="text-green-200">Allocated to the team and advisors with a 2-year vesting schedule.</p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
              <div className="w-24 h-24 rounded-full bg-yellow-900/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-400">20%</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Treasury</h3>
              <p className="text-green-200">Controlled by governance for long-term project development.</p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
              <div className="w-24 h-24 rounded-full bg-teal-900/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-400">15%</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Initial Offering</h3>
              <p className="text-green-200">Sold during token launch to early supporters and investors.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenPage;