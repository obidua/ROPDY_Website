import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import {
  ArrowRight,
  AlertTriangle,
  Star,
  Crown,
  Diamond,
  Rocket,
  Award,
  Zap,
  Shield,
  Users,
  Coins,
} from "lucide-react";

const packageLevels = [
  {
    tier: "Starter",
    price: 20,
    unlocks: "Entry + CP1/MOD1",
    icon: Star,
    color: "from-green-900/20 to-emerald-900/20",
  },
  {
    tier: "Silver",
    price: 40,
    unlocks: "CP2 + MOD2",
    icon: Award,
    color: "from-green-900/20 to-black/50",
  },
  {
    tier: "Gold",
    price: 80,
    unlocks: "Full matrix access",
    icon: Crown,
    color: "from-green-900/30 to-emerald-900/30",
  },
  {
    tier: "Platinum",
    price: 160,
    unlocks: "Greater team benefit",
    icon: Rocket,
    color: "from-green-900/30 to-black/50",
  },
  {
    tier: "Diamond",
    price: 320,
    unlocks: "Highest tier, elite income",
    icon: Diamond,
    color: "from-green-900/40 to-emerald-900/40",
  },
];

const smartModes = [
  {
    mode: "MOD1",
    whatHappens: "Payment #3 logic",
    whoGetsPaid: "2nd Upline",
    icon: Zap,
    color: "from-green-900/20 to-emerald-900/20",
  },
  {
    mode: "MOD2",
    whatHappens: "Payment #5 logic",
    whoGetsPaid: "3rd Upline",
    icon: Shield,
    color: "from-green-900/30 to-emerald-900/30",
  },
  {
    mode: "MOD3",
    whatHappens: "Payment #8 logic",
    whoGetsPaid: "Platform sustainability address",
    icon: Users,
    color: "from-green-900/40 to-emerald-900/40",
  },
  {
    mode: "MOD4",
    whatHappens: "Fallback logic",
    whoGetsPaid: "Community members from MOD4 Pool",
    icon: Coins,
    color: "from-green-900/50 to-emerald-900/50",
  },
];

const HowItWorksPage: React.FC = () => {
  useEffect(() => {
    document.title = "How It Works | ROPDY";
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-green-900/50 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-6">
            6 Ways to Earn RAMA Automatically
          </h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            ROPDY activates 6 earning streams the moment you join
          </p>
        </div>
      </section>

      {/* Core Purchase Sections */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                CP1 — Core Purchase 1
              </h2>
              <ul className="space-y-3 text-green-200">
                <li>• This is your direct referral income</li>
                <li>• Paid instantly when someone joins via your link</li>
                <li>• No conditions — if you're active, you earn</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                CP2 — Core Purchase 2
              </h2>
              <ul className="space-y-3 text-green-200">
                <li>• The network depth reward</li>
                <li>• System checks global logic</li>
                <li>• Rewards flow through MOD1-MOD4 system</li>
              </ul>
            </Card>
          </div>

          {/* MOD4 Alert Section */}
          <div className="mb-12 p-6 bg-green-900/20 border border-green-500/30 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">
                MOD4 — The Hidden Engine of Endless Earnings
              </h2>
            </div>
            <p className="text-green-300 ml-9">
              The secret force that keeps your rewards flowing, even when others
              miss opportunities.
            </p>
          </div>

          {/* Smart Matrix Modes */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              The 4 Modes of Smart Earning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smartModes.map((mode, index) => (
                <Card
                  key={index}
                  className={`p-6 bg-gradient-to-br ${mode.color} border border-green-900/20`}
                  hover={true}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {mode.mode}
                    </h3>
                    <mode.icon
                      className={`w-6 h-6 ${
                        index === 0
                          ? "text-blue-400"
                          : index === 1
                          ? "text-purple-400"
                          : index === 2
                          ? "text-orange-400"
                          : "text-teal-400"
                      }`}
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-green-400 font-medium">
                        What Happens
                      </p>
                      <p className="text-green-200">{mode.whatHappens}</p>
                    </div>
                    <div>
                      <p className="text-sm text-green-400 font-medium">
                        Who Gets Paid
                      </p>
                      <p className="text-green-200">{mode.whoGetsPaid}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Package Levels */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Package Levels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packageLevels.map((pkg, index) => (
                <Card
                  key={index}
                  className={`p-8 bg-gradient-to-br ${pkg.color} border border-green-900/20`}
                  hover={true}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      {pkg.tier}
                    </h3>
                    <pkg.icon
                      className={`w-8 h-8 ${
                        index === 0
                          ? "text-yellow-400"
                          : index === 1
                          ? "text-gray-300"
                          : index === 2
                          ? "text-amber-400"
                          : index === 3
                          ? "text-red-400"
                          : "text-blue-400"
                      }`}
                    />
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-green-400">
                      ${pkg.price}
                    </span>
                    <span className="text-green-200 ml-2">USD</span>
                  </div>
                  <div className="p-4 bg-black/20 rounded-lg">
                    <p className="text-green-200">{pkg.unlocks}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Where the Logic Lives */}
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-8 border border-green-900/20">
            <h2 className="text-2xl font-bold text-white mb-6">
              Where the Logic Lives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Smart Contract Functions
                </h3>
                <ul className="space-y-3 text-green-200">
                  <li>• fillCircle() ensures placement</li>
                  <li>
                    • heldFunds store your 5th and 6th earnings for reentry
                  </li>
                  <li>• missedPaymentsByUser logs every missed opportunity</li>
                  <li>• mod4PoolUsers rotates receivers based on fairness</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Transparency
                </h3>
                <p className="text-green-200">
                  Every bit is recorded, traceable, and enforced by smart
                  contract. No human intervention needed or possible.
                </p>
                <div className="mt-8">
                  <a
                    href="https://dapp.ropdy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Launch App
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
