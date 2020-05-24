import React from 'react';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from './theme/global';

import Routes from './routes/routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
