	import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export const BookList = () => {
	const db = firebase.firestore();

  const [books, setBooks] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    // Fetch all books from Firestore
    db.collection('books').get().then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data()).sort((a,b) => b.year - a.year);
      setBooks(data);
    });
  }, []);

  const years = ['2023', '2022', '2021', '2020'];

  const handleYearClick = (year) => {
		setSelectedYear(year);
  };

  const filteredBooks = selectedYear ? books.filter((book) => book.year === selectedYear) : books;

  return (
    <div>
      <ul>
        {years.map((year) => (
          <li key={year} onClick={() => handleYearClick(year)}>
            {year}
          </li>
        ))}
				<li key={'nothing'} onClick={() => {setSelectedYear('')}}>Reset</li>
      </ul>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.title}>
            {book.author} - {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
	}
