
import React from 'react';
import { CardContent, Typography, Box } from '@mui/material';
import * as Styled from '../SumaryCard/index.styles'
import ifoicon from '../../assets/icon.svg';
import TYpography from '../../atoms/Typography';

interface SummaryCardProps {
  term: string;
  selectedContracts: number;
  payBackAmount: string;
  rate: string;
  totalPayout: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  term,
  selectedContracts,
  payBackAmount,
  rate,
  totalPayout,
}) => {
  return (
    <Styled.StyledCard>
      <CardContent>
        <Styled.SummaryHeader variant="h5" gutterBottom>
          <span>Summary</span>
          <Box mt={0.5}>
            <img src={ifoicon} alt="IFO Icon" width="24" height="24" />
          </Box>
        </Styled.SummaryHeader>

        <Styled.InfoContainer>
          <Styled.Row>
            <TYpography variant="body1">Term:</TYpography>
            <TYpography variant="body1" align="right">{term}</TYpography>
          </Styled.Row>

          <Styled.Row>
            <TYpography variant="body1">Selected Contracts:</TYpography>
            <TYpography variant="body1" align="right">{selectedContracts}</TYpography>
          </Styled.Row>

          <Styled.Row>
            <TYpography variant="body1">Pay Back Amount:</TYpography>
            <TYpography variant="body1" align="right">{payBackAmount}</TYpography>
          </Styled.Row>

          <Styled.Row>
            <TYpography variant="body1">Rate:</TYpography>
            <TYpography variant="body1" align="right">{rate}</TYpography>
          </Styled.Row>
        </Styled.InfoContainer>

        <Styled.StyledDivider />

        <Box mt={2}>
          <TYpography variant="h6" fontWeight="bold">
            Total Payout:{' '}
            <Styled.TotalPayout>{totalPayout}</Styled.TotalPayout>
          </TYpography>
        </Box>
      </CardContent>
    </Styled.StyledCard>
  );
};

export default SummaryCard;
