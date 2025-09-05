// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Wallet } from 'lucide-react';
// import { useWallet } from '../../context/WalletContext';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { address, isConnected, connectWallet, disconnectWallet } = useWallet();
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   const truncateAddress = (address: string) => {
//     return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
//   };

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center space-x-2">
//               <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
//                 <Wallet size={20} className="text-white" />
//               </div>
//               <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
//                 Ropdy
//               </span>
//             </Link>
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               to="/"
//               className={`text-sm font-medium transition-colors ${
//                 location.pathname === '/'
//                   ? 'text-green-400'
//                   : 'text-gray-300 hover:text-white'
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className={`text-sm font-medium transition-colors ${
//                 location.pathname === '/about'
//                   ? 'text-green-400'
//                   : 'text-gray-300 hover:text-white'
//               }`}
//             >
//               About
//             </Link>
//             <Link
//               to="/how-it-works"
//               className={`text-sm font-medium transition-colors ${
//                 location.pathname === '/how-it-works'
//                   ? 'text-green-400'
//                   : 'text-gray-300 hover:text-white'
//               }`}
//             >
//               How It Works
//             </Link>
//             <Link
//               to="/token"
//               className={`text-sm font-medium transition-colors ${
//                 location.pathname === '/token'
//                   ? 'text-green-400'
//                   : 'text-gray-300 hover:text-white'
//               }`}
//             >
//               Token
//             </Link>
//             <Link
//               to="/dashboard"
//               className={`text-sm font-medium transition-colors ${
//                 location.pathname === '/dashboard'
//                   ? 'text-green-400'
//                   : 'text-gray-300 hover:text-white'
//               }`}
//             >
//               Dashboard
//             </Link>
//             <Link
//               to="/join"
//               className={`text-sm font-medium transition-colors ${
//                 location.pathname === '/join'
//                   ? 'text-green-400'
//                   : 'text-gray-300 hover:text-white'
//               }`}
//             >
//               Join
//             </Link>

//             <button
//               onClick={isConnected ? disconnectWallet : connectWallet}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                 isConnected
//                   ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
//                   : 'bg-green-600 hover:bg-green-700 text-white animate-pulse-shadow'
//               }`}
//             >
//               {isConnected ? truncateAddress(address!) : 'Connect Wallet'}
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-300 hover:text-white focus:outline-none"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out ${
//           isOpen
//             ? 'max-h-screen opacity-100'
//             : 'max-h-0 opacity-0 invisible'
//         } overflow-hidden bg-black/95 backdrop-blur-md`}
//       >
//         <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link
//             to="/"
//             onClick={closeMenu}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${
//               location.pathname === '/'
//                 ? 'bg-green-800/50 text-white'
//                 : 'text-gray-300 hover:bg-green-900/30 hover:text-white'
//             }`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             onClick={closeMenu}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${
//               location.pathname === '/about'
//                 ? 'bg-green-800/50 text-white'
//                 : 'text-gray-300 hover:bg-green-900/30 hover:text-white'
//             }`}
//           >
//             About
//           </Link>
//           <Link
//             to="/how-it-works"
//             onClick={closeMenu}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${
//               location.pathname === '/how-it-works'
//                 ? 'bg-green-800/50 text-white'
//                 : 'text-gray-300 hover:bg-green-900/30 hover:text-white'
//             }`}
//           >
//             How It Works
//           </Link>
//           <Link
//             to="/token"
//             onClick={closeMenu}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${
//               location.pathname === '/token'
//                 ? 'bg-green-800/50 text-white'
//                 : 'text-gray-300 hover:bg-green-900/30 hover:text-white'
//             }`}
//           >
//             Token
//           </Link>
//           <Link
//             to="/dashboard"
//             onClick={closeMenu}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${
//               location.pathname === '/dashboard'
//                 ? 'bg-green-800/50 text-white'
//                 : 'text-gray-300 hover:bg-green-900/30 hover:text-white'
//             }`}
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/join"
//             onClick={closeMenu}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${
//               location.pathname === '/join'
//                 ? 'bg-green-800/50 text-white'
//                 : 'text-gray-300 hover:bg-green-900/30 hover:text-white'
//             }`}
//           >
//             Join
//           </Link>
//           <button
//             onClick={() => {
//               isConnected ? disconnectWallet() : connectWallet();
//               closeMenu();
//             }}
//             className={`w-full mt-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//               isConnected
//                 ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
//                 : 'bg-green-600 hover:bg-green-700 text-white'
//             }`}
//           >
//             {isConnected ? truncateAddress(address!) : 'Connect Wallet'}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Wallet } from "lucide-react";
import { useWallet } from "../../context/WalletContext";
import ScrollToTopLink from "./ScrollToTopLink";

import { MdFlashOn } from "react-icons/md";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { address, isConnected, connectWallet, disconnectWallet } = useWallet();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const truncateAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <ScrollToTopLink to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                {/* <Wallet size={20} className="text-white" /> */}
                {/* <Zap className="w-6 h-6 text-yellow-400" /> */}
                {/* <BoltIcon className="w-6 h-6 text-yellow-400" /> */}
                {/* <MdFlashOn className="w-6 h-6 text-yellow-400" /> */}⚡
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                Ropdy
              </span>
            </ScrollToTopLink>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ScrollToTopLink
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/"
                  ? "text-green-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </ScrollToTopLink>
            <ScrollToTopLink
              to="/about"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/about"
                  ? "text-green-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              About
            </ScrollToTopLink>
            <ScrollToTopLink
              to="/how-it-works"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/how-it-works"
                  ? "text-green-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              How It Works
            </ScrollToTopLink>
            <ScrollToTopLink
              to="/ropdy-mint"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/ropdy-mint"
                  ? "text-green-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              ROPDY Mint
            </ScrollToTopLink>
            {/* <ScrollToTopLink
              to="/token"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/token' ? 'text-green-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Token
            </ScrollToTopLink>
            <ScrollToTopLink
              to="/dashboard"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/dashboard' ? 'text-green-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Dashboard
            </ScrollToTopLink> */}
            <ScrollToTopLink
              to="/join"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/join"
                  ? "text-green-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Join
            </ScrollToTopLink>

            <a href="https://dapp.ropdy.com" target="_blank"
              onClick={isConnected ? disconnectWallet : connectWallet}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isConnected
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-green-600 hover:bg-green-700 text-white animate-pulse-shadow"
              }`}
            >
              Launch dapp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-black/95 backdrop-blur-md`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
          <ScrollToTopLink
            to="/"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/"
                ? "bg-green-800/50 text-white"
                : "text-gray-300 hover:bg-green-900/30 hover:text-white"
            }`}
          >
            Home
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/about"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/about"
                ? "bg-green-800/50 text-white"
                : "text-gray-300 hover:bg-green-900/30 hover:text-white"
            }`}
          >
            About
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/how-it-works"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/how-it-works"
                ? "bg-green-800/50 text-white"
                : "text-gray-300 hover:bg-green-900/30 hover:text-white"
            }`}
          >
            How It Works
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/ropdy-mint"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/ropdy-mint"
                ? "bg-green-800/50 text-white"
                : "text-gray-300 hover:bg-green-900/30 hover:text-white"
            }`}
          >
            ROPDY Mint
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/token"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/token"
                ? "bg-green-800/50 text-white"
                : "text-gray-300 hover:bg-green-900/30 hover:text-white"
            }`}
          >
            Token
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/dashboard"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/dashboard"
                ? "bg-green-800/50 text-white"
                : "text-gray-300 hover:bg-green-900/30 hover:text-white"
            }`}
          >
            Dashboard
          </ScrollToTopLink>
          <ScrollToTopLink
            to="/join"
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/join"
                ? "bg-green-800/50 text-white"
                : "text-gray-300 hover:bg-green-900/30 hover:text-white"
            }`}
          >
            Join
          </ScrollToTopLink>
          <a href="https://dapp.ropdy.com" target="_blank"
            onClick={() => {
              isConnected ? disconnectWallet() : connectWallet();
              closeMenu();
            }}
            className={`w-full mt-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              isConnected
                ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            Launch dapp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
