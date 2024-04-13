// App.js
import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Banner from './components/Hero/HeroSection';
import FartGridComponent from './components/FartGrid';
import TokenEconomicsSections from './components/TokenEconomics';
import MainBackground from './components/Background';
import PartnersSection from './components/MovingStrip';
import Roadmap from './components/Rodmap';
import HowToBuy from './components/HowToBuy';
import HallOfFame from './components/HallOfFame';
import { GlobalStyle } from './GlobalStyle';
import About from './components/About';
import CTASection from './components/CTASection';

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
        
        <NavBar />
        <Banner />
        <About/>
        <HallOfFame/>
        <FartGridComponent />
        <PartnersSection/>
        <Roadmap/>
        <TokenEconomicsSections />
        <CTASection/>
        <HowToBuy/>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
