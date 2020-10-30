import '~/index.css';
import React from 'react';
import App from '~/pages/App';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);