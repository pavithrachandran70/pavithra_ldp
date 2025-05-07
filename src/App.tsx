
import React, { useState } from 'react';
import SummarySection from './organisms/Summary';
import { Container } from '@mui/material';
import NameModal from './molecules/Dialog/index';
import SuccessModal from './molecules/SuccessDialog';

const App: React.FC = () => {
  const [isNameModalOpen, setNameModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const handleSubmitCredit = () => {
    setNameModalOpen(true);
  };

  const handleNameSubmit = (name: string) => {
    console.log('Submitted name:', name);
    setNameModalOpen(false);
    setSuccessModalOpen(true);
  };

  const handleViewCashKicks = () => {
    console.log('Navigating to cash kicks page...');
    setSuccessModalOpen(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <SummarySection onSubmit={handleSubmitCredit} />
      <NameModal
        isOpen={isNameModalOpen}
        onClose={() => setNameModalOpen(false)}
        onSubmitName={handleNameSubmit}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        onViewCashKicks={handleViewCashKicks}
      />
    </Container>
  );
};















export default App;
