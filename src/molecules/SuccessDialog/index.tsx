
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
  import TYpography from "../../atoms/Typography/index"
 import CustomButton from "../../atoms/Button/index"

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
        <TYpography variant="subtitle1" gutterBottom>
          {SUCCESS_MODAL_TEXTS.subtitle}
        </TYpography>

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
        <CustomButton variant="outlined" onClick={onClose}>
          {SUCCESS_MODAL_TEXTS.closeButton}
        </CustomButton>
        <CustomButton variant="contained" onClick={onViewCashKicks}>
          {SUCCESS_MODAL_TEXTS.viewCashKicksButton}
        </CustomButton>
      </CustomDialogActions>
    </StyledDialog>
   
  );
};

export default SuccessModal;
