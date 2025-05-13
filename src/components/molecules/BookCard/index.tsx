import React from 'react';
import { Card, CardContent,CardMedia,Box } from '@mui/material';
import BookButton from '../../atoms/Button';
import CustomTypography from '../../atoms/Typograpghy';


interface BookCardProps {
  id: number;
  title: string;
  author: string;
  time: string;
  image:string;
  onActionClick: (id: number) => void;
  actionLabel: string;
}

const BookCard: React.FC<BookCardProps> = ({ id, title, author, time,image, onActionClick, actionLabel }) => (
 
   <Card sx={{ minWidth: 275, m: 2 }}>
      <CardMedia
      component="img"
      height="200" // You can adjust the height based on your design
      image={image}
      alt={title}
    />
    <CardContent>
      
      <CustomTypography variant="h6">{title}</CustomTypography>


      <CustomTypography  variant="subtitle1" color='#6D787E'>{author}</CustomTypography>


<Box display={'flex'} gap={'40px'} marginTop={'15px'}>

      <Box display="flex" alignItems="center" gap={'4px'} >

      <svg width="15" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.99935 17.3332C4.39685 17.3332 0.666016 13.6023 0.666016 8.99984C0.666016 4.39734 4.39685 0.666504 8.99935 0.666504C13.6018 0.666504 17.3327 4.39734 17.3327 8.99984C17.3327 13.6023 13.6018 17.3332 8.99935 17.3332ZM8.99935 15.6665C10.7675 15.6665 12.4632 14.9641 13.7134 13.7139C14.9636 12.4636 15.666 10.7679 15.666 8.99984C15.666 7.23173 14.9636 5.53604 13.7134 4.28579C12.4632 3.03555 10.7675 2.33317 8.99935 2.33317C7.23124 2.33317 5.53555 3.03555 4.2853 4.28579C3.03506 5.53604 2.33268 7.23173 2.33268 8.99984C2.33268 10.7679 3.03506 12.4636 4.2853 13.7139C5.53555 14.9641 7.23124 15.6665 8.99935 15.6665ZM9.83268 8.99984H13.166V10.6665H8.16602V4.83317H9.83268V8.99984Z" fill="#6D787E"/>
</svg>
<CustomTypography variant="body2">{time}</CustomTypography>
</Box>

<Box display="flex" alignItems="center" gap={'5px'}>

  <svg width="11" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6673 18.3335H12.0007V16.6668C12.0006 16.0038 11.7373 15.3679 11.2684 14.8991C10.7996 14.4302 10.1637 14.1668 9.50065 14.1668H4.50065C3.83761 14.1668 3.20172 14.4302 2.73288 14.8991C2.26404 15.3679 2.00065 16.0038 2.00065 16.6668V18.3335H0.333984V16.6668C0.333984 15.5618 0.772971 14.502 1.55437 13.7206C2.33577 12.9391 3.39558 12.5002 4.50065 12.5002H9.50065C10.6057 12.5002 11.6655 12.9391 12.4469 13.7206C13.2283 14.502 13.6673 15.5618 13.6673 16.6668V18.3335ZM7.00065 10.8335C6.34404 10.8335 5.69386 10.7042 5.08723 10.4529C4.48061 10.2016 3.92941 9.83332 3.46512 9.36903C3.00082 8.90474 2.63253 8.35354 2.38125 7.74691C2.12998 7.14029 2.00065 6.49011 2.00065 5.8335C2.00065 5.17689 2.12998 4.52671 2.38125 3.92008C2.63253 3.31345 3.00082 2.76226 3.46512 2.29796C3.92941 1.83367 4.48061 1.46537 5.08723 1.2141C5.69386 0.962825 6.34404 0.833496 7.00065 0.833496C8.32673 0.833496 9.5985 1.36028 10.5362 2.29796C11.4739 3.23564 12.0007 4.50741 12.0007 5.8335C12.0007 7.15958 11.4739 8.43135 10.5362 9.36903C9.5985 10.3067 8.32673 10.8335 7.00065 10.8335ZM7.00065 9.16683C7.88471 9.16683 8.73255 8.81564 9.35767 8.19052C9.98279 7.5654 10.334 6.71755 10.334 5.8335C10.334 4.94944 9.98279 4.10159 9.35767 3.47647C8.73255 2.85135 7.88471 2.50016 7.00065 2.50016C6.1166 2.50016 5.26875 2.85135 4.64363 3.47647C4.01851 4.10159 3.66732 4.94944 3.66732 5.8335C3.66732 6.71755 4.01851 7.5654 4.64363 8.19052C5.26875 8.81564 6.1166 9.16683 7.00065 9.16683Z" fill="#6D787E"/>
</svg>

<CustomTypography variant="body2">1.9k reads</CustomTypography>

</Box>
</Box>
<Box>

</Box>

      <BookButton label={actionLabel} onClick={() => onActionClick(id)} />
  </CardContent>
   </Card> 
 
);

export default BookCard;





