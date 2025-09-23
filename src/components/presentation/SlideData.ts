import { SlideData } from './SlideTemplate';
import { WelcomeSlide } from './slides/WelcomeSlide';
import { MoneyRevolutionSlide } from './slides/MoneyRevolutionSlide';
import { AboutBlockchainSlide } from './slides/AboutBlockchainSlide';
import { AboutRamesttaBlockchainSlide } from './slides/AboutRamesttaBlockchainSlide';
import { AboutRopdyDappSlide } from './slides/AboutRopdyDappSlide';
import { RopdyCircleProgramSlide } from './slides/RopdyCircleProgramSlide';
import { RopdyMintProgramSlide } from './slides/RopdyMintProgramSlide';

export const presentationSlides: SlideData[] = [
  {
    id: 'welcome',
    title: 'Welcome to ROPDY',
    subtitle: 'Decentralized Smart Contract Earnings Platform',
    component: WelcomeSlide
  },
  {
    id: 'money-revolution',
    title: 'The Money Revolution',
    subtitle: 'From Barter to Blockchain Journey',
    component: MoneyRevolutionSlide
  },
  {
    id: 'about-blockchain',
    title: 'Understanding Blockchain',
    subtitle: 'The Foundation of Decentralized Finance',
    component: AboutBlockchainSlide
  },
  {
    id: 'about-ramestta',
    title: 'Ramestta Blockchain',
    subtitle: 'High-Performance Layer 1 Solution',
    component: AboutRamesttaBlockchainSlide
  },
  {
    id: 'about-ropdy-dapp',
    title: 'ROPDY DApp',
    subtitle: 'Your Gateway to Decentralized Earning',
    component: AboutRopdyDappSlide
  },
  {
    id: 'ropdy-circle',
    title: 'ROPDY Circle Program',
    subtitle: 'Circle-Based Earning System',
    component: RopdyCircleProgramSlide
  },
  {
    id: 'ropdy-mint',
    title: 'ROPDY Mint Program',
    subtitle: 'Stake RAMA, Earn Daily Rewards',
    component: RopdyMintProgramSlide
  }
];