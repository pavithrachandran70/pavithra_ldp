
import React from 'react';
import { Grid } from '@mui/material';

import BookCard from '../../molecules/BookCard';



interface Book {
  id: number;
  title: string;
  author: string;
  time: string;
  image:string;
  status: 'reading' | 'finished';
}

interface BookGridProps {
  books: Book[];
  onToggleStatus: (id: number) => void;
  tabIndex: number;
}

const BookGrid: React.FC<BookGridProps> = ({ books, onToggleStatus, tabIndex }) => (
  <Grid container spacing={2}>
    {books.map((book) => (
       <Grid item xs={12} sm={6} md={4}  key={book.id}>   
        <BookCard
          id={book.id}
          title={book.title}
          author={book.author}
          time={book.time}
          image={book.image} 
          onActionClick={onToggleStatus}
          actionLabel={tabIndex === 0 ? 'Finished' : 'Read Again'}
        />
      </Grid>
    ))}
  </Grid>
);

export default BookGrid;


