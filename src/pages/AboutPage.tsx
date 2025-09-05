import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Coins, Users, ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import { 
  FaWallet, 
  FaImage, 
  FaCode, 
  FaUsers,
  FaExchangeAlt,
  FaHandshake,
  FaPaintBrush,
  FaShieldAlt
} from 'react-icons/fa';

import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About | ROPDY';
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-green-900/50 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-6">Our Mission</h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            To bring unstoppable, automated income into the hands of everyday people using decentralized technology — with zero trust needed in any person or company.
          </p>
        </div>
      </section>

      {/* Tech Backbone Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Ramestta Blockchain?</h2>
              <p className="text-green-200 mb-6">
                ROPDY runs on Ramestta, a cutting-edge Layer 1 blockchain designed for maximum performance and reliability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-yellow-400 mr-3 animate-pulse" />
                  <span className="text-green-200">Ultra-fast transactions</span>
                </div>
                <div className="flex items-center">
                  <Coins className="w-6 h-6 text-amber-500 mr-3" />
                  <span className="text-green-200">Near-zero gas fees</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-400 mr-3" />
                  <span className="text-green-200">Secure and scalable smart contracts</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-purple-400 mr-3" />
                  <span className="text-green-200">Global adoption & active community</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20 group">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-700 group-hover:from-green-400 group-hover:to-emerald-600 transition-colors duration-300">
                  <FaWallet className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">DeFi Ready</h3>
                <p className="text-green-200">Built for decentralized finance</p>
              </Card>

              <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20 group">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-700 group-hover:from-purple-400 group-hover:to-indigo-600 transition-colors duration-300">
                  <FaImage className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">NFT Support</h3>
                <p className="text-green-200">Full NFT infrastructure</p>
              </Card>

              <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20 group">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-700 group-hover:from-blue-400 group-hover:to-cyan-600 transition-colors duration-300">
                  <FaCode className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">dApp Platform</h3>
                <p className="text-green-200">Robust smart contract support</p>
              </Card>

              <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20 group">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-700 group-hover:from-pink-400 group-hover:to-rose-600 transition-colors duration-300">
                  <FaUsers className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Growing Ecosystem</h3>
                <p className="text-green-200">Active development community</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* RAMA Token Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Earn in RAMA?</h2>
            <p className="text-green-200">
              RAMA is not a promise — it's a real utility token with established use cases and value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20 group">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 group-hover:from-amber-400 group-hover:to-orange-500 transition-colors duration-300">
                <FaExchangeAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Active DEX Listings</h3>
              <p className="text-green-200">Trade RAMA on decentralized exchanges</p>
            </Card>
            
            <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20 group">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 group-hover:from-emerald-400 group-hover:to-teal-500 transition-colors duration-300">
                <FaHandshake className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">DeFi Integration</h3>
              <p className="text-green-200">Stake RAMA and participate in DAO governance</p>
            </Card>
            
            <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20 group">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 group-hover:from-violet-400 group-hover:to-fuchsia-500 transition-colors duration-300">
                <FaPaintBrush className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">NFT Marketplace</h3>
              <p className="text-green-200">Use RAMA in the NFT ecosystem</p>
            </Card>
            
            <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20 group">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 group-hover:from-sky-400 group-hover:to-blue-500 transition-colors duration-300">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Physical Backing</h3>
              <p className="text-green-200">Supported by Ramestta ecosystem projects</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Join Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Who Should Join ROPDY?</h2>
            <p className="text-green-200">
              Whether you're active or passive — ROPDY keeps rewarding you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-green-900/30 to-black/50 border border-green-900/20 group hover:border-green-500/30 transition-colors duration-300">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Crypto Beginners</h3>
              <p className="text-green-200">
                Start your journey into crypto with a platform that's easy to understand and use.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-green-900/30 to-black/50 border border-green-900/20 group hover:border-green-500/30 transition-colors duration-300">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Marketers and Networkers</h3>
              <p className="text-green-200">
                Build your downlines and earn from team activities.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-green-900/30 to-black/50 border border-green-900/20 group hover:border-green-500/30 transition-colors duration-300">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community Builders</h3>
              <p className="text-green-200">
                Create and grow communities focused on fair systems.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-green-900/30 to-black/50 border border-green-900/20 group hover:border-green-500/30 transition-colors duration-300">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center animate-pulse">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Entrepreneurs</h3>
              <p className="text-green-200">
                Build sustainable revenue through blockchain technology.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/how-it-works">
              <Button variant="primary" size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-300">
                Start Your Journey
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;