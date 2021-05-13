import React, { useEffect } from 'react';
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
  const { prizes, handleClickPreButton, handleClickNextButton } = useCarousel();

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
          <CarouselPrevButton onClick={handleClickPreButton} />
          <CarouselNextButton onClick={handleClickNextButton} />
        </CarouselButton>
      </CarouselContainer>
    </>
  );
}
