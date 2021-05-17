import React, { useRef, useEffect } from 'react';
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
      <Medal $medal={medal} $opacity={opacity} $left={left}></Medal>
      <Item
        $left={left}
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
  let moveTimer = useRef();
  const {
    prizes,
    isHover,
    setIsHover,
    handleClickPreButton,
    handleClickNextButton,
  } = useCarousel();

  useEffect(() => {
    if (isHover) clearInterval(moveTimer.current);
    if (!isHover) moveTimer.current = setInterval(handleClickNextButton, 2000);
  }, [isHover]);

  return (
    <>
      <CarouselContainer>
        <CarouselItems
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
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
