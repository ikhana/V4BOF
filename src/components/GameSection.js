// GameSection.js
import React, { useEffect, useRef, useState } from 'react';
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
  max-width: 800px;
  max-height: 450px;
  aspect-ratio: 16 / 9;
  position: relative;
  margin: 0 auto;
  z-index: 2;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
`;

const GameCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let unityInstance = null;

    const loadUnityGame = async () => {
      try {
        console.log("Attempting to load Unity loader script...");
        const loaderScript = document.createElement('script');
        loaderScript.src = '/Build/Build/WebBuild.loader.js';
        loaderScript.async = true;
        document.body.appendChild(loaderScript);

        loaderScript.onload = async () => {
          console.log("Unity loader script loaded successfully");
          if (typeof window.createUnityInstance === "undefined") {
            console.error("Unity create instance function not found");
            return;
          }

          unityInstance = await window.createUnityInstance(canvasRef.current, {
            dataUrl: "/Build/Build/WebBuild.data.unityweb",
            frameworkUrl: "/Build/Build/WebBuild.framework.js.unityweb",
            codeUrl: "/Build/Build/WebBuild.wasm.unityweb",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "DefaultCompany",
            productName: "FartiLand",
            productVersion: "0.1",
          }, (progress) => {
          
            setLoadingProgress(Math.round(progress * 100));
          });

          console.log("Unity WebGL game loaded:", unityInstance);
          setLoading(false);
        };

        loaderScript.onerror = (error) => {
          console.error("Error loading Unity loader script:", error);
        };
      } catch (error) {
        console.error("Failed to load Unity game:", error);
      }
    };

    loadUnityGame();

    // Cleanup function
    return () => {
      if (unityInstance) {
        unityInstance.Quit();
      }
      const loaderScript = document.querySelector('script[src="/Build/Build/WebBuild.loader.js"]');
      if (loaderScript) {
        document.body.removeChild(loaderScript);
      }
    };
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
            <LoadingText>Loading... {loadingProgress}%</LoadingText>
          </LoaderContainer>
        )}
        <div id="unity-container" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <GameCanvas ref={canvasRef} id="unity-canvas" />
        </div>
      </GameContainer>
    </GameSectionContainer>
  );
};

export default GameSection;