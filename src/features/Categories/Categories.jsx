import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CheckStatus } from '../../redux/categories/categories';

const Wrapper = styled.div`
 margin: 0 1rem 0 1rem;
 background-color: #fafafa;
 padding: 1rem;
 border-bottom-left-radius: 0.25rem;
 border-bottom-right-radius: 0.25rem;
 border-top: 1px solid gray;
`;

const Categories = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h2 className="text">Categories</h2>
      <button
        type="button"
        onClick={() => dispatch(CheckStatus())}
      >
        Check status
      </button>
      <p>

        <strong>Status:</strong>
        {' '}
        {category.status}
      </p>
    </Wrapper>
  );
};

export default Categories;
