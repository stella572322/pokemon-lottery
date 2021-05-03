import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.section``;
const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
`;
const Item = styled.div`
  background: url('/pokemon_photo/1_black.svg') center/cover no-repeat;
  width: 180px;
  height: 180px;
  margin: 60px 0 20px 0;
  &:hover {
    background: url('/pokemon_photo/1.svg') center/cover no-repeat;
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
const FirstMedal = styled.div`
  background: url('/pokemon_photo/first_medal.svg') center/cover no-repeat;
  width: 40px;
  height: 40px;
  margin: 80px -40px 0 0;
  z-index: 1;
`;

export default function Carousel() {
  return (
    <>
      <CarouselContainer>
        <CarouselItem>
          <FirstMedal></FirstMedal>
          <Item>
            <Percentage>
              <Percent>2%</Percent>
            </Percentage>
          </Item>
        </CarouselItem>
      </CarouselContainer>
    </>
  );
}
