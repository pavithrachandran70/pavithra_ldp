import React from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { Book } from '../../../types/Book';

interface BookFormProps {
  book: Omit<Book, 'id'>;
  onChange: (field: keyof Book, value: string) => void;
  onSubmit: () => void;
  buttonText: string;
}

const BookForm: React.FC<BookFormProps> = ({ book, onChange, onSubmit, buttonText }) => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Title"
        value={book.title}
        onChange={(e) => onChange('title', e.target.value)}
      />
      <Input
        type="text"
        placeholder="Author"
        value={book.author}
        onChange={(e) => onChange('author', e.target.value)}
      />
      <Button onClick={onSubmit}>{buttonText}</Button>
    </div>
  );
};

export default BookForm;
