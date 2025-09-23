import { SlideData } from './SlideTemplate';
import { WelcomeSlide } from './slides/WelcomeSlide';
import { MoneyRevolutionSlide } from './slides/MoneyRevolutionSlide';
import { AboutBlockchainSlide } from './slides/AboutBlockchainSlide';
import { AboutRamesttaBlockchainSlide } from './slides/AboutRamesttaBlockchainSlide';
import { AboutRopdyDappSlide } from './slides/AboutRopdyDappSlide'; // Existing

// ROPDY Circle Program Slides (Expanded)
import { RopdyCircleIntroSlide } from './slides/RopdyCircleProgramSlide'; // Renamed from RopdyCircleProgramSlide
import { RopdyCircleHowItWorksSlide } from './slides/RopdyCircleHowItWorksSlide';
import { RopdyCircleCP1CP2Slide } from './slides/RopdyCircleCP1CP2Slide';
import { RopdyCircleMODsSlide } from './slides/RopdyCircleMODsSlide';
import { RopdyCirclePackagesSlide } from './slides/RopdyCirclePackagesSlide';
import { RopdyCircleAutoReactivationSlide } from './slides/RopdyCircleAutoReactivationSlide';

// ROPDY Mint Program Slides (Expanded)
import { RopdyMintIntroSlide } from './slides/RopdyMintProgramSlide'; // Renamed from RopdyMintProgramSlide
import { RopdyMintDelegationSlide } from './slides/RopdyMintDelegationSlide';
import { RopdyMintTiersROISlide } from './slides/RopdyMintTiersROISlide';
import { RopdyMintAutoTopUpSlide } from './slides/RopdyMintAutoTopUpSlide';
import { RopdyMintCommunityEngineSlide } from './slides/RopdyMintCommunityEngineSlide';
import { RopdyMintLeadershipRewardsSlide } from './slides/RopdyMintLeadershipRewardsSlide';
import { RopdyMintRulesProtectionsSlide } from './slides/RopdyMintRulesProtectionsSlide';
import { RopdyCircleIntroSlide } from './slides/RopdyCircleProgramSlide'; // Renamed from RopdyCircleProgramSlide
import { RopdyCircleHowItWorksSlide } from './slides/RopdyCircleHowItWorksSlide';
import { RopdyCircleCP1CP2Slide } from './slides/RopdyCircleCP1CP2Slide';
import { RopdyCircleMODsSlide } from './slides/RopdyCircleMODsSlide';
import { RopdyCirclePackagesSlide } from './slides/RopdyCirclePackagesSlide';
import { RopdyCircleAutoReactivationSlide } from './slides/RopdyCircleAutoReactivationSlide';

