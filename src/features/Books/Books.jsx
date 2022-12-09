import React from 'react';
import BookItem from './BookItem';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      comment: 'This is a comment',
      catergory: 'Economy  ',
    },
    {
      id: 2,
      title: 'Dunes',
      author: 'Frank Herbert',
      comment: 'This is a comment',
      catergory: 'Science Friction',
    },
    {
      id: 3,
      title: 'The Capital in the twenty-First Century',
      author: 'Suzanne Collins',
      comment: 'This is a comment',
      catergory: 'Science Friction',
    },
  ];

  return (
    <>
      {!books.length !== 0 && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title}
              <br />
              {book.author}
              <br />
              <button type="button">Comments</button>
              <button type="button">Remove</button>
              <button type="button">Edit</button>
            </li>
          ))}
        </ul>
      )}
      <h3 className="text"> Add Book Name! </h3>
      <BookItem />
    </>
  );
};

export default Books;
