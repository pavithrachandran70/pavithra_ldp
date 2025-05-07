
import React from 'react';
import sucess from "../../assets/sucess.png"
import {

  DialogTitle,
  DialogContent,


  Button,
  
 
} from '@mui/material';
import { StyledDialog,  CenteredImageBox,
  CenteredText,
  CustomDialogActions, } from './index.styles';
  import TypographyAtom from "../../atoms/Typography/index"

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewCashKicks: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, onViewCashKicks }) => {
  return (
    <StyledDialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Cash kick launched successfully!</DialogTitle>
      <DialogContent>
        <TypographyAtom variant="subtitle1" gutterBottom>
          We are reviewing your cash kick
        </TypographyAtom>

        <CenteredImageBox>
          <img src={sucess} alt="Success" width="100" />
        </CenteredImageBox>

        <CenteredText variant="h6">Your cash kick is under review</CenteredText>
        <CenteredText variant="body2" >
          It will remain in a pending state until we review it internally.
          This can take up to 5 minutes or a couple of hours. Once reviewed,
          the cash will be transferred to your account and you'll be notified.
        </CenteredText>
      </DialogContent>

      <CustomDialogActions>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        <Button variant="contained" onClick={onViewCashKicks}>
          View Cash Kicks
        </Button>
      </CustomDialogActions>
    </StyledDialog>
   
  );
};

export default SuccessModal;
