import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { AddBook, LoadBooks, RemoveBook } from '../../redux/books/books';

const AddBookHeader = styled.h2`
  font-family: "Montserrat",sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -.18px;
  color: #5b5c5c;;
  text-transform: uppercase;
}
`;

const FormSection = styled.section`
  border-top: 2px solid #5b5c5c;
`;

const BookItem = () => {
  const valueInitialState = {
    title: '',
    author: '',
    category: '',
  };

  const [values, setValues] = useState(valueInitialState);
  const [submitted, setSubmitted] = useState(false);

  const books = useSelector((state) => state.book.books[0]);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(RemoveBook(id));
    dispatch(LoadBooks());
  };

  useEffect(() => {
    dispatch(LoadBooks());
  }, [values, submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmitAnother = () => {
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, category } = values;
    if (title && author) {
      const bookArray = {
        title,
        author,
        id: uuidv4(),
        category: category || 'Action',
      };
      dispatch(AddBook(bookArray));
      dispatch(LoadBooks());
      setSubmitted(true);
      setValues('');
    }
  };

  return (
    <div>
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
                onClick={() => handleRemove(book.item_id)}
              >
                Remove
              </button>
              <button type="button">Edit</button>
            </li>
          ))}
      <FormSection>

        <AddBookHeader className="text"> Add New book </AddBookHeader>

        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => handleSubmitAnother()}
            >
              Add Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={values.title || ''}
              id="bookItemId"
              placeholder="Book Title"
              onChange={handleChange}
            />
            <input
              type="text"
              name="author"
              id="authorId"
              value={values.author || ''}
              placeholder="Author Name"
              onChange={handleChange}
            />

            <label htmlFor="categoryId" className="form-label">
              Book Category
              {' '}
              <select
                name="category"
                value={values.category || ''}
                id="categoryId"
                onChange={handleChange}
              >
                <option value="Action">Action</option>
                <option value="Science">Science Friction</option>
                <option value="Economy">Economy</option>
                <option value="Sports">Sports</option>
              </select>
            </label>
            <input type="submit" value="Add Book" />
          </form>
        )}
      </FormSection>
    </div>
  );
};

export default BookItem;
