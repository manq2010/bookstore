import React from 'react';
import styled from 'styled-components';
import BookItem from './BookItem';

const Wrapper = styled.div`
margin: 0 1rem 0 1rem;
background-color: #fafafa;
padding: 1rem;
border-bottom-left-radius: 0.25rem;
border-bottom-right-radius: 0.25rem;
border-top: 1px solid gray;
`;

const Books = () => (

  <Wrapper>
    <BookItem />
  </Wrapper>
);

export default Books;
