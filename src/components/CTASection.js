// CTASection.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import logoVariation from '../assets/logo1.png';

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

const CTASectionContainer = styled.section`
  padding: 80px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CTAContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CTAText = styled.div`
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const CTAHeading = styled.h2`
  font-family: 'Exo 2', sans-serif;
  font-size: 48px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
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
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #8b4513, transparent);
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    font-size: 40px;
    margin-bottom: 15px;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(76, 140, 47, 0.3), 3px 3px 0 #8b4513;
    -webkit-text-stroke: 1.5px #4c8c2f;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 10px;
    text-shadow: 0 0 6px rgba(255, 255, 255, 0.4), 0 0 12px rgba(76, 140, 47, 0.2), 2px 2px 0 #8b4513;
    -webkit-text-stroke: 1px #4c8c2f;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 5px;
    letter-spacing: 2px;
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.2), 0 0 8px rgba(76, 140, 47, 0.1), 1px 1px 0 #8b4513;
    -webkit-text-stroke: 0.5px #4c8c2f;

    &::after {
      height: 2px;
      bottom: -5px;
    }
  }
`;
const CTADescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CTAButton = styled.button`
font-family: 'Exo 2', sans-serif;
padding: 12px 24px;
font-size: 32px;
font-weight: 600;
background-color: #ffcc00;
color: #ffffff;
border: none;
border-radius: 4px;
cursor: pointer;
transition: transform 0.3s ease;
margin: 0 10px;
position: relative;
overflow: hidden;
z-index: 1;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);

&:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.3);
}

&::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.4), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

&:hover::before {
  opacity: 1;
}

&::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent);
  transform: rotate(45deg);
  transition: transform 0.5s ease;
  z-index: -1;
}

&:hover::after {
  transform: rotate(135deg);
}

@media (max-width: 768px) {
  font-size: 16px;
  padding: 10px 20px;
  margin: 0 5px;
}
`;

const LogoVariation = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-top: 60px;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    max-width: 300px;
    margin-top: 40px;
  }
`;

const CTASection = () => {
  return (
    <CTASectionContainer>
      <CTAContent>
        <CTAText>
          <CTAHeading>Join the Fart Revolution!</CTAHeading>
          <CTADescription>
          Don’t miss out on the opportunity to be a part of the most hilarious and unique meme project ever created. 
<br/>
Buy $BOF now and let your farts be heard across the blockchain.
          </CTADescription>
        </CTAText>
        <CTAButton>Buy $BOF Now!</CTAButton>
        <LogoVariation src={logoVariation} alt="Logo Variation" />
      </CTAContent>
    </CTASectionContainer>
  );
};

export default CTASection;
