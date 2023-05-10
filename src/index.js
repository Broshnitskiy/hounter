import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { constants } from './constants/constants';
import { App } from 'components/App';
import 'modern-normalize/modern-normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={constants}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
