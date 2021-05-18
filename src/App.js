import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import LotteryContainer from './components/LotteryContainer';
import Carousel from './components/Carousel';

const Main = styled.div`
  min-height: 100vh;
  background: #2983de;
  padding-bottom: 40px;
`;

export default function App() {
  return (
    <>
      <Main>
        <Header />
        <LotteryContainer />
        <Carousel />
      </Main>
      <Footer />
    </>
  );
}
