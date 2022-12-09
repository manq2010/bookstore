import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="logo" onClick={() => navigate('/')} aria-hidden="true">
        Bookstore CMS
      </h1>
    </>
  );
};

export default Logo;