// ROPDY Mint Program Slides (Expanded)
import { RopdyMintIntroSlide } from './slides/RopdyMintProgramSlide'; // Renamed from RopdyMintProgramSlide
import { RopdyMintDelegationSlide } from './slides/RopdyMintDelegationSlide';
import { RopdyMintTiersROISlide } from './slides/RopdyMintTiersROISlide';
import { RopdyMintAutoTopUpSlide } from './slides/RopdyMintAutoTopUpSlide';
import { RopdyMintCommunityEngineSlide } from './slides/RopdyMintCommunityEngineSlide';
import { RopdyMintLeadershipRewardsSlide } from './slides/RopdyMintLeadershipRewardsSlide';
import { RopdyMintRulesProtectionsSlide } from './slides/RopdyMintRulesProtectionsSlide';

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
    id: 'ropdy-circle-intro',
    title: 'ROPDY Circle: Introduction',
    subtitle: '100% Smart-Contract Powered Earning System',
    component: RopdyCircleIntroSlide
  },
  {
    id: 'ropdy-circle-how-it-works',
    title: 'ROPDY Circle: How It Works',
    subtitle: 'Activate, Earn, and Auto-Reactivate',
    component: RopdyCircleHowItWorksSlide
  },
  {
    id: 'ropdy-circle-cp1-cp2',
    title: 'ROPDY Circle: CP1 & CP2',
    subtitle: 'Sponsor Bonus & Global Bonus Distribution',
    component: RopdyCircleCP1CP2Slide
  },
  {
    id: 'ropdy-circle-mods',
    title: 'ROPDY Circle: MOD Algorithms',
    subtitle: 'The 4 Modes of Smart Earning',
    component: RopdyCircleMODsSlide
  },
  {
    id: 'ropdy-circle-packages',
    title: 'ROPDY Circle: Package Options',
    subtitle: 'Choose Your Entry Level',
    component: RopdyCirclePackagesSlide
  },
  {
    id: 'ropdy-circle-auto-react',
    title: 'ROPDY Circle: Auto Reactivation',
    subtitle: 'Infinite Earning Cycles',
    component: RopdyCircleAutoReactivationSlide
  },
  {
    id: 'ropdy-mint-intro',
    title: 'ROPDY Mint: Introduction',
    subtitle: 'Stake RAMA, Earn Daily USD-Pegged Rewards',
    component: RopdyMintIntroSlide
  },
  {
    id: 'ropdy-mint-delegation',
    title: 'ROPDY Mint: Delegation-Backed',
    subtitle: 'Yield from Ramestta Node Delegation',
    component: RopdyMintDelegationSlide
  },
  {
    id: 'ropdy-mint-tiers-roi',
    title: 'ROPDY Mint: Tiers & Daily ROI',
    subtitle: 'Higher ROI for Longer Horizons',
    component: RopdyMintTiersROISlide
  },
  {
    id: 'ropdy-mint-auto-top-up',
    title: 'ROPDY Mint: Auto Top-Up System',
    subtitle: 'Never Miss Earnings Due to Cap Limits',
    component: RopdyMintAutoTopUpSlide
  },
  {
    id: 'ropdy-mint-community-engine',
    title: 'ROPDY Mint: Community Engine',
    subtitle: 'Spot Commission & Daily Growth',
    component: RopdyMintCommunityEngineSlide
  },
  {
    id: 'ropdy-circle-intro',
    title: 'ROPDY Circle: Introduction',
    subtitle: '100% Smart-Contract Powered Earning System',
    component: RopdyCircleIntroSlide
  },
  {
    id: 'ropdy-circle-how-it-works',
    title: 'ROPDY Circle: How It Works',
    subtitle: 'Activate, Earn, and Auto-Reactivate',
    component: RopdyCircleHowItWorksSlide
  },
  {
    id: 'ropdy-circle-cp1-cp2',
    title: 'ROPDY Circle: CP1 & CP2',
    subtitle: 'Sponsor Bonus & Global Bonus Distribution',
    component: RopdyCircleCP1CP2Slide
  },
  {
    id: 'ropdy-circle-mods',
    title: 'ROPDY Circle: MOD Algorithms',
    subtitle: 'The 4 Modes of Smart Earning',
    component: RopdyCircleMODsSlide
  },
  {
    id: 'ropdy-circle-packages',
    title: 'ROPDY Circle: Package Options',
    subtitle: 'Choose Your Entry Level',
    component: RopdyCirclePackagesSlide
  },
  {
    id: 'ropdy-circle-auto-react',
    title: 'ROPDY Circle: Auto Reactivation',
    subtitle: 'Infinite Earning Cycles',
    component: RopdyCircleAutoReactivationSlide
  },
  {
    id: 'ropdy-mint-intro',
    title: 'ROPDY Mint: Introduction',
    subtitle: 'Stake RAMA, Earn Daily USD-Pegged Rewards',
    component: RopdyMintIntroSlide
  },
  {
    id: 'ropdy-mint-delegation',
    title: 'ROPDY Mint: Delegation-Backed',
    subtitle: 'Yield from Ramestta Node Delegation',
    component: RopdyMintDelegationSlide
  },
  {
    id: 'ropdy-mint-tiers-roi',
    title: 'ROPDY Mint: Tiers & Daily ROI',
    subtitle: 'Higher ROI for Longer Horizons',
    component: RopdyMintTiersROISlide
  },
  {
    id: 'ropdy-mint-auto-top-up',
    title: 'ROPDY Mint: Auto Top-Up System',
    subtitle: 'Never Miss Earnings Due to Cap Limits',
    component: RopdyMintAutoTopUpSlide
  },
  {
    id: 'ropdy-mint-community-engine',
    title: 'ROPDY Mint: Community Engine',
    subtitle: 'Spot Commission & Daily Growth',
    component: RopdyMintCommunityEngineSlide
  },
  {
    id: 'ropdy-mint-leadership-rewards',
    title: 'ROPDY Mint: Leadership Rewards',
    subtitle: 'Global Turnover Sharing & Booster Program',
    component: RopdyMintLeadershipRewardsSlide
  },
  {
    id: 'ropdy-mint-rules-protections',
    title: 'ROPDY Mint: Rules & Protections',
    subtitle: '5% Fee, 3x Cap, Mandatory Top-Up',
    component: RopdyMintRulesProtectionsSlide
  }
];