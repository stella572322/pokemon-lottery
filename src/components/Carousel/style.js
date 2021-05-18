import styled from 'styled-components';
export const CarouselContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
export const CarouselItems = styled.div`
  position: relative;
  min-width: 1440px;
  height: 250px;
`;
export const ItemContainer = styled.div`
  position: absolute;
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;
`;
export const Medal = styled.div`
  background: url('pokemon_photo/${(props) => props.$medal}_medal.svg')
    center/cover no-repeat;
  opacity: ${(props) => props.$opacity};
  position: relative;
  width: 40px;
  height: 40px;
  margin: 70px 0 -40px 0;
  z-index: 1;
  @media screen and (max-width: 768px) {
    opacity: ${(props) => {
      if (props.$left <= 450 || props.$left >= 830) return 0;
      return props.$opacity;
    }};
  }
`;
export const Item = styled.div`
  background: url('pokemon_photo/${(props) => props.$picture}_black.svg')
    center/cover no-repeat;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  opacity: ${(props) => props.$opacity};
  &:hover {
    background: url('pokemon_photo/${(props) => props.$picture}.svg')
      center/cover no-repeat;
    transform: scale(1.2);
    & div {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    opacity: ${(props) => {
      if (props.$left <= 450 || props.$left >= 830) return 0;
      return props.$opacity;
    }};
  }
`;
export const Percentage = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  width: 100%;
`;
export const Percent = styled.div``;

export const CarouselButton = styled.div`
  position: absolute;
  padding-top: 125px;
  width: 76vw;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
`;
export const CarouselPrevButton = styled.div`
  background: url('pokemon_photo/arrow-circle-left-light.svg') center/cover
    no-repeat;
  position: relative;
  height: 40px;
  width: 40px;
  color: black;
  cursor: pointer;
  pointer-events: auto;
  &:hover {
    transform: scale(1.1);
  }
`;
export const CarouselNextButton = styled.div`
  background: url('pokemon_photo/arrow-circle-right-light.svg') center/cover
    no-repeat;
  position: relative;
  height: 40px;
  width: 40px;
  color: black;
  cursor: pointer;
  pointer-events: auto;
  &:hover {
    transform: scale(1.1);
  }
`;
