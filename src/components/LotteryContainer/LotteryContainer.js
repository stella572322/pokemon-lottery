import React, { useState } from 'react';
import {
  Contain,
  Prize,
  PokemonBall,
  Lottery,
  LotteryButton,
  LotteryButtonContent,
} from './style';

export default function LotteryContainer() {
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
      <Contain>
        <Prize $picture={picture} $isDraw={isDraw}>
          <PokemonBall $picture={picture} $isDraw={isDraw} />
        </Prize>
      </Contain>
      <Lottery>
        <LotteryButton onClick={handleClickDraw}>
          <LotteryButtonContent>Lucky Draw</LotteryButtonContent>
        </LotteryButton>
      </Lottery>
    </>
  );
}
