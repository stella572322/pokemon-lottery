import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import prizeObject from './prizeObject';

const Main = styled.div`
  height: 100vh;
  background: #1e81ded9;
`;

const Contain = styled.div`
  height: 35vh;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
const PokemonLogo = styled.img`
  margin-top: 25px;
  width: 60%;
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
    //animation: shadow 1s infinite;
    animation: switch-shadow 3s;
    @media screen and (min-width: 280px) {
      width: 8%;
    }
    @media screen and (min-width: 360px) {
      width: 18%;
    }
    @media screen and (min-width: 414px) {
      width: 20%;
    }
    @media screen and (min-width: 540px) {
      width: 25%;
    }
    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }
  @keyframes shadow {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
  @keyframes switch-shadow {
    60% {
      transform: scale(1.1);
    }
    95% {
      transform: scale(0.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const PokemonBall = styled.img`
  display: flex;
  width: 50%;
  max-width: 280px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  //animation: ball 1s infinite;
  animation: switch 3s;
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
    60% {
      transform: scale(1.2);
    }
    95% {
      transform: scale(0.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @media screen and (min-width: 280px) {
    width: 30%;
  }
  @media screen and (min-width: 360px) {
    width: 30%;
  }
  @media screen and (min-width: 414px) {
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
  position: absolution;
  display: flex;
  justify-content: center;
  margin-top: 140px;
`;

const LotteryButton = styled.button`
  box-sizing: border-box;
  border: none;
  outline: none;
  position: relative;
  max-height: 100px;
  max-width: 130px;
  padding: 15px 14px;
  font-size: 20px;
  background: #2e4595;
  border: 1px solid #1b1f4c;
  border-radius: 10px;
  box-shadow: 0 0 0 0.2px #1b1f4c;
  color: #ffffff;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    color: #f8c145;
  }

  @media screen and (min-width: 375px) {
    // margin-top: -30px;
    // padding: 10px 14px;
    // font-size: 16px;
  }

  @media screen and (min-width: 280px) {
    width: 60%;
  }
  @media screen and (min-width: 360px) {
    width: 60%;
  }
  @media screen and (min-width: 414px) {
    width: 60%;
  }
  @media screen and (min-width: 540px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

export default function App() {
  return (
    <>
      <Main>
        <Title>
          <PokemonLogo src='/pokemon_photo/pokemon-logo.png'></PokemonLogo>
        </Title>
        <Contain>
          <Prize>
            <PokemonBall src='/pokemon_photo/pokemonball.svg'></PokemonBall>
          </Prize>
        </Contain>
        <Lottery>
          <LotteryButton>My Award</LotteryButton>
          {/* <LotteryButton>Play Again</LotteryButton> */}
        </Lottery>
      </Main>
    </>
  );
}
