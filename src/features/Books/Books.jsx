import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { LoadBooks, RemoveBook } from '../../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.book.books[0]);
  console.log(books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadBooks());
  }, []);


  return (
    <>
      <ul>
      {books
          && books.map((book) => (
            <li key={book.item_id}>
              {book.title}
              <br />
              {book.author}
              <br />
              {book.category}
              <br />
              <button type="button">Comments</button>
              <button
                type="button"
                onClick={() => dispatch(RemoveBook(book.item_id))}
              >
                Remove
              </button>
              <button type="button">Edit</button>
            </li>
          ))}
      </ul>
      <h3 className="text"> Add Book Name! </h3>
      <BookItem />
    </>
  );
};

export default Books;
