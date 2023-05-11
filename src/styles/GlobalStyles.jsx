import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../images/design-background.png';

export const GlobalStyles = createGlobalStyle`

body{
font-family: 'Lexend', sans-serif;
font-style: normal;
font-weight: 500;
background-image:url(${backgroundImage});
background-repeat: no-repeat;
background-size: cover;
  
  ::-webkit-scrollbar {
  display: none;
}
}

 html {
    scroll-behavior: smooth;
  }

  button{
     transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
     transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

a {
    text-decoration: none;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color:inherit;
}
ul, ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}
img {
    display: block;
    max-width: 100%;
}
`;
