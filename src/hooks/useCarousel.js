import { useState, useEffect } from 'react';
import positionArray from '../config/positionArray';
import prizeArray from '../config/prizeArray';

export default function useCarousel() {
  const [prizes, setPrizes] = useState(prizeArray);
  const [movePosition, setMovePosition] = useState(positionArray);

  const handleClickPreButton = () => {};

  const handleClickNextButton = () => {
    setMovePosition(
      [...movePosition, movePosition[0]].filter((_, index) => index !== 0)
    );
  };

  useEffect(() => {
    for (let i = 0; i < 7; i++) {
      let j = i === 6 ? 0 : i + 1;
      startMove(i, {
        left: movePosition[j][0],
        top: movePosition[j][1],
        width: movePosition[j][2],
        height: movePosition[j][3],
        opacity: movePosition[j][4],
      });
    }
  }, [movePosition]);

  const startMove = (index, json) => {
    clearInterval(prizes[index].timer);
    prizes[index].timer = setInterval(function () {
      //console.log('===============分隔線=================');
      var intervalContinue = true;
      setPrizes((prizes) => {
        let tempObject = prizes[index];
        //console.log(tempObject);
        for (let attr in json) {
          let cur;
          /* 抓取調整前的數值 cur */
          if (attr === 'opacity') {
            cur = Math.round(parseFloat(tempObject[`${attr}`]) * 100);
          } else {
            cur = tempObject[`${attr}`];
          }
          //console.log(`調整前的 ${attr} :`, cur);

          /* 計算調整的幅度 speed */
          let speed =
            attr === 'opacity'
              ? (json[attr] * 100 - cur) / 1.5
              : (json[attr] - cur) / 1.5;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
          //console.log('調整幅度 speed:', speed);

          /* 判斷是否已經調整到目標位置 */
          if (attr === 'opacity' && cur / 100 !== json[attr])
            intervalContinue = false;
          if (attr !== 'opacity' && cur !== json[attr])
            intervalContinue = false;

          /* 開始進行調整 */
          //console.log(
          //  `調整後的 ${attr} :`,
          //  attr === 'opacity' ? (cur + speed) / 100 : cur + speed
          //);
          tempObject = {
            ...tempObject,
            [attr]: attr === 'opacity' ? (cur + speed) / 100 : cur + speed,
          };
        }
        return prizes.map((item, prizeIndex) => {
          if (prizeIndex !== index) return item;
          return tempObject;
        });
      });
      //console.log('intervalContinue: ', intervalContinue);
      if (intervalContinue) {
        clearInterval(prizes[index].timer);
      }
    }, 0);
  };
  return {
    prizes,
    movePosition,
    setMovePosition,
    startMove,
    handleClickNextButton,
    handleClickPreButton,
  };
}
