import { useState, useEffect } from 'react';
import positionArray from '../config/positionArray';
import prizeArray from '../config/prizeArray';

export default function useCarousel() {
  const [prizes, setPrizes] = useState(prizeArray);

  const startMove = (index, json) => {
    clearInterval(prizes[index].timer);
    prizes[index].timer = setInterval(function () {
      console.log('===============分隔線=================');
      var intervalContinue = true;
      for (var attr in json) {
        setPrizes((prizes) => {
          let cur;

          /* 抓取調整前的數值 cur */
          if (attr === 'opacity') {
            cur = Math.round(parseFloat(prizes[index][`${attr}`]) * 100);
          } else {
            cur = prizes[index][`${attr}`];
          }
          console.log(`調整前的 ${attr} :`, cur);

          /* 計算調整的幅度 speed */
          let speed =
            attr === 'opacity'
              ? (json[attr] * 100 - cur) / 2
              : (json[attr] - cur) / 2;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
          console.log('調整幅度 speed:', speed);

          /* 判斷是否已經調整到目標位置 */
          if (attr === 'opacity' && cur / 100 !== json[attr])
            intervalContinue = false;
          if (attr !== 'opacity' && cur !== json[attr])
            intervalContinue = false;

          /* 開始進行調整 */
          console.log(
            `調整後的 ${attr} :`,
            attr === 'opacity' ? (cur + speed) / 100 : cur + speed
          );
          return prizes.map((item, prizeIndex) => {
            if (prizeIndex !== index) return item;
            return {
              ...item,
              [attr]: attr === 'opacity' ? (cur + speed) / 100 : cur + speed,
            };
          });
        });
      }
      console.log('intervalContinue: ', intervalContinue);
      if (intervalContinue) {
        clearInterval(prizes[index].timer);
      }
    }, 0);
  };
  return {
    prizes,
    startMove,
  };
}
