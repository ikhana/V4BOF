// TokenEconomicsSection.js

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fartAnimation = keyframes`
  0% {
    transform: translateX(-50%) rotate(0deg);
  }
  25% {
    transform: translateX(-50%) rotate(10deg);
  }
  50% {
    transform: translateX(-50%) rotate(-10deg);
  }
  75% {
    transform: translateX(-50%) rotate(10deg);
  }
  100% {
    transform: translateX(-50%) rotate(0deg);
  }
`;

const floatAnimation = keyframes`
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

const TokenEconomicsSection = styled.section`
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1s ease;
`;
const SectionTitleContainer = styled.div`
  text-align: center;`;

const SectionTitle = styled.h2`
font-family: 'Exo 2', sans-serif;
font-size: 48px;
font-weight: 800;
color: #ffffff;
margin-bottom: 60px;
text-transform: uppercase;
text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(76, 140, 47, 0.4), 4px 4px 0 #8b4513;
-webkit-text-stroke: 2px #4c8c2f;
letter-spacing: 4px;
line-height: 1.2;
position: relative;
z-index: 2;
white-space: nowrap;
display: inline-block;

&::before {
content: '💨';
position: absolute;
top: -40px;
left: 50%;
transform: translateX(-50%);
font-size: 48px;
color: rgba(255, 255, 255, 0.6);
animation: ${fartAnimation} 2s infinite;
}

&::after {
content: '';
position: absolute;
bottom: -20px;
left: 0;
width: 100%;
height: 4px;
background: linear-gradient(to right, #8b4513, transparent);
opacity: 0.8;
}

@media (max-width: 1024px) {
font-size: 40px;
margin-bottom: 50px;
text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(76, 140, 47, 0.3), 3px 3px 0 #8b4513;
-webkit-text-stroke: 1.5px #4c8c2f;


&::before {
  font-size: 40px;
  top: -30px;
}
}

@media (max-width: 768px) {
font-size: 32px;
margin-bottom: 40px;
text-shadow: 0 0 6px rgba(255, 255, 255, 0.4), 0 0 12px rgba(76, 140, 47, 0.2), 2px 2px 0 #8b4513;
-webkit-text-stroke: 1px #4c8c2f;


&::before {
  font-size: 32px;
  top: -20px;
}
}

@media (max-width: 480px) {
font-size: 24px;
margin-bottom: 30px;
text-shadow: 0 0 4px rgba(255, 255, 255, 0.2), 0 0 8px rgba(76, 140, 47, 0.1), 1px 1px 0 #8b4513;
-webkit-text-stroke: 0.5px #4c8c2f;


&::before {
  font-size: 24px;
  top: -10px;
}
}
`;






const TokenEconomicsDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  span {
    color: #ffcc00;
    text-shadow: 0 0 5px rgba(255, 204, 0, 0.8);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 40px;
  }
`;


const TokenEconomicsContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const TokenDistributionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
`;

const TokenDistributionCard = styled.div`
  background-color: ${props => props.color};
  border-radius: 20px 20px 50% 20px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2));
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }
  }
`;


const TokenDistributionName = styled.p`
  font-family: 'Exo 2', sans-serif;
  font-size: 20px;
  color: #000000;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  line-height: 1.4;
  text-transform: uppercase;

  span {
    color: #ffcc00;
    text-shadow: 0 0 5px rgba(255, 204, 0, 0.8);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

const TokenDistributionPercentage = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  color: #000000;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const TokenDistributionIcon = styled.span`
  font-size: 64px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
`;

const FartCloud = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: 0.8;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  animation: ${floatAnimation} 3s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    height: 180px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    opacity: 0.6;
  }

  &::after {
    content: '';
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    background-color: rgba(255, 255, 255, 0.05);
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



const gasAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 20px 0;
  }
  50% {
    background-position: 40px 0;
  }
  75% {
    background-position: 20px 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const FartMeter = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  overflow: hidden;
  margin: 40px auto;
  position: relative;
  display: flex;
`;

const FartMeterFill = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: ${props => props.color};
  transition: width 0.5s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 10%,
      transparent 11%
    );
    background-size: 40px 40px;
    animation: ${gasAnimation} 2s linear infinite;
  }
`;

const FartMeterLabel = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => props.percentage}%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
`;

const FartMeterText = styled.p`
  margin-top: 10px;
  font-size: 24px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  text-align: center;
  position: relative;
  color: #ffffff;
  line-height: 1.6;
  background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::before {
    content: '💨';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 36px;
    color: rgba(255, 255, 255, 0.6);
    animation: ${fartAnimation} 2s infinite;
  }
`;

const TokenAllocationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 60px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 48px;
    color: rgba(255, 255, 255, 0.6);
    animation: ${floatAnimation} 3s ease-in-out infinite;
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const FartParticle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: ${fadeIn} 1s ease, ${floatAnimation} 2s linear infinite;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  animation-delay: ${props => props.delay}s;
  pointer-events: none;
`;

const TotalFartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 204, 0, 0.2), rgba(76, 175, 80, 0.1), rgba(33, 150, 243, 0.1), rgba(255, 235, 59, 0.1));
    opacity: 0.6;
    mix-blend-mode: overlay;
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const TotalFartsTitle = styled.h3`
  font-family: 'Exo 2', sans-serif;
  font-size: 48px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(76, 140, 47, 0.4), 2px 2px 0 #8b4513;
  -webkit-text-stroke: 2px #4c8c2f;
  position: relative;
  white-space: nowrap;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #8b4513, transparent);
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 15px;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(76, 140, 47, 0.3), 1px 1px 0 #8b4513;
    -webkit-text-stroke: 1px #4c8c2f;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 10px;
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.4), 0 0 5px rgba(76, 140, 47, 0.2), 1px 1px 0 #8b4513;
    -webkit-text-stroke: 0.5px #4c8c2f;
  }
