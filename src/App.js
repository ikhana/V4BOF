// App.js
import React from 'react';
import styled from 'styled-components';


import MainBackground from './components/Background';

import { GlobalStyle } from './GlobalStyle';




const AppContainer = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <>
      <MainBackground/>
      <GlobalStyle/>
      <AppContainer>
       
       
      
      
       
      </AppContainer>
    </>
  );
}

export default App;
