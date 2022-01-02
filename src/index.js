import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './components/GlobalStyles/';
import Login from './components/Login/Login';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <Login />
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById('root')
);