`;


const TotalFartsCount = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 64px;
color: #ffcc00;
margin-bottom: 20px;
text-shadow: 0 0 5px rgba(255, 204, 0, 0.8);
animation: ${pulseAnimation} 2s infinite;
position: relative;
z-index: 2;

@media (max-width: 1024px) {
font-size: 56px;
}

@media (max-width: 768px) {
font-size: 48px;
margin-bottom: 15px;
}

@media (max-width: 480px) {
font-size: 24px;
margin-bottom: 10px;
}
`;
const TokenEconomicsSections = () => {
  const [fartParticles, setFartParticles] = useState([]);

  useEffect(() => {
    const generateFartParticles = () => {
      const particles = [];
      const particleCount = 20;

      for (let i = 0; i < particleCount; i++) {
        const top = Math.random() * window.innerHeight;
        const left = Math.random() * window.innerWidth;
        const delay = Math.random() * 2;

        particles.push({ top, left, delay });
      }

      setFartParticles(particles);
    };

    const interval = setInterval(generateFartParticles, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TokenEconomicsSection>
    <SectionTitleContainer>
        <SectionTitle>FARTONOMICS</SectionTitle>
      </SectionTitleContainer>
      <TokenEconomicsContent>
        <TokenEconomicsDescription>
          Discover the <span>hilarious</span> and <span>unique</span> tokenomics of our fart-tastic project!
        </TokenEconomicsDescription>
        <TokenDistributionContainer>
  <TokenDistributionCard color="#FF4081">
    <TokenDistributionIcon>🚀</TokenDistributionIcon>
    <TokenDistributionName>Presale farts</TokenDistributionName>
    <TokenDistributionPercentage>40%</TokenDistributionPercentage>
  </TokenDistributionCard>
  <TokenDistributionCard color="#4CAF50">
    <TokenDistributionIcon>💧</TokenDistributionIcon>
    <TokenDistributionName>Liquidity farts</TokenDistributionName>
    <TokenDistributionPercentage>20%</TokenDistributionPercentage>
  </TokenDistributionCard>
  <TokenDistributionCard color="#2196F3">
    <TokenDistributionIcon>🤝</TokenDistributionIcon>
    <TokenDistributionName>Marketing farts</TokenDistributionName>
    <TokenDistributionPercentage>15%</TokenDistributionPercentage>
  </TokenDistributionCard>
  <TokenDistributionCard color="#FFEB3B">
    <TokenDistributionIcon>👥</TokenDistributionIcon>
    <TokenDistributionName>Team/Advisors farts</TokenDistributionName>
    <TokenDistributionPercentage>10%</TokenDistributionPercentage>
  </TokenDistributionCard>
  <TokenDistributionCard color="#9C27B0">
    <TokenDistributionIcon>📈</TokenDistributionIcon>
    <TokenDistributionName>Exchange Listing farts</TokenDistributionName>
    <TokenDistributionPercentage>7.5%</TokenDistributionPercentage>
  </TokenDistributionCard>
  <TokenDistributionCard color="#FF5722">
    <TokenDistributionIcon>🏆</TokenDistributionIcon>
    <TokenDistributionName>Fart Competitions farts</TokenDistributionName>
    <TokenDistributionPercentage>7.5%</TokenDistributionPercentage>
  </TokenDistributionCard>
</TokenDistributionContainer>

<FartMeter>
  <FartMeterFill percentage={40} color="#FF4081">
    <FartMeterLabel percentage={40}></FartMeterLabel>
  </FartMeterFill>
  <FartMeterFill percentage={20} color="#4CAF50">
    <FartMeterLabel percentage={60}></FartMeterLabel>
  </FartMeterFill>
  <FartMeterFill percentage={15} color="#2196F3">
    <FartMeterLabel percentage={75}></FartMeterLabel>
  </FartMeterFill>
  <FartMeterFill percentage={10} color="#FFEB3B">
    <FartMeterLabel percentage={85}></FartMeterLabel>
  </FartMeterFill>
  <FartMeterFill percentage={7.5} color="#9C27B0">
    <FartMeterLabel percentage={92.5}></FartMeterLabel>
  </FartMeterFill>
  <FartMeterFill percentage={7.5} color="#FF5722">
    <FartMeterLabel percentage={100}></FartMeterLabel>
  </FartMeterFill>
</FartMeter>

        <FartMeterText>Fart-o-nomics: 100% Gassy Goodness!</FartMeterText>
        <TokenAllocationContainer></TokenAllocationContainer>
        <TotalFartsContainer>
          <TotalFartsTitle>Total Farts ($FARTI) Supply</TotalFartsTitle>
          <TotalFartsCount>1,000,000,000 $FARTI</TotalFartsCount>
        </TotalFartsContainer>
      </TokenEconomicsContent>
      <FartCloudLeft />
      <FartCloudRight />
      {fartParticles.map((particle, index) => (
        <FartParticle
          key={index}
          top={particle.top}
          left={particle.left}
          delay={particle.delay}
        />
      ))}
    </TokenEconomicsSection>
  );
};

export default TokenEconomicsSections;
