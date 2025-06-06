
import React from 'react';
import sucess from "../../assets/sucess.png"
import { SUCCESS_MODAL_TEXTS } from '../../utils/constants';
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
      <DialogTitle>{SUCCESS_MODAL_TEXTS.dialogTitle}</DialogTitle>
      <DialogContent>
        <TypographyAtom variant="subtitle1" gutterBottom>
          {SUCCESS_MODAL_TEXTS.subtitle}
        </TypographyAtom>

        <CenteredImageBox>
          <img src={sucess} alt="Success" width="100" />
        </CenteredImageBox>

        <CenteredText variant="h6">
          {SUCCESS_MODAL_TEXTS.mainHeading}
        </CenteredText>
        <CenteredText variant="body2">
          {SUCCESS_MODAL_TEXTS.description}
        </CenteredText>
      </DialogContent>

      <CustomDialogActions>
        <Button variant="outlined" onClick={onClose}>
          {SUCCESS_MODAL_TEXTS.closeButton}
        </Button>
        <Button variant="contained" onClick={onViewCashKicks}>
          {SUCCESS_MODAL_TEXTS.viewCashKicksButton}
        </Button>
      </CustomDialogActions>
    </StyledDialog>
   
  );
};

export default SuccessModal;
