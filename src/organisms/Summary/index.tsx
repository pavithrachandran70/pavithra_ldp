
import React from 'react';
import SummaryCard from '../../molecules/SumaryCard';
import { StyledBox, StyledButton } from '../Summary/index.styles';

interface SummarySectionProps {
  onSubmit: () => void;
}

const SummarySection: React.FC<SummarySectionProps> = ({ onSubmit }) => {
  return (
    <StyledBox>
      <SummaryCard
        term="12 months"
        selectedContracts={2}
        payBackAmount="$170,454.55"
        rate="12.0%"
        totalPayout="$150,000.00"
      />

      <StyledButton
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Submit Your Credit
      </StyledButton>
    </StyledBox>
  );
};

export default SummarySection;

