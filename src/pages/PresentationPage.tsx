import React, { useEffect } from 'react';
import { PresentationLayout } from '../components/presentation/PresentationLayout';

const PresentationPage: React.FC = () => {
  useEffect(() => {
    document.title = 'ROPDY Presentation | Decentralized Smart Contract Earnings Platform';
  }, []);

  return <PresentationLayout />;
};

export default PresentationPage;