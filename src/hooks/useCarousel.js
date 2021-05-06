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
      setPrizes((prizes) => {
        for (var attr in json) {
          var cur = 0;
          if (attr == 'opacity') {
            //cur = Math.round(parseFloat(getStyle(target, attr)) * 100);
          } else {
            cur = prizes[target][`${attr}`];
            console.log(`調整前的 ${attr} :`, cur);
          }

          var speed = (json[attr] - cur) / 6;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
          console.log('調整幅度 speed:', speed);

          if (cur != json[attr]) bStop = false;

          if (attr == 'opacity') {
            target.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
            target.style.opacity = (cur + speed) / 100;
          } else {
            return prizes.map((item, index) => {
              if (index !== target) return item;
              console.log(`調整後的 ${attr} :`, cur + speed);
              return {
                ...item,
                [attr]: cur + speed,
              };
            });
          }
        }
        console.log('bStop: ', bStop);
      });
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
