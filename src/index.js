import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/GlobalStyles';
import { App } from 'components/App';
import 'modern-normalize/modern-normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Toaster } from 'react-hot-toast';
import { ScrollToTopButton } from './components/buttonScrollUp/ButtonScrollUp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <ScrollToTopButton />
    <Toaster />
  </React.StrictMode>
);
