import styled from 'styled-components';
// import { colors } from '../../styles/colors';

export const InButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 4px;
  }
`;

export const FormComp = styled.form`
  input {
    width: 496px;
    height: 56px;
    background: #ffffff;

    border: 1px solid #e0e3eb;
    border-radius: 32px;
    &focus {
      border: none;
    }
  }
`;
