// PartnersSection.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import partnerLogo1 from '../assets/plogos/ps.png';
import partnerLogo2 from '../assets/plogos/ds.png';
import partnerLogo3 from '../assets/plogos/dv.png';
import partnerLogo4 from '../assets/plogos/dt.png';
import partnerLogo6 from '../assets/plogos/cmc.png';
import partnerLogo7 from '../assets/plogos/coingecko.png';
import partnerLogo8 from '../assets/plogos/solscan.png';


const moveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const PartnersSectionContainer = styled.section`
  padding: 60px 0;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 11%);
    background-size: 60px 60px;
    opacity: 0.8;
    z-index: 1;
    pointer-events: none;
  }
`;

const PartnersSectionTitleContainer = styled.div`
  text-align: center;
`;

const PartnersSectionTitle = styled.h2`
font-family: 'Exo 2', sans-serif;
font-size: 48px;
font-weight: 800;
color: #ffffff;
text-transform: uppercase;
margin-bottom: 40px;
text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(76, 140, 47, 0.4), 4px 4px 0 #8b4513;
-webkit-text-stroke: 2px #4c8c2f;
letter-spacing: 4px;
position: relative;
z-index: 2;
white-space: nowrap;
display: inline-block;

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


const PartnersLogoStrip = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  animation: ${moveAnimation} 30s linear infinite;
`;

const PartnerLogo = styled.img`
  width: 200px;
  height: auto;
  margin: 0 40px;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

const PartnersOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 11%);
  background-size: 80px 80px;
  opacity: 0.6;
  z-index: 2;
  pointer-events: none;
  animation: ${moveAnimation} 20s linear infinite reverse;
`;
const FartCloud = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: 0.8;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  animation: ${moveAnimation} 15s linear infinite;
  z-index: 3;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
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
    width: 80px;
    height: 80px;
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

const FartBubble = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  opacity: 0.8;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  animation: ${moveAnimation} 10s linear infinite;
  z-index: 4;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    opacity: 0.6;
  }
`;

const FartBubbleLeft = styled(FartBubble)`
  top: 30%;
  left: 10%;
`;

const FartBubbleRight = styled(FartBubble)`
  top: 70%;
  right: 10%;
`;

const FartParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
`;

const FartParticle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  opacity: 0.8;
  animation: ${moveAnimation} 5s linear infinite;

  &:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0.5s;
  }

  &:nth-child(2) {
    top: 40%;
    left: 30%;
    animation-delay: 1s;
  }

  &:nth-child(3) {
    top: 60%;
    left: 50%;
    animation-delay: 1.5s;
  }

  &:nth-child(4) {
    top: 80%;
    left: 70%;
    animation-delay: 2s;
  }

  &:nth-child(5) {
    top: 10%;
    left: 90%;
    animation-delay: 2.5s;
  }
`;

const PartnersSection = () => {
  return (
    <PartnersSectionContainer>
      <PartnersSectionTitleContainer>
      <PartnersSectionTitle>Our Fart-nerships</PartnersSectionTitle>
      </PartnersSectionTitleContainer>
    
      <PartnersLogoStrip>
        <PartnerLogo src={partnerLogo1} alt="Partner Logo 1" />
        <PartnerLogo src={partnerLogo2} alt="Partner Logo 2" />
        <PartnerLogo src={partnerLogo3} alt="Partner Logo 3" />
        <PartnerLogo src={partnerLogo7} alt="Partner Logo 4" />
        <PartnerLogo src={partnerLogo8} alt="Partner Logo 1" />
        <PartnerLogo src={partnerLogo3} alt="Partner Logo 3" />
        <PartnerLogo src={partnerLogo4} alt="Partner Logo 4" />
        <PartnerLogo src={partnerLogo6} alt="Partner Logo 5" />
      </PartnersLogoStrip>
      <PartnersOverlay />
      <FartCloudLeft />
      <FartCloudRight />
      <FartBubbleLeft />
      <FartBubbleRight />
      <FartParticles>
        {Array.from({ length: 5 }).map((_, index) => (
          <FartParticle key={index} />
        ))}
      </FartParticles>
    </PartnersSectionContainer>
  );
};

export default PartnersSection;
