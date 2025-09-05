import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {
  ArrowRight,
  Wallet,
  Users,
  Zap,
  Shield,
  Target,
  RefreshCw,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Coins,
  Network
} from 'lucide-react';

const RopdyCirclePage: React.FC = () => {
  useEffect(() => {
    document.title = 'ROPDY Circle | Ramestta On-Chain Passive Dynamic Yield';
  }, []);

  const packages = [
    { name: 'Starter', price: 20, perPayment: 10, total: 60 },
    { name: 'Silver', price: 40, perPayment: 20, total: 120 },
    { name: 'Gold', price: 80, perPayment: 40, total: 240 },
    { name: 'Platinum', price: 160, perPayment: 80, total: 480 },
    { name: 'Diamond', price: 320, perPayment: 160, total: 960 }
  ];

  const cp1Earnings = [
    { package: 'Starter', earning: 100 },
    { package: 'Silver', earning: 200 },
    { package: 'Gold', earning: 400 },
    { package: 'Platinum', earning: 800 },
    { package: 'Diamond', earning: 1600 }
  ];

  const faqs = [
    {
      question: 'Is ROPDY an ROI or fixed-return program?',
      answer: 'No. ROPDY is a circle-based earning system. Payouts depend on CP1/CP2 distribution and circle completions, not fixed percentages.'
    },
    {
      question: 'Where does my income come from?',
      answer: 'From package activations across the network: your directs via CP1 and global activations via CP2 (MOD1–MOD4 and MOD4 queue hits).'
    },
    {
      question: 'Do I need to request a withdrawal?',
      answer: 'No. Eligible earnings credit directly to your wallet.'
    },
    {
      question: 'What happens when RAMA price changes?',
      answer: 'The contract pays the USD-equivalent in RAMA at the time of transfer. For re-activation, the RAMA collected in payments #5 and #6 is treated as the package price by the contract.'
    },
    {
      question: 'Can I earn without referrals?',
      answer: 'Yes, via CP2 global matching (MOD algorithms). However, making directs typically accelerates results.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-green-900/50 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-indigo-400">
            ROP<span style={{ letterSpacing: '-1px' }}>DY</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white mb-6">
            <strong>Ramestta On-Chain Passive Dynamic Yield</strong> — 100% smart-contract powered, fully decentralized earning system on Ramestta.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-2 bg-green-900/30 rounded-lg p-4 border border-green-700/30">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="text-green-200">Built on Ramestta Blockchain (fast, low-fee)</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-green-900/30 rounded-lg p-4 border border-green-700/30">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-200">No admin control — rules enforced by smart contract</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-green-900/30 rounded-lg p-4 border border-green-700/30">
              <Wallet className="w-5 h-5 text-green-400" />
              <span className="text-green-200">Wallet-to-wallet payouts in <strong>RAMA Coin</strong></span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-green-900/30 rounded-lg p-4 border border-green-700/30">
              <Target className="w-5 h-5 text-green-400" />
              <span className="text-green-200">Transparent on-chain tracking (Ramascan)</span>
            </div>
          </div>

          <a
            href="https://dapp.ropdy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 animate-pulse-shadow"
            >
              Join with Referral Link
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How ROPDY Works (in 30 seconds)</h2>
          </div>

          <Card className="p-8 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-green-200">Activate a package using RAMA Coin from your Web3 wallet.</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-green-200">Each package opens a <strong className="text-white">circle</strong> that collects <strong className="text-white">6 payments</strong> (from your directs or from global CP2 matching).</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-green-200">Payments #1–#4 pay instantly to your wallet; payments #5–#6 are held for <strong className="text-white">auto reactivation</strong> of the same package.</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <p className="text-green-200">The circle reopens automatically, repeating the earning cycle — hands-free.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-900/20 rounded-lg border border-green-700/30">
              <p className="text-green-300 text-center italic">
                <RefreshCw className="w-5 h-5 inline mr-2" />
                No withdrawal button needed — earnings credit directly to your wallet.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-b from-green-900/30 to-black relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Packages (One-time Entry per Package)</h2>
            <p className="text-green-200 max-w-4xl mx-auto">
              All package earnings are denominated in USD for illustration; the contract pays in RAMA Coin worth the same value at the time of transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-green-900/20 to-black/50 border border-green-900/20 hover:border-green-500/30 transition-colors duration-300">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">{pkg.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-green-400">Price</p>
                      <p className="text-2xl font-bold text-green-300">${pkg.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-green-400">Per Payment to You</p>
                      <p className="text-lg font-semibold text-white">${pkg.perPayment}</p>
                    </div>
                    <div>
                      <p className="text-sm text-green-400">Total from 6 Payments</p>
                      <p className="text-lg font-semibold text-emerald-400">${pkg.total}</p>
                    </div>
                    <div className="pt-3 border-t border-green-900/30">
                      <p className="text-xs text-green-300">
                        Reactivation: <strong>5th & 6th</strong> payment auto-reactivate
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CP1 / CP2 & MODs Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-to-br from-green-900/20 to-black/50 border border-green-900/20">
              <h2 className="text-2xl font-bold text-white mb-6">Payment Split: CP1 & CP2</h2>
              <p className="text-green-200 mb-6">Every package activation splits <strong className="text-white">50/50</strong>:</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">CP1 — Sponsor Bonus (50%)</h3>
                    <p className="text-green-200">Goes directly to the sponsor/upline.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Network className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">CP2 — Global Bonus (50%)</h3>
                    <p className="text-green-200">Distributed by the MOD algorithm.</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-900/20 to-black/50 border border-green-900/20">
              <h3 className="text-2xl font-bold text-white mb-6">MOD1–MOD4 (CP2 Distribution)</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">MOD1</h4>
                    <p className="text-green-200 text-sm">Every 3rd activation/re-activation → paid to 2nd upline</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">MOD2</h4>
                    <p className="text-green-200 text-sm">Every 5th activation/re-activation → paid to 3rd upline</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">MOD3</h4>
                    <p className="text-green-200 text-sm">Every 8th activation/re-activation → paid to reward pool contract</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">MOD4</h4>
                    <p className="text-green-200 text-sm">All other activations → fair queue (Hit-1, Hit-2, Hit-3) distribution</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Circle Flow Section */}
      <section className="py-20 bg-gradient-to-b from-green-900/30 to-black relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">The Circle Flow (6 Payments)</h2>
          </div>

          <Card className="p-8 bg-gradient-to-br from-green-900/20 to-black/50 border border-green-900/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-green-200">Your active circle receives 6 payments (from directs or global CP2).</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-green-200">Payments <strong className="text-white">#1–#4</strong> are credited instantly to your wallet.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-green-200">Payments <strong className="text-white">#5–#6</strong> are reserved by the contract for <strong className="text-white">auto re-activation</strong> of the same package.</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <p className="text-green-200">A new circle opens automatically — your earnings continue on loop.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
              <p className="text-yellow-200 text-sm">
                <AlertTriangle className="w-4 h-4 inline mr-2" />
                <em>Note:</em> For re-activation, the contract doesn't fetch live price; whatever RAMA is collected in the 5th & 6th payments is treated as equal to the package price for CP1/CP2 distribution.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Power of 10 Directs Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Power of 10 Directs (CP1)</h2>
            <p className="text-green-200 max-w-3xl mx-auto">
              If you activate all 5 packages and refer 10 users who do the same, your CP1 earnings are:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {cp1Earnings.map((item, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-to-br from-green-900/20 to-black/50 border border-green-900/20">
                <h3 className="text-lg font-semibold text-white mb-2">{item.package}</h3>
                <p className="text-2xl font-bold text-green-400">${item.earning}</p>
                <p className="text-xs text-green-300 mt-1">from 10 directs</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/30 text-center">
            <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Total CP1 from 10 directs = $3,100</h3>
            <p className="text-emerald-200">And it repeats on every re-activation!</p>
          </Card>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-gradient-to-b from-green-900/30 to-black relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get Started in 2 Minutes</h2>
          </div>

          <Card className="p-8 bg-gradient-to-br from-green-900/20 to-black/50 border border-green-900/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-green-200">Connect Wallet (MetaMask / Trust Wallet).</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-green-200">Register with your <strong className="text-white">Sponsor Referral Link</strong>.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-green-200">Activate your account with <strong className="text-white">$20</strong> (referral link is required). After that, you may activate packages at $40, $80, $160, and $320.</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <p className="text-green-200">Start receiving RAMA Coin income directly to your wallet.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://dapp.ropdy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Join with Referral Link
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">FAQ</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gradient-to-br from-green-900/20 to-black/50 border border-green-900/20">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-6 hover:bg-green-900/10 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center group-open:rotate-45 transition-transform duration-200">
                        <span className="text-white text-sm font-bold">+</span>
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-green-200 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-green-900/30 to-black relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin?</h2>
          <p className="text-xl text-green-200 mb-8 max-w-3xl mx-auto">
            Open your wallet, register with the referral link, activate $20, and start earning in minutes.
          </p>
          <a
            href="https://dapp.ropdy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 animate-pulse-shadow"
            >
              <Coins className="w-5 h-5 mr-2" />
              Join ROPDY with Referral Link
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default RopdyCirclePage;