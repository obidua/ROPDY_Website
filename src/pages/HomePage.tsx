import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Button from "../components/ui/Button";
import {
  FaLink,
  FaCoins,
  FaGlobe,
  FaGift,
  FaRecycle,
  FaLock,
} from "react-icons/fa";
import Card from "../components/ui/Card";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title =
      "ROPDY | Your Ultimate Smart Contract-Powered Income System";
  }, []);

  return (
    <div className="bg-gradient-to-r from-black to-green-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-indigo-400 animate-fade-in">
              Welcome to ROPDY
            </h1>
            <p
              className="text-2xl md:text-3xl font-semibold text-white mb-4 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Your Ultimate Smart Contract-Powered Income System
            </p>
            <p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              No admin. No withdrawals. Just your wallet, Ramestta blockchain,
              and infinite earning logic — 100% automated.
            </p>

            <div
              className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="https://dapp.ropdy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </a>

              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is ROPDY Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What is ROPDY?
            </h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              ROP-DY (Ramestta On-chain Passive Dynamic Yield) is a fully
              decentralized income engine that runs without human interference.
              It is a smart contract that lives on the Ramestta blockchain,
              operating 24/7 — rewarding participants in RAMA, the native token
              of the ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why ROPDY Is Built for the Future
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 100% On-Chain */}
            <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-green-900/20">
                <FaLink className="text-blue-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                100% On-Chain
              </h3>
              <p className="text-green-100">
                Immutable smart contract handles everything — transparently
              </p>
            </Card>

            {/* RAMA Token Payout */}
            <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-green-900/20">
                <FaCoins className="text-yellow-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                RAMA Token Payout
              </h3>
              <p className="text-green-100">
                Earn Ramestta's powerful utility token with real ecosystem
                demand
              </p>
            </Card>

            {/* Global Participation */}
            <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-green-900/20">
                <FaGlobe className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Global Participation
              </h3>
              <p className="text-green-100">
                Anyone, anywhere can join with a Web3 wallet — no KYC
              </p>
            </Card>

            {/* Multi-Mode Rewards */}
            <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-green-900/20">
                <FaGift className="text-pink-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Multi-Mode Rewards
              </h3>
              <p className="text-green-100">
                Earn from referrals, uplines, community overflow, and
                auto-reentries
              </p>
            </Card>

            {/* Auto-Sustainability */}
            <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-green-900/20">
                <FaRecycle className="text-teal-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Auto-Sustainability
              </h3>
              <p className="text-green-100">
                MOD4 logic keeps your cycles alive forever, even if you're
                inactive
              </p>
            </Card>

            {/* No Risk of Shutdown */}
            <Card className="p-6 hover:bg-green-900/10 transition-colors duration-300 border border-green-900/20">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-green-900/20">
                <FaLock className="text-orange-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                No Risk of Shutdown
              </h3>
              <p className="text-green-100">
                The contract can't be stopped — it runs forever
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* One Click to Financial Autonomy */}
      <section className="py-20 bg-gradient-to-r from-black to-green-900 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-8">
            One Click to Financial Autonomy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-lime-400 mr-3" />
              <span className="text-green-100">Earn in RAMA instantly</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3" />
              <span className="text-green-100">Automatic payouts</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-amber-400 mr-3" />
              <span className="text-green-100">No risk of shutdown</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-3" />
              <span className="text-green-100">Community-powered</span>
            </div>
          </div>

          <Link to="/how-it-works">
            <Button
              variant="primary"
              size="lg"
              className="animate-pulse-shadow bg-green-600 hover:bg-green-700 text-white"
            >
              <Zap size={16} className="mr-2" />
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
