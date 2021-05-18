import { useState, useEffect } from 'react';
import prizeArray from '../config/prizeArray';

export default function useLottery() {
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
    let sortPrizes = prizeArray.sort((a, b) => a.percent - b.percent);
    let weightArray = sortPrizes.map((_, index) => {
      let count = 0;
      for (let i = 0; i <= index; i++) {
        count += sortPrizes[i].percent;
      }
      return count;
    });
    let random = Math.random() * weightArray[weightArray.length - 1];
    let index;
    for (let i = 0; i <= weightArray.length; i++) {
      if (weightArray[i] >= random) {
        index = i;
        break;
      }
    }
    return sortPrizes[index].picture;
  };
  return {
    isDraw,
    picture,
    handleClickDraw,
  };
}
