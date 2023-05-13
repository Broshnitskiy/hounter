import React from 'react';
import { Wrapper, Titlte, Parag } from './StickerInfo.styled';

export const StickerInfo = ({ img, title, text, imgWidth }) => {
  return (
    <Wrapper>
      <img src={img} alt="ava" width={imgWidth} />
      <div>
        <Titlte>{title}</Titlte>
        <Parag>{text}</Parag>
      </div>
    </Wrapper>
  );
};
