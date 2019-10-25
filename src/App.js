import React from 'react';
import './App.css';

import { ThemeProvider } from '@material-ui/core/styles';

import PropertyPage from './components/PropertyPage/PropertyPage'
import Routes from './Routes'
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
