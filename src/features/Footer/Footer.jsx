import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  font-family: "Montserrat",sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #0290ff;

`;

const Footer = () => {
  const [year, setYear] = React.useState(0);

  useEffect(() => {
    const year = new Date().getFullYear();
    setYear(year);
  }, []);

  return (
    <Wrapper>
      <p>
        Mancoba Sihlongonyane &copy;
        {' '}
        {year}
      </p>

    </Wrapper>
  );
};

export default Footer;
