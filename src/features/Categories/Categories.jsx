import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckStatus } from '../../redux/categories/categories';

const Categories = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <>
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
    </>
  );
};

export default Categories;
