import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import prizeObject from './prizeObject';

const Main = styled.div`
  min-height: 100vh;
  background: #2983de;
  padding-bottom: 40px;
`;

const Contain = styled.div`
  max-height: 370px;
  height: 45vw;
  @media screen and (min-width: 768px) {
    height: 350px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
const PokemonLogo = styled.div`
  background: url('/pokemon_photo/pokemon-logo.png') center/cover no-repeat;
  height: 30vw;
  background-size: contain;
  margin-top: 25px;
  width: 60%;
  max-height: 300px;
  max-width: 550px;
  @media screen and (min-width: 540px) {
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    width: 90%;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
  animation: rubberBand 1.5s;
  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
`;
const Prize = styled.div`
  &:after {
    display: block;
    position: relative;
    content: ' ';
    background: rgba(0, 58, 113, 0.5);
    height: 13px;
    width: 190px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 10px rgba(0, 58, 113, 0.5);
    margin: 40px auto 0 auto;
    z-index: 1;

    ${(props) =>
      props.$isDraw
        ? 'animation: switch-shadow 3s;'
        : 'animation: shadow 1s infinite;' + 'animation-delay: 1.5s;'}
    ${(props) => props.$picture !== 'pokemonball' && 'animation-delay: 0s;'}
    @media screen and (min-width: 280px) {
      width: 12%;
    }
    @media screen and (min-width: 360px) {
      width: 16%;
    }
    @media screen and (min-width: 414px) {
      width: 18%;
    }
    @media screen and (min-width: 540px) {
      width: 23%;
    }
    @media screen and (min-width: 768px) {
      width: 180px;
    }
  }
  @keyframes shadow {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes switch-shadow {
    50% {
      transform: scale(1.1);
    }
    80% {
      transform: scale(0.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const PokemonBall = styled.div`
  background: url('/pokemon_photo/${(props) => props.$picture}.svg')
    center/cover no-repeat;
  height: 30vw;
  background-size: contain;
  display: flex;
  width: 50%;
  max-height: 275px;
  max-width: 280px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  ${(props) =>
    props.$isDraw
      ? 'animation: switch 3s;'
      : 'animation: ball 1s infinite;' + 'animation-delay: 1.5s;'}
  ${(props) => props.$picture !== 'pokemonball' && 'animation-delay: 0s;'}
  @keyframes ball {
    0% {
      transform: translate(0, 5px);
    }
    50% {
      transform: translate(0, 30px);
    }
    100% {
      transform: translate(0, 5px);
    }
  }
  @keyframes switch {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(15deg) translate(20px, 0);
    }
    20% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(-15deg) translate(-20px, 0);
    }
    40% {
      transform: rotate(0deg);
    }
    50% {
      transform: scale(1.2);
    }
    55% {
      filter: brightness(1) blur(0px);
    }
    80% {
      transform: scale(0.05);
      filter: brightness(0.1) blur(1px);
    }
    100% {
      filter: brightness(1) blur(0px);
      transform: scale(1);
    }
  }
  @media screen and (min-width: 280px) {
    width: 30%;
  }
  @media screen and (min-width: 540px) {
    width: 35%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const Lottery = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  @keyframes living {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }
`;

const LotteryButton = styled.button`
  position: relative;
  border-radius: 10px;
  color: #ffffff;
  z-index: 1;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    border-radius: 10px;
    animation: living 2s linear;
    animation-delay: 1.5s;
    z-index: -1;
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    border-radius: 10px;
    animation: living 2s linear;
    animation-delay: 2.5s;
  }

  @media screen and (min-width: 280px) {
    width: 25vw;
    height: 10vw;
    padding: 12px 0px;
    font-size: 10px;
  }

  @media screen and (min-width: 375px) {
    width: 20vw;
    padding: 10px 0px;
    font-size: 12px;
  }

  @media screen and (min-width: 445px) {
    width: 16vw;
    height: 8vw;
    font-size: 13px;
  }

  @media screen and (min-width: 575px) {
    width: 14vw;
    padding: 12px 0px;
    font-size: 15px;
  }

  @media screen and (min-width: 700px) {
    width: 13vw;
    height: 7vw;
    font-size: 16px;
  }

  @media screen and (min-width: 825px) {
    width: 12vw;
    height: 6vw;
    max-width: 115px;
    max-height: 57px;
  }
`;

const LotteryButtonContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2e4595;
  border: 1px solid #1b1f4c;
  border-radius: 10px;
  box-shadow: 0 0 0 0.2px #1b1f4c;
  text-align: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    color: #f8c145;
  }
`;

const Container = styled.div`
  background: #2983de;
  display: grid;
  justify-content: center;
  grid-template-columns: 20vw 20vw 20vw;
  grid-template-rows: 20vw 20vw 20vw;
  column-gap: 50px;
  row-gap: 50px;
  margin-top: 50px;
`;

const Item_1 = styled.div`
  background: url('/pokemon_photo/1.svg') center/cover no-repeat;
  background-color: #2e4595;
  width: 100%;
  height: 100%;
`;
const Item_2 = styled.div`
  background: url('/pokemon_photo/2.svg') center/cover no-repeat;
  background-color: #f8c145;
  width: 100%;
  height: 100%;
`;
const Item_3 = styled.div`
  background: url('/pokemon_photo/3.svg') center/cover no-repeat;
  background-color: #2e4595;
  width: 100%;
  height: 100%;
`;
const Item_4 = styled.div`
  background: url('/pokemon_photo/4.svg') center/cover no-repeat;
  background-color: #f8c145;
  width: 100%;
  height: 100%;
`;
const Item_5 = styled.div`
  background: url('/pokemon_photo/5.svg') center/cover no-repeat;
  background-color: #2e4595;
  width: 100%;
  height: 100%;
`;
const Item_6 = styled.div`
  background: url('/pokemon_photo/6.svg') center/cover no-repeat;
  background-color: #f8c145;
  width: 100%;
  height: 100%;
`;
const Item_7 = styled.div`
  background: url('/pokemon_photo/7.svg') center/cover no-repeat;
  background-color: #2e4595;
  width: 100%;
  height: 100%;
`;
const Item_8 = styled.div`
  background: url('/pokemon_photo/8.svg') center/cover no-repeat;
  background-color: #f8c145;
  width: 100%;
  height: 100%;
`;

export default function App() {
  const [isDraw, setIsDraw] = useState(false);
  const [picture, setPicture] = useState('pokemonball');
  const handleClickDraw = () => {
    if (isDraw) {
      return;
    }
    setIsDraw(true);
    setTimeout(() => {
      setIsDraw(false);
    }, 3000);
    setTimeout(() => {
      setPicture(getRandomNumber());
    }, 2400);
  };
  const getRandomNumber = () => {
    let result;
    do {
      result = Math.floor(Math.random() * 10);
    } while (result === 0 || result > 8);
    return result;
  };
  return (
    <>
      <Main>
        <Title>
          <PokemonLogo />
        </Title>
        <Contain>
          <Prize $picture={picture} $isDraw={isDraw}>
            <PokemonBall $picture={picture} $isDraw={isDraw} />
          </Prize>
        </Contain>
        <Lottery>
          <LotteryButton onClick={handleClickDraw}>
            <LotteryButtonContent>Lucky Draw</LotteryButtonContent>
            {/* <LotteryButton>Play Again</LotteryButton> */}
          </LotteryButton>
        </Lottery>
        <Container>
          <Item_1></Item_1>
          <Item_2></Item_2>
          <Item_3></Item_3>
          <Item_4></Item_4>
          <Item_5></Item_5>
          <Item_6></Item_6>
          <Item_7></Item_7>
          <Item_8></Item_8>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
