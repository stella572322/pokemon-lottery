import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
export const PokemonLogo = styled.div`
  background: url('pokemon_photo/pokemon-logo.png') center/cover no-repeat;
  height: 30vw;
  background-size: contain;
  margin-top: 25px;
  width: 60%;
  max-height: 300px;
  max-width: 550px;
  @media screen and (min-width: 540px) {
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    width: 90%;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
  animation: rubberBand 1.5s;
  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
`;
