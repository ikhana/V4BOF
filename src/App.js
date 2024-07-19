// App.js
import React, { Suspense, lazy } from 'react';
import styled, { keyframes } from 'styled-components';
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

// Lazy load the GameSection component
const GameSection = lazy(() => import('./components/GameSection'));

const AppContainer = styled.div`
  position: relative;
  z-index: 1;
`;

// Animations
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const colorChange = keyframes`
  0% { color: #4c8c2f; }
  50% { color: #8b4513; }
  100% { color: #4c8c2f; }
`;

// Styled components for the loading screen
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  background: rgba(76, 140, 47, 0.1);
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(76, 140, 47, 0.3);
`;

const LoadingText = styled.h2`
  font-family: 'Exo 2', sans-serif;
  font-size: 48px;
  font-weight: 800;
  color: #4c8c2f;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${bounce} 2s ease-in-out infinite, ${colorChange} 4s linear infinite;
`;

const LoadingSubText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #ffffff;
  margin-top: 20px;
`;

// Loading component
const ThematicLoadingComponent = () => (
  <LoadingContainer>
    <LoadingText>FartiLand</LoadingText>
    <LoadingSubText>Preparing a gassy adventure...</LoadingSubText>
  </LoadingContainer>
);

function App() {
  return (
    <>
      <MainBackground/>
      <GlobalStyle/>
      <AppContainer>
        <NavBar />
        <Banner />
        <About/>
        <Suspense fallback={<ThematicLoadingComponent />}>
          <GameSection/>
        </Suspense>
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
