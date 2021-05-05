import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import positionArray from '../../config/positionArray';
import prizeArray from '../../config/prizeArray';

const CarouselContainer = styled.section`
  display: flex;
  justify-content: center;
`;
const CarouselItems = styled.div`
  position: relative;
  min-width: 1440px;
  height: 250px;
`;
const ItemContainer = styled.div`
  position: absolute;
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;
`;
const FirstMedal = styled.div`
  background: url('/pokemon_photo/${(props) => props.$medal}_medal.svg')
    center/cover no-repeat;
  position: relative;
  width: 40px;
  height: 40px;
  margin: 70px 0 -40px 0;
  z-index: 1;
`;
const Item = styled.div`
  background: url('/pokemon_photo/${(props) => props.$picture}_black.svg')
    center/cover no-repeat;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  opacity: ${(props) => props.$opacity};
  &:hover {
    background: url('/pokemon_photo/${(props) => props.$picture}.svg')
      center/cover no-repeat;
    transform: scale(1.2);
    & div {
      display: none;
    }
  }
`;
const Percentage = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  width: 100%;
`;
const Percent = styled.div``;

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
  const [prizes, setPrizes] = useState(prizeArray);

  useEffect(() => {
    console.log(prizes);
  }, [prizes]);
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
