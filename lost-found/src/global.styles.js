import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Open Sans Condensed';
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px;

  }


a{
  text-decoration:none;
  color:black;
}


* {
    box-sizing: border-box;
}
  
`;