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
  margin-top: 2rem;
`;

const InputForm = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #e8e8e8;
    background-color: #fff;
    font-size: 1rem;
    letter-spacing: -.15px;
    color: #121212;
    width: 30%;
    margin-right: 1rem;
    @media (min-width: 768px) {
      width: 30%;
    }
`;

const SelectInput = styled.select`
padding: 12px;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  background-color: #fff;
  font-size: 1rem;
  letter-spacing: -.15px;
  color: #121212;
  width: 35%;
  margin-right: 1rem;
  position: relative;
  @media (min-width: 768px) {
    width: 20%;
  }
`;

const AddBookButton = styled.input`
  cursor: pointer;
  width: 20%;
  padding: 12px;
  border-radius: 3px;
  background-color: #0290ff;
  border: none;
  letter-spacing: .5px;
  color: #fff;
  font-size: .813rem;
  font-weight: 700;
  font-family: "Roboto Slab",serif;
  width: 6rem;
  margin-top: 1rem;
  
`;

const BookListItem = styled.li`
  display: flex;
  flex-direction: row;
  // align-items: center;
  justify-content: space-between;
  // padding: 0.5rem;
  margin: 0.5rem 0 0.5rem 0;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  padding: 2rem;
 `;

const BookInfo = styled.div``;

const BookCategory = styled.h4`
  font-weight: 700;
  color: #121212;
  font-family: "Montserrat",sans-serif;
  font-size: .875rem;
  opacity: .5;
  margin: 0;
  padding: 0;
 `;

const BookTitle = styled.h2`
  font-family: "Roboto Slab",serif;
  margin-top: 0.2rem;
  font-size: 1.375rem;
  letter-spacing: -.2px;
  font-weight: 700;
  color: #121212;
 `;

const BookAuthor = styled.h6`
  margin-top: 0;
  font-size: .875rem;
  font-weight: 300;
  color: #4386bf;
  margin-bottom: 0;
 `;

const BookDetails = styled.div``;

const BookButtonWrapper = styled.div`
margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const VerticalDivider = styled.div`
  width: 0.125rem;
  height: 1.5rem;
  background-color: #e8e8e8;
  margin: 0 1rem;
`;

const Button = styled.button`
  font-family: "Roboto Slab",serif;
  background-color: transparent;
  border: none;
  color: #4386bf;
  font-size: .875rem;
  font-weight: 300;
  align-items: center;
  cursor: pointer;
`;

const BookProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const CircularProgressContainer = styled.div`
  display: flex;
  align-items: center;
  width: 5.625rem;
  height: 5.625rem;
  padding: 0.63rem 0.625rem 0.75rem 0.75rem;
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`;

const CircularProgress = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 4.25rem;
  height: 4.25rem;
  border: 5px solid #307bbe;
  border-left-color: #e8e8e8;
  transform: rotate(45deg);
`;

const ProgressStatus = styled.div`

`;

const PercentateComplete = styled.p`
  font-family: "Montserrat",sans-serif;
  color: #121212;
`;

const Completed = styled.p`
  font-family: "Montserrat",sans-serif;
  color: #121212;
  font-size: .875rem;
  opacity: .5;
`;

const VerticalProgressDivider = styled.div`
  width: 0.125rem;
  height: 4.375rem;
  margin: 0 5% 0 10%;
  background-color: #e8e8e8;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const CurrentChapterContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  gap: 20px;
  width: 14rem;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const ChapterLabel = styled.p`
  font-family: "Roboto Slab",serif;
  font-weight: 300;
  color: #121212;
  font-size: .813rem;
  opacity: .5;
`;

const CurrentChapter = styled.p`
  margin-top: 0.438rem;
  font-size: 1rem;
  letter-spacing: -.4px;
  font-family: "Roboto Slab",serif;
  font-weight: 300;
  color: #121212;
`;

const ProgressButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: #0290ff;
  border-radius: 3px;
  padding: 8px 10px;
  font-family: "Roboto Slab",serif;
  font-weight: 300;
  letter-spacing: .5px;
  color: #fff;
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
            <BookListItem key={book.item_id}>
              <BookInfo>
                <BookDetails>
                  <BookCategory>{book.category}</BookCategory>
                  <BookTitle>{book.title}</BookTitle>
                  <BookAuthor>{book.author}</BookAuthor>
                </BookDetails>
                <BookButtonWrapper>
                  <Button type="button">Comments</Button>
                  <VerticalDivider />
                  <Button
                    type="button"
                    onClick={() => handleRemove(book.item_id)}
                  >
                    Remove
                  </Button>
                  <VerticalDivider />
                  <Button type="button">Edit</Button>
                </BookButtonWrapper>
              </BookInfo>
              <BookProgressWrapper>
                <CircularProgressContainer>
                  <CircularProgress />
                </CircularProgressContainer>
                <ProgressStatus>
                  <PercentateComplete>10%</PercentateComplete>
                  <Completed>Completed</Completed>
                </ProgressStatus>
                <VerticalProgressDivider />
                <CurrentChapterContainer>
                  <div>
                    <ChapterLabel>
                      CURRENT CHAPTER
                    </ChapterLabel>
                    <CurrentChapter>
                      Chapter 3: &quot;A Lesson Learned&quot;
                    </CurrentChapter>
                  </div>
                  <div>
                    <ProgressButton
                      type="submit"
                    >
                      UPDATE PROGRESS
                    </ProgressButton>
                  </div>
                </CurrentChapterContainer>
              </BookProgressWrapper>
            </BookListItem>
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
            <InputForm
              type="text"
              name="title"
              value={values.title || ''}
              id="bookItemId"
              placeholder="Book Title"
              onChange={handleChange}
            />
            <InputForm
              type="text"
              name="author"
              id="authorId"
              value={values.author || ''}
              placeholder="Author Name"
              onChange={handleChange}
            />
            <SelectInput
              name="category"
              value={values.category || ''}
              id="categoryId"
              onChange={handleChange}
            >
              <option value="Action">Action</option>
              <option value="Science">Science Friction</option>
              <option value="Economy">Economy</option>
              <option value="Sports">Sports</option>
            </SelectInput>
            <AddBookButton type="submit" value="Add Book" />
          </form>
        )}
      </FormSection>
    </div>
  );
};

export default BookItem;
