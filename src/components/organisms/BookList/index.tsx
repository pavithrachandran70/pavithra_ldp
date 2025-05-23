import React, { useEffect, useState } from 'react';
import api from '../../../api/api';
import BookForm from '../../molecules/BookForm'
import BookItem from '../../molecules/BookItem';
import { Book } from '../../../types/Book';
import { List } from '../../../theme/styles';


const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState<Omit<Book, 'id'>>({ title: '', author: '' });
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    api.get('/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  };

  const handleAddBook = () => {
    if (!newBook.title || !newBook.author) return;
    api.post('/books', newBook)
      .then(() => {
        fetchBooks();
        setNewBook({ title: '', author: '' });
      })
      .catch(error => console.error('Error adding book:', error));
  };

  const handleDeleteBook = (id: number) => {
    api.delete(`/books/${id}`)
      .then(() => fetchBooks())
      .catch(error => console.error('Error deleting book:', error));
  };

  const handleUpdateBook = () => {
    if (!editingBook) return;
    api.put(`/books/${editingBook.id}`, editingBook)
      .then(() => {
        setBooks(prev =>
          [editingBook, ...prev.filter(book => book.id !== editingBook.id)]
        );
        setEditingBook(null);
      })
      .catch(error => console.error('Error updating book:', error));
  };

  return (
          <div>
      <h1>Books</h1>

      <h3>{editingBook ? 'Edit Book' : 'Add Book'}</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
      <BookForm
        book={editingBook || newBook}
        onChange={(field, value) => {
          if (editingBook) {
            setEditingBook({ ...editingBook, [field]: value });
          } else {
            setNewBook({ ...newBook, [field]: value });
          }
        }}
        onSubmit={editingBook ? handleUpdateBook : handleAddBook}
        buttonText={editingBook ? 'Update' : 'Add'}
      />
      {editingBook && <button onClick={() => setEditingBook(null)}>Cancel</button>}
      </div>
  
       <List>
        {books.map(book => (
          <BookItem
            key={book.id}
            book={book}
            onEdit={() => setEditingBook(book)}
            onDelete={() => handleDeleteBook(book.id)}
          />
        ))}
      </List>
    </div>
  );
};

export default BookList;



