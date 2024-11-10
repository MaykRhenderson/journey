import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
    font-family: "Roboto", sans-serif;
    font-size: 24px;

    @media (min-width: 768px) {
      font-size: 32px;
    }

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  ::-webkit-scrollbar {
	  background-color: black;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #6750a4;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: black;
    border-radius: 6px;
  }
`;

export default GlobalStyle;
