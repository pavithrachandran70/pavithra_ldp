
import React, { useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { StyledDialog, StyledTextField, customTheme } from './index.styles';
import TYpography from "../../atoms/Typography/index"
import CustomButton from "../../atoms/Button/index"

interface NameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitName: (name: string) => void;
}

const NameModal: React.FC<NameModalProps> = ({ isOpen, onClose, onSubmitName }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleCreate = () => {
    if (inputValue.trim() === '') {
      setError(true);
      return;
    }

    onSubmitName(inputValue);
    setInputValue('');
    setError(false);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <StyledDialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Name your cash kick</DialogTitle>
        <DialogContent>
          <TYpography variant="body2" gutterBottom mb={2}>
            Add a name to identify cash kick
          </TYpography>
          <TYpography variant="body2" gutterBottom>
            Cash Kick Name
          </TYpography>
          <StyledTextField
            fullWidth
            placeholder="Enter name"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            margin="dense"
            error={error}
            helperText={error ? 'Please Enter a name' : ''}
          />
        </DialogContent>
        <DialogActions>
          <CustomButton onClick={onClose} color="primary">Cancel</CustomButton>
          <CustomButton onClick={handleCreate} variant="contained" color="primary">Create</CustomButton>
        </DialogActions>
      </StyledDialog>
    </ThemeProvider>
  );
};

export default NameModal;

