import styled from 'styled-components';
import { Card, Box, Typography, Divider } from '@mui/material';

export const StyledCard = styled(Card)`
 && {
    background-color: #262529;
    color: white;
    border-radius: 16px;
    padding: 16px;
  }

`;

export const SummaryHeader = styled(Typography)`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Row = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledDivider = styled(Divider)`
  background-color: #444;
  margin: 24px 0;
`;

export const TotalPayout = styled('span')`
  color: #7a5af8;
`;
