// About.js
import React from 'react';
import styled from 'styled-components';
import logoVariation from '../assets/aboutlogo.png';

const AboutContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: fadeIn 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 60px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 40px;
  }
`;

const LogoVariation = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  animation: floatAnimation 3s ease-in-out infinite;

  @keyframes floatAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 60px;

  @media (max-width: 768px) {
    padding-left: 0;
    align-items: center;
    text-align: center;
  }
`;

const AboutTitle = styled.h2`
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
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.2), 0 0 8px rgba(76, 140, 47, 0.1), 1px 1px 0 #8b4513;
    -webkit-text-stroke: 0.5px #4c8c2f;
  }
`;

const AboutDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
  text-indent: 0;
  margin-left: 0;
  margin-right: 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <LeftColumn>
          <LogoVariation src={logoVariation} alt="Logo Variation" />
        </LeftColumn>
        <RightColumn>
          <AboutTitle>About $FARTI</AboutTitle>
          <AboutDescription>
          Farti Land ($FARTI) is a hilarious and unique meme project that celebrates the joy of flatulence. We believe that laughter is the best medicine, and our mission is to spread happiness and humor throughout the crypto world.
          </AboutDescription>
          <AboutDescription>
          With $FARTI, you can earn rewards for your gassy contributions and engage in a variety of fart-themed activities. From daily fart sound contests to exclusive NFT collections, we aim to create a fun and engaging ecosystem that unites people through the power of laughter.

          </AboutDescription>
          <AboutDescription>
          Join our community of fart enthusiasts and become a part of the most gas-tastic project in the crypto space! Let's make some noise and profit with every toot in the vibrant world of $FARTI.
          </AboutDescription>
        </RightColumn>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
