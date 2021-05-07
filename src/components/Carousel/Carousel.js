import React, { useState, useEffect } from 'react';
import positionArray from '../../config/positionArray';
import prizeArray from '../../config/prizeArray';
import useCarousel from '../../hooks/useCarousel.js';
import {
  ItemContainer,
  FirstMedal,
  Item,
  Percentage,
  Percent,
  CarouselContainer,
  CarouselItems,
} from './style';

export function CarouselItem({
  percent,
  picture,
  medal,
  top,
  left,
  width,
  height,
  opacity,
}) {
  return (
    <ItemContainer $top={top} $left={left}>
      <FirstMedal $medal={medal}></FirstMedal>
      <Item
        $picture={picture}
        $width={width}
        $height={height}
        $opacity={opacity}
      >
        <Percentage>
          <Percent>{percent}%</Percent>
        </Percentage>
      </Item>
    </ItemContainer>
  );
}
export default function Carousel() {
  const { prizes, startMove } = useCarousel();

  useEffect(() => {
    startMove(0, {
      left: positionArray[1][0],
      top: positionArray[1][1],
      opacity: positionArray[1][5],
    });
    startMove(1, {
      left: positionArray[2][0],
      top: positionArray[2][1],
      opacity: positionArray[2][5],
    });
  }, []);

  useEffect(() => {
    console.log(prizes);
  }, []);
  return (
    <>
      <CarouselContainer>
        <CarouselItems>
          {prizes.map((prize) => {
            return (
              <CarouselItem
                key={prize.id}
                picture={prize.picture}
                left={prize.left}
                top={prize.top}
                zindex={prize.zindex}
                width={prize.width}
                height={prize.height}
                opacity={prize.opacity}
                medal={prize.medal}
                percent={prize.percent}
              />
            );
          })}
        </CarouselItems>
      </CarouselContainer>
    </>
  );
}
