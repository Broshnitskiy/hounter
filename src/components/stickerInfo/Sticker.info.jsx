import React from 'react';
import { Wrapper, Titlte, Parag } from './StickerInfo.styled';

export const StickerInfo = ({ img, title, text, imgWidth = '32px' }) => {
  return (
    <Wrapper>
      <img src={img} alt="ava" width={imgWidth} />
      <div>
        {title && <Titlte>{title}</Titlte>}
        <Parag>{text}</Parag>
      </div>
    </Wrapper>
  );
};
