import React from 'react';
import { Card, CardContent,CardMedia,Box } from '@mui/material';
import BookButton from '../../atoms/Button';
import CustomTypography from '../../atoms/Typograpghy';
import clock from "../../../assets/books/clock.svg";
import Contact from "../../../assets/books/contact.svg";

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

      <img src={Contact} alt="clock" width={15} height={15} />
<CustomTypography variant="body2">{time}</CustomTypography>
</Box>

<Box display="flex" alignItems="center" gap={'5px'}>
 <img src={Contact} alt="Contact Icon" width={15} height={15} />

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





