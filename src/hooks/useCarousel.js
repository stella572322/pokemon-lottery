import { useState, useEffect } from 'react';
import positionArray from '../config/positionArray';
import prizeArray from '../config/prizeArray';

export default function useCarousel() {
  const [prizes, setPrizes] = useState(prizeArray);

  const startMove = (target, json) => {
    clearInterval(prizes[target].timer);
    prizes[target].timer = setInterval(function () {
      console.log('===============分隔線=================');
      var bStop = true;
      for (var attr in json) {
        setPrizes((prizes) => {
          var cur = 0;

          /* 抓取調整前的數值 cur */
          if (attr === 'opacity') {
            cur = Math.round(parseFloat(prizes[target][`${attr}`]) * 100);
          } else {
            cur = prizes[target][`${attr}`];
          }
          console.log(`調整前的 ${attr} :`, cur);

          /* 計算調整的幅度 speed */
          var speed =
            attr === 'opacity'
              ? (json[attr] * 100 - cur) / 6
              : (json[attr] - cur) / 6;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
          console.log('調整幅度 speed:', speed);

          /* 判斷是否已經調整到目標位置 */
          if (attr !== 'opacity' && cur !== json[attr]) bStop = false;
          if (attr === 'opacity' && cur / 100 !== json[attr]) bStop = false;

          /* 開始進行調整 */
          console.log(
            `調整後的 ${attr} :`,
            attr === 'opacity' ? (cur + speed) / 100 : cur + speed
          );
          if (attr === 'opacity') {
            return prizes.map((item, index) => {
              if (index !== target) return item;
              return {
                ...item,
                [attr]: (cur + speed) / 100,
              };
            });
          } else {
            return prizes.map((item, index) => {
              if (index !== target) return item;
              return {
                ...item,
                [attr]: cur + speed,
              };
            });
          }
        });
      }
      console.log('bStop: ', bStop);
      if (bStop) {
        clearInterval(prizes[target].timer);
      }
    }, 0);
  };
  return {
    prizes,
    startMove,
  };
}
