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
    console.log('sortPrizes: ', sortPrizes);
    let weightArray = sortPrizes.map((_, index) => {
      let count = 0;
      for (let i = 0; i <= index; i++) {
        count += sortPrizes[i].percent;
      }
      return count;
    });
    console.log('weightArray: ', weightArray);
    let random = Math.random() * 100;
    let index;
    for (let i = 0; i <= weightArray.length; i++) {
      if (weightArray[i] >= random) {
        index = i;
        break;
      }
    }
    console.log('random: ', random);
    console.log('index: ', index);
    return sortPrizes[index].picture;
  };

  // const getRandomNumber = () => {
  //   let result;
  //   do {
  //     result = Math.floor(Math.random() * 10);
  //   } while (result === 0 || result > 8);
  //   return result;
  // };

  return {
    isDraw,
    picture,
    handleClickDraw,
  };
}
