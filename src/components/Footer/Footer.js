import React from 'react';
import {
  FooterContainer,
  Icon,
  Notice,
  Announcement,
  Source,
  Warning,
} from './style';

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <Icon>
          <Notice src='pokemon_photo/notice.svg'></Notice>
        </Icon>
        <Announcement>
          <Source>
            Picture Originated From:
            https://www.vecteezy.com/vector-art/119209-pokeball-types
          </Source>
          <Warning>
            Warning: The Services are for my personal and non-commercial use.
          </Warning>
        </Announcement>
      </FooterContainer>
    </>
  );
}
