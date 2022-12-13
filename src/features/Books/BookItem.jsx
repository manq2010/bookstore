import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from '../../redux/books/books';

const BookItem = () => {
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');

  const [values, setValues] = useState({
    title: '',
    author: '',
    category: 'Action',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, category } = values;
    if (title && author) {
      const bookArray = {
        title,
        author,
        id: uuidv4(),
        category,
      };
      dispatch(AddBook(bookArray));
      setValues('');
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default BookItem;
