import React, { useState, useEffect } from 'react';
import positionArray from '../../config/positionArray';
import prizeArray from '../../config/prizeArray';
import useCarousel from '../../hooks/useCarousel.js';
import {
  ItemContainer,
  Medal,
  Item,
  Percentage,
  Percent,
  CarouselContainer,
  CarouselItems,
  CarouselButton,
  CarouselPrevButton,
  CarouselNextButton,
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
      <Medal $medal={medal} $opacity={opacity}></Medal>
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
    setTimeout(() => {
      startMove(0, {
        left: positionArray[1][0],
        top: positionArray[1][1],
        width: positionArray[1][2],
        height: positionArray[1][3],
        opacity: positionArray[1][4],
      });
      startMove(1, {
        left: positionArray[2][0],
        top: positionArray[2][1],
        width: positionArray[2][2],
        height: positionArray[2][3],
        opacity: positionArray[2][4],
      });
      startMove(2, {
        left: positionArray[3][0],
        top: positionArray[3][1],
        width: positionArray[3][2],
        height: positionArray[3][3],
        opacity: positionArray[3][4],
      });
      startMove(3, {
        left: positionArray[4][0],
        top: positionArray[4][1],
        width: positionArray[4][2],
        height: positionArray[4][3],
        opacity: positionArray[4][4],
      });
      startMove(4, {
        left: positionArray[5][0],
        top: positionArray[5][1],
        width: positionArray[5][2],
        height: positionArray[5][3],
        opacity: positionArray[5][4],
      });
      startMove(5, {
        left: positionArray[6][0],
        top: positionArray[6][1],
        width: positionArray[6][2],
        height: positionArray[6][3],
        opacity: positionArray[6][4],
      });
      startMove(6, {
        left: positionArray[0][0],
        top: positionArray[0][1],
        width: positionArray[0][2],
        height: positionArray[0][3],
        opacity: positionArray[0][4],
      });
    }, 1000);
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
                width={prize.width}
                height={prize.height}
                opacity={prize.opacity}
                medal={prize.medal}
                percent={prize.percent}
              />
            );
          })}
        </CarouselItems>
        <CarouselButton>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButton>
      </CarouselContainer>
    </>
  );
}
