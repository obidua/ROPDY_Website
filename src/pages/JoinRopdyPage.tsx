import React, { useEffect } from "react";
import {
  Wallet,
  ArrowRight,
  CheckCircle2,
  Landmark,
  BarChart3,
  Smartphone,
} from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const JoinRopdyPage: React.FC = () => {
  useEffect(() => {
    document.title = "Join ROPDY | No Signup. Just Your Wallet.";
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-green-900/50 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-6">Join ROPDY</h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            No Signup. Just Your Wallet.
          </p>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                How to Start
              </h2>
              <div className="space-y-6">
                {[
                  "Connect your Web3 wallet (MetaMask, Ramestta Wallet, etc.)",
                  "Enter your sponsor's wallet address",
                  "Select a package ($20 to $320)",
                  "Confirm payment in RAMA",
                  "Done — you're in the matrix",
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-4 ${
                        index === 0
                          ? "bg-blue-900"
                          : index === 1
                          ? "bg-purple-900"
                          : index === 2
                          ? "bg-yellow-900"
                          : index === 3
                          ? "bg-teal-900"
                          : "bg-orange-900"
                      }`}
                    >
                      <span
                        className={`font-semibold ${
                          index === 0
                            ? "text-blue-400"
                            : index === 1
                            ? "text-purple-400"
                            : index === 2
                            ? "text-yellow-400"
                            : index === 3
                            ? "text-teal-400"
                            : "text-orange-400"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-green-200">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-green-900/20 rounded-lg border border-green-900/30">
                <p className="text-white font-medium mb-2">
                  No login. No email. No passwords.
                </p>
                <p className="text-green-400">Your wallet = your account.</p>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                What You Get
              </h3>
              <div className="space-y-4">
                {[
                  "Direct and team earnings (CP1 + CP2)",
                  "Matrix income via MOD1–MOD4",
                  "Auto-repurchase through held funds",
                  "Real-time RAMA payouts",
                  "View circles, earnings, and missed opportunities",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2
                      className={`w-5 h-5 ${
                        index === 0
                          ? "text-lime-400"
                          : index === 1
                          ? "text-cyan-400"
                          : index === 2
                          ? "text-amber-400"
                          : index === 3
                          ? "text-pink-400"
                          : "text-emerald-400"
                      } mr-3`}
                    />
                    <span className="text-green-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Live Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Global Report Stats",
                description: "Real stats: users, RAMA earned",
                icon: BarChart3,
              },
              {
                title: "Missed Payments",
                description: "Shows what you lost and why",
                icon: Landmark,
              },
              {
                title: "Circle Details",
                description: "Your active cycles",
                icon: Wallet,
              },
              {
                title: "Circle Count",
                description: "Your total progress",
                icon: CheckCircle2,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20"
                hover={true}
              >
                <feature.icon
                  className={`w-8 h-8 ${
                    index === 0
                      ? "text-blue-400"
                      : index === 1
                      ? "text-yellow-400"
                      : index === 2
                      ? "text-purple-400"
                      : "text-teal-400"
                  } mb-4`}
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-green-200">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Wallets Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/50 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Compatible Wallets
            </h2>
            <p className="text-green-200">
              Connect with your preferred Web3 wallet
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* MetaMask */}
            <Card className="p-6 text-center bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20 hover:bg-green-900/20 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                  alt="MetaMask"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">MetaMask</h3>
            </Card>

            {/* Ramestta Wallet */}
            <Card className="p-6 text-center bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20 hover:bg-green-900/20 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-4">
                <Wallet className="w-full h-full text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Ramestta Wallet
              </h3>
            </Card>

            {/* Trust Wallet */}
            <Card className="p-6 text-center bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20 hover:bg-green-900/20 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src="https://trustwallet.com/assets/images/media/assets/TWT.png"
                  alt="Trust Wallet"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">Trust Wallet</h3>
            </Card>

            {/* WalletConnect */}
            <Card className="p-6 text-center bg-gradient-to-br from-green-900/10 to-black/50 border border-green-900/20 hover:bg-green-900/20 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYxLjI1IDEyNWMwLTM1LjIgMjguNTUtNjMuNzUgNjMuNzUtNjMuNzVoNjIuNWMzNS4yIDAgNjMuNzUgMjguNTUgNjMuNzUgNjMuNzV2NjIuNWMwIDM1LjItMjguNTUgNjMuNzUtNjMuNzUgNjMuNzVoLTYyLjVjLTM1LjIgMC02My43NS0yOC41NS02My43NS02My43NXYtNjIuNXoiIGZpbGw9IiMyNjkyRkYiLz48cGF0aCBkPSJNMTI1IDc4Ljc1Yy0yNS41IDAtNDYuMjUgMjAuNzUtNDYuMjUgNDYuMjVzMjAuNzUgNDYuMjUgNDYuMjUgNDYuMjUgNDYuMjUtMjAuNzUgNDYuMjUtNDYuMjUtMjAuNzUtNDYuMjUtNDYuMjUtNDYuMjVtMC04MS4yNWM0My4zNSAwIDc4Ljc1IDM1LjQgNzguNzUgNzguNzVzLTM1LjQgNzguNzUtNzguNzUgNzguNzUtNzguNzUtMzUuNC03OC43NS03OC43NSAzNS40LTc4Ljc1IDc4Ljc1LTc4Ljc1eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="
                  alt="WalletConnect"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">
                WalletConnect
              </h3>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900/30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-green-600 to-black rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-8">
            Launch ROPDY Now
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://dapp.ropdy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                Launch DApp
                <ArrowRight size={16} className="ml-2 text-yellow-400" />
              </Button>
            </a>

            <a
              href="https://www.ramascan.com/address/0x478F02521e5A86D4bFEbaF0730446E2B45b3e95d?tab=contract"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block" // or other styling as needed
            >
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-400 hover:bg-green-900/30"
              >
                View Contract on RamesttaScan
                <ArrowRight size={16} className="ml-2 text-green-400" />
              </Button>
            </a>
            <a
              href="https://t.me/ropdycircle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="secondary"
                size="lg"
                className="bg-green-900/10 hover:bg-green-900/20 text-white border border-green-900/20"
              >
                Join Our Telegram
                <ArrowRight size={16} className="ml-2 text-teal-400" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinRopdyPage;
