import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferralModal from './components/ReferralModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <HeroSection onReferNowClick={handleOpenModal} />
      <ReferralModal open={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default App;
