import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px #183883;
	background-color: #F5F5F5;
  border-radius: 15px;
}

body::-webkit-scrollbar {
	width: 12px;
	background-color: #F5F5F5;
  border-radius: 15px;
}

body::-webkit-scrollbar-thumb {
	-webkit-box-shadow: inset 0 0 6px #183883;
	background-color: #183883;
  border-radius: 15px;
}

  body {
    font: 400 14px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    transition: all 0.25s linear;
    background: #000;
    color: #fff;
  }
`;
