
import React from 'react';
import { CardContent, Typography, Box } from '@mui/material';
import * as Styled from '../SumaryCard/index.styles'

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
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0003 18.8334C14.5837 18.8334 18.3337 15.0834 18.3337 10.5001C18.3337 5.91675 14.5837 2.16675 10.0003 2.16675C5.41699 2.16675 1.66699 5.91675 1.66699 10.5001C1.66699 15.0834 5.41699 18.8334 10.0003 18.8334Z" stroke="#727080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.99805 13.8333L9.99805 9.66659" stroke="#727080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.0029 7.16675L9.99544 7.16675" stroke="#727080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Box>
        </Styled.SummaryHeader>

        <Styled.InfoContainer>
          <Styled.Row>
            <Typography variant="body1">Term:</Typography>
            <Typography variant="body1" align="right">{term}</Typography>
          </Styled.Row>

          <Styled.Row>
            <Typography variant="body1">Selected Contracts:</Typography>
            <Typography variant="body1" align="right">{selectedContracts}</Typography>
          </Styled.Row>

          <Styled.Row>
            <Typography variant="body1">Pay Back Amount:</Typography>
            <Typography variant="body1" align="right">{payBackAmount}</Typography>
          </Styled.Row>

          <Styled.Row>
            <Typography variant="body1">Rate:</Typography>
            <Typography variant="body1" align="right">{rate}</Typography>
          </Styled.Row>
        </Styled.InfoContainer>

        <Styled.StyledDivider />

        <Box mt={2}>
          <Typography variant="h6" fontWeight="bold">
            Total Payout:{' '}
            <Styled.TotalPayout>{totalPayout}</Styled.TotalPayout>
          </Typography>
        </Box>
      </CardContent>
    </Styled.StyledCard>
  );
};

export default SummaryCard;
