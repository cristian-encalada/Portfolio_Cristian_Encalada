import styled, { css } from 'styled-components';

const BorderStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  ${BorderStyle};
  height: 250px;
  width: 250px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
