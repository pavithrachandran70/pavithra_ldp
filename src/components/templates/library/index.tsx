

import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from '@mui/material';
import BookGrid from '../../organisms/bookgrid';
import { BOOKS, type Book } from '../../../utils/constants';

const MyLibrary: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [books, setBooks] = useState<Book[]>(() => {
    // Load books from local storage or use the default BOOKS
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : BOOKS;
  });

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const toggleBookStatus = (id: number) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, status: book.status === 'reading' ? 'finished' : 'reading' } : book
      )
    );
  };

  const filteredBooks = books.filter((book) =>
    tabIndex === 0 ? book.status === 'reading' : book.status === 'finished'
  );

  // Save books to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <div>
      <Tabs value={tabIndex} onChange={handleTabChange} aria-label="Library Tabs">
        <Tab label="Currently reading" />
        <Tab label="Finished" />
      </Tabs>
      <BookGrid books={filteredBooks} onToggleStatus={toggleBookStatus} tabIndex={tabIndex} />
    </div>
  );
};

export default MyLibrary;
