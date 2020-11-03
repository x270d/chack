import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  font-size: 16px;
  line-height: 1.25;
  color: #222;
  font-weight: 400;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 930px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  @media (max-width: 991px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;
