// mainBackground.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const floatingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background-color: #5fa03a;
  perspective: 1000px;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(95, 160, 58, 0.8), rgba(76, 140, 47, 0.8), rgba(95, 160, 58, 0.8));
  opacity: 0.8;
  mix-blend-mode: multiply;
  z-index: 1;
  animation: ${floatingAnimation} 8s ease-in-out infinite;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px), radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: 0 0, 25px 25px;
  opacity: 0.6;
  z-index: 2;
  animation: ${rotateAnimation} 60s linear infinite;
`;

const BackgroundLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 2px, transparent 2px, transparent 10px);
  opacity: 0.4;
  z-index: 3;
  animation: ${floatingAnimation} 12s ease-in-out infinite reverse;
`;

const BackgroundDots = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.8;
  z-index: 4;
  animation: ${rotateAnimation} 80s linear infinite reverse;
`;

const FartCloud = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  opacity: 0.8;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  animation: ${floatingAnimation} 4s ease-in-out infinite;
  z-index: 5;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    opacity: 0.6;
  }

  &::after {
    content: '';
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    opacity: 0.4;
  }
`;

const FartCloudLeft = styled(FartCloud)`
  top: 20%;
  left: -100px;
`;

const FartCloudRight = styled(FartCloud)`
  top: 60%;
  right: -100px;
`;

const BackgroundBubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
`;

const Bubble = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  opacity: 0.8;
  animation: ${floatingAnimation} ${props => props.duration}s ease-in-out infinite;

  &:nth-child(1) {
    top: 10%;
    left: 20%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    top: 30%;
    right: 10%;
    animation-delay: 2s;
  }

  &:nth-child(3) {
    bottom: 20%;
    left: 30%;
    animation-delay: 4s;
  }

  &:nth-child(4) {
    bottom: 10%;
    right: 20%;
    animation-delay: 6s;
  }
`;

const BackgroundLines2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 2px, transparent 2px, transparent 10px);
  opacity: 0.4;
  z-index: 7;
  animation: ${floatingAnimation} 10s ease-in-out infinite;
`;

const BackgroundGlowingOrbs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
`;

const GlowingOrb = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: 0.6;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1);
  animation: ${floatingAnimation} ${props => props.duration}s ease-in-out infinite;

  &:nth-child(1) {
    top: 15%;
    left: 40%;
    animation-delay: 1s;
  }

  &:nth-child(2) {
    bottom: 25%;
    right: 30%;
    animation-delay: 3s;
  }
  `;
  
  const MainBackground = () => {
  return (
  <BackgroundContainer>
  <BackgroundGradient />
  <BackgroundPattern />
  <BackgroundLines />
  <BackgroundDots />
  <FartCloudLeft />
  <FartCloudRight />
  <BackgroundBubbles>
  <Bubble size={60} duration={8} />
  <Bubble size={40} duration={12} />
  <Bubble size={80} duration={10} />
  <Bubble size={50} duration={6} />
  </BackgroundBubbles>
  <BackgroundLines2 />
  <BackgroundGlowingOrbs>
  <GlowingOrb duration={6} />
  <GlowingOrb duration={8} />
  </BackgroundGlowingOrbs>
  </BackgroundContainer>
  );
  };
  
  export default MainBackground;