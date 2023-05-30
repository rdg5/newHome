import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// export const BookList = () => {
// 	const db = firebase.firestore();

//   const [books, setBooks] = useState([]);
//   const [selectedYear, setSelectedYear] = useState('');

//   useEffect(() => {
//     // Fetch all books from Firestore
//     db.collection('books').get().then((querySnapshot) => {
//       const data = querySnapshot.docs.map((doc) => doc.data()).sort((a,b) => b.year - a.year);
//       setBooks(data);
//     });
//   }, []);

//   const years = ['2023', '2022', '2021', '2020'];

//   const handleYearClick = (year) => {
// 		setSelectedYear(year);
//   };

//   const filteredBooks = selectedYear ? books.filter((book) => book.year === selectedYear) : books;

//   return (
//     <div className=' flex flex-col items-center justify-center h-screen pr-7' >
// 			<h1 className=' mb-4 text-4xl font-extrabold leading-none  text-gray-900 md:text-3xl lg:text-3xl dark:text-white pt-10'>Books that I have read in the last years</h1>
//     	<div className='flex'>
// 			<div className='flex flex-col items-stretch pt-7 space-y-3'>
//         {years.map((year) => (
//           <button className='btn-year'key={year} onClick={() => handleYearClick(year)}>
//             {year}
//           </button>
//         ))}
// 				<button className='btn-reset'key={'reset'} onClick={() => {setSelectedYear('')}}>Reset</button>
// 			</div>
// 			<div className='flex-row  overflow-y-auto pl-7 pt-7'>
//       <ul className='max-w-md space-y-1 j
//  text-orange-300 list-none list-inside object-scale-down'>
//         {filteredBooks.map((book) => (
//           <li className='text-xs' key={book.title}>
//             {book.author} - {book.title}
//           </li>
//         ))}
//       </ul>
// 			</div>
// 			</div>
//     </div>
//   );
// 	}

export const BookList = () => {
  const db = firebase.firestore();

  const [books, setBooks] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    // Fetch all books from Firestore
    db.collection('books').get().then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data()).sort((a, b) => b.year - a.year);
      setBooks(data);
    });
  }, []);

  const years = ['2023', '2022', '2021', '2020'];

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const filteredBooks = selectedYear ? books.filter((book) => book.year === selectedYear) : books;

  return (
    <div className="flex flex-col items-center justify-center h-screen pr-7">
      <h1 className="mb-4 text-4xl font-bold leading-none text-gray-900 md:text-3xl dark:text-white pt-10">
        Books that I have read in the last years
      </h1>
      <div className="flex">
        <div className="flex flex-col items-stretch pt-7 space-y-3">
          {years.map((year) => (
            <button className="btn-year" key={year} onClick={() => handleYearClick(year)}>
              {year}
            </button>
          ))}
          <button className="btn-reset" key="reset" onClick={() => setSelectedYear('')}>
            Reset
          </button>
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

