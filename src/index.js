import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './components/GlobalStyles/';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById('root')
);
