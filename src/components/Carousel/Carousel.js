import React from 'react';
import styled from 'styled-components';

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
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
`;
const FirstMedal = styled.div`
  background: url('/pokemon_photo/first_medal.svg') center/cover no-repeat;
  position: relative;
  width: 40px;
  height: 40px;
  margin: 70px 0 -40px 0;
  z-index: 1;
`;
const Item = styled.div`
  background: url('/pokemon_photo/1_black.svg') center/cover no-repeat;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  opacity: ${(props) => props.$opacity};
  &:hover {
    background: url('/pokemon_photo/1.svg') center/cover no-repeat;
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

export function CarouselItem({ top, left, width, height, opacity }) {
  return (
    <ItemContainer $top={top} $left={left}>
      <FirstMedal></FirstMedal>
      <Item $width={width} $height={height} $opacity={opacity}>
        <Percentage>
          <Percent>2%</Percent>
        </Percentage>
      </Item>
    </ItemContainer>
  );
}
export default function Carousel() {
  return (
    <>
      <CarouselContainer>
        <CarouselItems>
          <CarouselItem
            top={'-177px'}
            left={'133px'}
            width={'129px'}
            height={'123px'}
            opacity={'0.4'}
          />
          <CarouselItem
            top={'-72px'}
            left={'276px'}
            width={'138px'}
            height={'124px'}
            opacity={'0.6'}
          />
          <CarouselItem
            top={'-13px'}
            left={'445.5px'}
            width={'143px'}
            height={'139px'}
            opacity={'0.8'}
          />
          <CarouselItem
            top={'16px'}
            left={'628.5px'}
            width={'180px'}
            height={'180px'}
            opacity={'1'}
          />
          <CarouselItem
            top={'-13px'}
            left={'838.5px'}
            width={'143px'}
            height={'139px'}
            opacity={'0.8'}
          />
          <CarouselItem
            top={'-72px'}
            left={'1014px'}
            width={'138px'}
            height={'134px'}
            opacity={'0.6'}
          />
          <CarouselItem
            top={'-177px'}
            left={'1165px'}
            width={'129px'}
            height={'123px'}
            opacity={'0.4'}
          />
        </CarouselItems>
      </CarouselContainer>
    </>
  );
}
