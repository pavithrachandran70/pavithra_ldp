import React from 'react';
import Button from '../../atoms/Button';
import { Book } from '../../../types/Book';
import { ListItem,ButtonGroup } from '../../../theme/styles';

interface BookItemProps {
  book: Book;
  onEdit: () => void;
  onDelete: () => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onEdit, onDelete }) => {
  return (
  
  <ListItem>
    <span>{book.title} by {book.author}</span>
    <ButtonGroup>
      <Button onClick={onEdit} className="edit">Edit</Button>
      <Button onClick={onDelete} className="delete">Delete</Button>
    </ButtonGroup>
  </ListItem>

  );
};

export default BookItem;
