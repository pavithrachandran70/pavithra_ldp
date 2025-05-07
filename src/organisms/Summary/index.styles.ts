
import styled from 'styled-components';
import { Box, Button } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  background-color: #121212;
  padding: 24px;
  border-radius: 16px;
`;

export const StyledButton = styled(Button)`
  text-transform: none;
  font-weight: bold;
  margin-top: 16px;
`;
