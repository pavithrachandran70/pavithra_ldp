
import React from 'react';
import { CardContent, Typography, Box } from '@mui/material';
import * as Styled from '../SumaryCard/index.styles'
import ifoicon from '../../assets/icon.svg';
import TypographyAtom from '../../atoms/Typography';

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
            <TypographyAtom variant="body1">Term:</TypographyAtom>
            <TypographyAtom variant="body1" align="right">{term}</TypographyAtom>
          </Styled.Row>

          <Styled.Row>
            <TypographyAtom variant="body1">Selected Contracts:</TypographyAtom>
            <TypographyAtom variant="body1" align="right">{selectedContracts}</TypographyAtom>
          </Styled.Row>

          <Styled.Row>
            <TypographyAtom variant="body1">Pay Back Amount:</TypographyAtom>
            <TypographyAtom variant="body1" align="right">{payBackAmount}</TypographyAtom>
          </Styled.Row>

          <Styled.Row>
            <TypographyAtom variant="body1">Rate:</TypographyAtom>
            <TypographyAtom variant="body1" align="right">{rate}</TypographyAtom>
          </Styled.Row>
        </Styled.InfoContainer>

        <Styled.StyledDivider />

        <Box mt={2}>
          <TypographyAtom variant="h6" fontWeight="bold">
            Total Payout:{' '}
            <Styled.TotalPayout>{totalPayout}</Styled.TotalPayout>
          </TypographyAtom>
        </Box>
      </CardContent>
    </Styled.StyledCard>
  );
};

export default SummaryCard;
