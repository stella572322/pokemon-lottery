import React from 'react';
import useLottery from '../../hooks/useLottery';
import {
  Contain,
  Prize,
  PokemonBall,
  Lottery,
  LotteryButton,
  LotteryButtonContent,
} from './style';

export default function LotteryContainer() {
  const { isDraw, picture, handleClickDraw } = useLottery();

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
