import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h3>404!</h3>
    <p>
      Oops Page
      {' '}
      <em>Not</em>
      {' '}
      Found!
    </p>
    <Link to="/">Back to home</Link>
  </div>
);

export default NotFound;
