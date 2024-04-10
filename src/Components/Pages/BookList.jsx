import React, { useState, useEffect } from 'react';
import { YearButton } from '../Buttons/YearButton';
import { ResetButton } from '../Buttons/ResetButton';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export const BookList = () => {
  const db = firebase.firestore();

  const [books, setBooks] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const queriedBooks = await db.collection('books').get();
        const data = queriedBooks.docs.map((book) => book.data()).sort((a, b) => b.year - a.year);
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [db]);

  const years = ['2024', '2023', '2022', '2021', '2020'];

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const filteredBooks = selectedYear ? books.filter((book) => book.year === selectedYear) : books;

  return (
    <div className="flex flex-col items-center justify-center h-5/6 pr-7">
      <h1 className="mb-4 text-4xl font-bold leading-none text-gray-900 md:text-3xl dark:text-white pt-10">
        Books that I have read in the last years
      </h1>
      <div className="flex">
        <div className="flex flex-col justify-start items-stretch pt-7 space-y-3">
          {years.map((year) => (
            <YearButton key={year} year={year} onClick={handleYearClick} selected={selectedYear === year} />
          ))}
          <ResetButton onClick={() => setSelectedYear('')} />
        </div>
        <div className="flex flex-col overflow-y-auto pt-7 pl-7">
          <ul className="max-w-md space-y-1 text-orange-300 list-none list-inside">
            {filteredBooks.map((book) => (
              <li className="text-xs" key={book.title}>
                {book.author} - {book.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};