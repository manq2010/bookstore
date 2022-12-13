import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { LoadBooks } from '../../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadBooks);
  }, []);

  return (
    <>
      {/* {!books.length !== 0 && ( */}
      <ul>
        { books && books.map((book) => (
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
      {/* )} */}
      <h3 className="text"> Add Book Name! </h3>
      <BookItem />
    </>
  );
};

export default Books;
