import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TokenPage from './pages/TokenPage';
import DashboardPage from './pages/DashboardPage';
import HowItWorksPage from './pages/HowItWorksPage';
import JoinRopdyPage from './pages/JoinRopdyPage';
import { WalletProvider } from './context/WalletContext';
import './App.css';

const App: React.FC = () => {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-black text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/token" element={<TokenPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/join" element={<JoinRopdyPage />} />
              {/* Add a catch-all route for 404 pages */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </WalletProvider>
  );
};

export default App;