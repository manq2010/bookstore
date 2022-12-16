import React from 'react';
import styled from 'styled-components';
import Books from '../features/Books/Books';

const BookWrapper = styled.div`
  margin-top: 0;
`;

const BooksPage = () => (
  <BookWrapper>
    <Books />
  </BookWrapper>
);

export default BooksPage;
