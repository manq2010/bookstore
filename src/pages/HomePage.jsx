import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 4% 0 4%;
  background-color: #fafafa;
  padding: 1rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-top: 1px solid gray;
`;

const HomeHeader = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -.18px;
  color: #888;
`;

const ParagraphHome = styled.p`
  font-family: "Roboto Slab",serif;
  font-weight: 700;
  color: #121212;
  text-align: justify; 
  margin: auto 3rem;
`;

const HomePage = () => (
  <HomeWrapper>

    <HomeHeader>Welcome to our Book Store page!</HomeHeader>
    <ParagraphHome>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quidem?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quidem?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quidem?
    </ParagraphHome>

  </HomeWrapper>
);

export default HomePage;
