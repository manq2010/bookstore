import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CheckStatus } from '../../redux/categories/categories';

const Wrapper = styled.div`
  margin: 0 4% 0 4%;
  background-color: #fafafa;
  padding: 4%;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-top: 1px solid gray;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: #0290ff;
  border-radius: 3px;
  padding: 8px 24px;
  font-family: "Roboto Slab",serif;
  font-weight: 300;
  letter-spacing: .5px;
  color: #fff;
`;

const ParagrahCategory = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const Categories = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button
        type="button"
        onClick={() => dispatch(CheckStatus())}
      >
        Check status
      </Button>
      <ParagrahCategory>
        {category.status}
      </ParagrahCategory>
    </Wrapper>
  );
};

export default Categories;
