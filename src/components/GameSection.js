// GameSection.js
import React, { useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GameSectionContainer = styled.section`
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const GameSectionTitle = styled.h2`
  font-family: 'Exo 2', sans-serif;
  font-size: 36px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(76, 140, 47, 0.4), 4px 4px 0 #8b4513;
  -webkit-text-stroke: 2px #4c8c2f;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const GameSectionDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 2;
  background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 90%;
  }
`;

const GameContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; // 16:9 aspect ratio
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
`;

const GameIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
`;

const loaderAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #4c8c2f;
  border-top: 5px solid #8b4513;
  border-radius: 50%;
  animation: ${loaderAnimation} 1s linear infinite;
`;

const LoadingText = styled.p`
  color: #ffffff;
  font-size: 24px;
  margin-top: 20px;
`;

const GameSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulated loading time, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <GameSectionContainer id='game-section'>
      <GameSectionTitle>PLAY FARTING GAME</GameSectionTitle>
      <GameSectionDescription>
        Immerse yourself in the hilarious world of FartiLand with our interactive game! Earn $FARTI, avoid obstacles, and compete with other players to become the ultimate fart champion. Let the gassy adventure begin!
      </GameSectionDescription>
      <GameContainer>
        {loading && (
          <LoaderContainer>
            <Loader />
            <LoadingText>Loading...</LoadingText>
          </LoaderContainer>
        )}
        <GameIframe 
          src="/Build/index.html" 
          title="FartiLand Game"
          allow="autoplay; fullscreen; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated"
          allowFullScreen
        />
      </GameContainer>
    </GameSectionContainer>
  );
};

export default GameSection;