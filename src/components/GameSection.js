// GameSection.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTimes } from 'react-icons/fa';

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
  padding: 100px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const GameSectionTitle = styled.h2`
  font-family: 'Exo 2', sans-serif;
  font-size: 48px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(76, 140, 47, 0.4), 4px 4px 0 #8b4513;
  -webkit-text-stroke: 2px #4c8c2f;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 30px;
  }
`;

const GameSectionDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 40px;
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
    font-size: 20px;
    margin-bottom: 30px;
    max-width: 90%;
  }
`;

const GameContainer = styled.div`
  width: 100%;
  max-width: 1800px;
  height: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);

  @media (max-width: 1800px) {
    height: 900px;
  }

  @media (max-width: 1600px) {
    height: 800px;
  }

  @media (max-width: 1400px) {
    height: 700px;
  }

  @media (max-width: 1200px) {
    height: 600px;
  }

  @media (max-width: 992px) {
    height: 500px;
  }
`;


const GameIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  text-align: center;
  padding: 20px;
`;

const ErrorIcon = styled(FaTimes)`
  font-size: 80px;
  color: #ff4444;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  margin-bottom: 10px;
`;

const GameSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <GameSectionContainer>
      <GameSectionTitle>Play FartiLand Game</GameSectionTitle>
      <GameSectionDescription>
        Immerse yourself in the hilarious world of FartiLand with our interactive game! Earn $FARTI, avoid obstacles, and compete with other players to become the ultimate fart champion. Let the gassy adventure begin!
      </GameSectionDescription>
      <GameContainer>
        {isMobile ? (
          <ErrorContainer>
            <ErrorIcon />
            <ErrorMessage>Oops! The game is currently not available on mobile devices.</ErrorMessage>
            <ErrorMessage>Please visit us on a PC to play the game.</ErrorMessage>
          </ErrorContainer>
        ) : (
          <GameIframe src="/Build/index.html" title="Farti Land Game" />
        )}
      </GameContainer>
    </GameSectionContainer>
  );
};

export default GameSection;
