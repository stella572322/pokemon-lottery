import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  min-height: 48px;
  background: #ffdc00;
  color: #000;
  display: flex;
`;
const Icon = styled.div``;
const Notice = styled.img`
  margin: 10px 6px 0 5px;
  height: 22px;
`;
const Announcement = styled.div`
  font-size: 12px;
  margin-top: 6px;
`;
const Source = styled.p``;
const Warning = styled.p``;

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
