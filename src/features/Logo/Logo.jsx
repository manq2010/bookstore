import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled.h1`
  display: none;
  font-size: 2rem;
  font-family: "Montserrat",sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
  color: #0290ff;
  margin-top: 2.5rem;
  margin-left: 4%;

@media (min-width: 768px) {
    display: block;
}
`;

const Logo = () => {
  const navigate = useNavigate();
  return (
    <>
      <LogoContainer className="logo" onClick={() => navigate('/')} aria-hidden="true">
        Bookstore CMS
      </LogoContainer>
    </>
  );
};

export default Logo;
