import styled from 'styled-components';
// import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  > img {
    margin-right: 16px;
  }

  > div {
    max-width: 152px;
  }
`;

export const Titlte = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #1b1c57;
  margin-bottom: 2px;
`;

export const Parag = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #68799f;
`;
