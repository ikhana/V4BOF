// Roadmap.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fartAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const RoadmapContainer = styled.section`
  background-color: transparent;
  padding: 80px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 11%);
    background-repeat: repeat;
    background-size: 200px 200px;
    opacity: 0.3;
    animation: ${fartAnimation} 5s infinite;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const RoadmapTitle = styled.h2`
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
white-space: nowrap;
display: inline-block;

&::after {
content: '';
position: absolute;
bottom: -20px;
left: 0;
width: 100%;
height: 4px;
background: linear-gradient(to right, transparent, #4c8c2f, transparent);
opacity: 0.8;
}

@media (max-width: 1024px) {
  font-size: 40px;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(76, 140, 47, 0.3), 3px 3px 0 #8b4513;
  -webkit-text-stroke: 1.5px #4c8c2f;
}

@media (max-width: 768px) {
  font-size: 32px;
  margin-bottom: 30px;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.2), 0 0 8px rgba(76, 140, 47, 0.1), 1px 1px 0 #8b4513;
  -webkit-text-stroke: 0.5px #4c8c2f;
  
}

@media (max-width: 480px) {
  font-size: 24px;
  margin-bottom: 20px;
}
`;

const RoadmapPhases = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
  }
`;

const RoadmapPhase = styled.div`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100px;
    height: 100px;
    background-image: url('path/to/fart-icon.png');
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.2;
    transform: rotate(-30deg);
    animation: ${fartAnimation} 4s infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background-image: url('path/to/fart-icon.png');
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.2;
    transform: rotate(30deg);
    animation: ${fartAnimation} 6s infinite;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const PhaseTitle = styled.h3`
font-family: 'Exo 2', sans-serif;
font-size: 24px;
font-weight: 800;
color: #ffffff;
margin-bottom: 40px;
text-transform: uppercase;
letter-spacing: 4px;
text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(76, 140, 47, 0.4), 4px 4px 0 #8b4513;
-webkit-text-stroke: 2px #4c8c2f;
position: relative;
white-space: nowrap;
display: inline-block;

&::after {
content: '';
position: absolute;
bottom: -20px;
left: 0;
width: 100%;
height: 4px;
background: linear-gradient(to right, transparent, #4c8c2f, transparent);
opacity: 0.8;
}


@media (max-width: 1024px) {
  font-size: 20px;
  margin-bottom: 30px;
  
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(76, 140, 47, 0.3), 3px 3px 0 #8b4513;
  -webkit-text-stroke: 1.5px #4c8c2f;
}

@media (max-width: 768px) {
  font-size: 18px;
margin-bottom: 20px;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.2), 0 0 8px rgba(76, 140, 47, 0.1), 1px 1px 0 #8b4513;
  -webkit-text-stroke: 0.5px #4c8c2f;
  
}

@media (max-width: 480px) {
  font-size: 16px;
  margin-bottom: 10px;
}
`;

const PhaseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PhaseItem = styled.li`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin-bottom: 10px;
  padding: 8px 16px;
  font-weight: 400;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  color: #ffffff;
  background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 200%;
    height: 200%;
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.2), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 12px;
  }
`;

const FartBubble = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: 0.8;
  animation: ${fartAnimation} 4s infinite;
  pointer-events: none;

  &:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0.5s;
  }

  &:nth-child(2) {
    top: 40%;
    right: 20%;
    animation-delay: 1s;
  }

  &:nth-child(3) {
    bottom: 30%;
    left: 30%;
    animation-delay: 1.5s;
  }

  &:nth-child(4) {
    bottom: 10%;
    right: 10%;
    animation-delay: 2s;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const FartTrail = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 200px;
  height: 200px;
  background-image: url('path/to/fart-trail.png');
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.8;
  animation: ${fartAnimation} 5s infinite;
  transform: rotate(45deg);
  pointer-events: none;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    bottom: 10px;
    left: 10px;
  }
`;

const FartConfetti = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 150px;
  height: 150px;
  background-image: url('path/to/fart-confetti.png');
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.8;
  animation: ${fartAnimation} 4s infinite;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    top: 10px;
    right: 10px;
  }
`;
const Roadmap = () => {
  return (
    <RoadmapContainer>
      <RoadmapTitle>Fartastic Roadmap</RoadmapTitle>
      <RoadmapPhases>
        <RoadmapPhase>
          <PhaseTitle>FARTING PHASE ONE</PhaseTitle>
          <PhaseList>
            <PhaseItem>Community Building</PhaseItem>
            <PhaseItem>$BOF Contract Creation</PhaseItem>
            <PhaseItem>$BOF Token Marketing</PhaseItem>
            <PhaseItem>$BOF Contests for Community</PhaseItem>
            <PhaseItem>$BOF Presale on PinkSale</PhaseItem>
            <PhaseItem>Launch $BOF Staking Platform</PhaseItem>
            <PhaseItem>Partnerships with Fart-Friendly Projects</PhaseItem>
          </PhaseList>
        </RoadmapPhase>
        <RoadmapPhase>
          <PhaseTitle>FARTING Phase Two</PhaseTitle>
          <PhaseList>
            <PhaseItem>Launch on FARTRAYDIUM/Jupiter</PhaseItem>
            <PhaseItem>Coingecko &amp; CoinMarketCap Listings</PhaseItem>
            <PhaseItem>Tier 1 CEX Listings</PhaseItem>
            <PhaseItem>Major $BOF Marketing Campaign</PhaseItem>
            <PhaseItem>1,500+ $BOF Holders</PhaseItem>
            <PhaseItem>Develop $BOF Fart Game Prototype</PhaseItem>
            <PhaseItem>Expand $BOF Ecosystem with New Features</PhaseItem>
          </PhaseList>
        </RoadmapPhase>
        <RoadmapPhase>
          <PhaseTitle>FARTING Phase Three</PhaseTitle>
          <PhaseList>
            <PhaseItem>Binance and Coinbase Listing</PhaseItem>
            <PhaseItem>$100M $BOF Market Cap</PhaseItem>
            <PhaseItem>Fancy Merch for $BOF Fans</PhaseItem>
            <PhaseItem>10,000+ $BOF Holders</PhaseItem>
            <PhaseItem>$BOF NFT Collection Launch</PhaseItem>
            <PhaseItem>Release $BOF Fart Game Beta</PhaseItem>
            <PhaseItem>Host $BOF Fart Tournament with Prizes</PhaseItem>
          </PhaseList>
        </RoadmapPhase>
      </RoadmapPhases>
      <FartBubble />
      <FartBubble />
      <FartBubble />
      <FartBubble />
      <FartTrail />
      <FartConfetti />
    </RoadmapContainer>
  );
};

export default Roadmap;
