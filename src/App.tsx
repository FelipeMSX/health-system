import React from 'react';
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout/>
        <GlobalStyles/>
      </BrowserRouter>
    </>
  );
}

export default App;
