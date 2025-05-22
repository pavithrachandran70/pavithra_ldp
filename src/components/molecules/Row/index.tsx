
import { Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '../../atoms/Typography';
import {
  RowContainer,
  DateBox,
  NameBox,
  CustomChip,
  AmountBox,
  StyledAvatar,
} from '../../../theme/style';
import {
  CaptionText,
  DateText,
  NameText,
  AmountText,
} from '../../../theme/style';

interface RowProps {
  date: string;
  name: string;
  from: string;
  status: string;
  type: 'success' | 'error' | 'normal';
  btcAmount: string;
  usdAmount: string;
}

const Row = ({ date, name, from, status, type, btcAmount, usdAmount }: RowProps) => {
  const getIcon = () => {
    if (type === 'error') {
      return (
        <StyledAvatar bgcolor="#FEEFEF" color="#D32F2F">
          <ErrorIcon fontSize="small" />
        </StyledAvatar>
      );
    }

    if (type === 'success') {
      return (
        <StyledAvatar bgcolor="#E6F4EA" color="#2E7D32">
          <CheckCircleIcon fontSize="small" />
        </StyledAvatar>
      );
    }

    return (
      <StyledAvatar bgcolor="#FFF5E5" color="#FB8C00">
        <MoreHorizIcon fontSize="small" />
      </StyledAvatar>
    );
  };

  return (
    <RowContainer>
      <DateBox>
        <CaptionText variant="caption" color="textSecondary">
          {date.split(' ')[0]}
        </CaptionText>
        <DateText variant="h6">
          {date.split(' ')[1]}
        </DateText>
      </DateBox>

      <Box display="flex" flexDirection="row" alignItems="center" flex="1">
        {getIcon()}
        <NameBox>
          <NameText variant="body1">{name}</NameText>
          <Typography variant="caption" color="textSecondary">
            From {from}
          </Typography>
        </NameBox>
        <CustomChip label={status} size="small" />
      </Box>

      <AmountBox>
        <AmountText>{btcAmount}</AmountText>
        <Typography variant="caption" color="textSecondary">
          {usdAmount}
        </Typography>
      </AmountBox>
    </RowContainer>
  );
};

export default Row;
