// HowToBuy.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWallet, FaCoins, FaExchangeAlt } from 'react-icons/fa';

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

const HowToBuyContainer = styled.section`
  background-color: transparent;
  padding: 80px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out;

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
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;



const HowToBuyTitle = styled.h1`
  font-family: 'Exo 2', sans-serif;
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 60px;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(76, 140, 47, 0.4), 4px 4px 0 #8b4513;
  -webkit-text-stroke: 2px #4c8c2f;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  z-index: 1;
  white-space: nowrap;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(5deg);
    width: 120%;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    z-index: -1;
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

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;
const Step = styled.div`
  flex-basis: 30%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 40px;
    padding: 30px;
  }
`;
const StepIcon = styled.div`
  font-size: 64px;
  color: ${props => props.color};
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.hoverColor};
  }
`;

const StepTitle = styled.h3`
  font-family: 'Exo 2', sans-serif;
  font-size: 24px;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StepDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #ffffff;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const HowToBuyButton = styled.button`
  padding: 16px 32px;
  font-family: 'Exo 2', sans-serif;
  font-size: 20px;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 60px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
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

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 12px 24px;
    margin-top: 40px;
  }
`;

const HowToBuy = () => {
  return (
    <HowToBuyContainer>
      <HowToBuyTitle>How to Buy $BOF</HowToBuyTitle>
      <StepContainer>
      <Step>
  <StepIcon color="#8b4513" hoverColor="#a0522d">
    <FaWallet />
  </StepIcon>
  <StepTitle>Step 1: Create a Wallet</StepTitle>
  <StepDescription>
    Download a wallet like Phantom from the App Store or Google Play Store.
    For desktop users, download the Google Chrome extension.
  </StepDescription>
</Step>
        <Step>
          <StepIcon color="#ffc107" hoverColor="#ffd54f">
            <FaCoins />
          </StepIcon>
          <StepTitle>Step 2: Have SOL in Your Wallet</StepTitle>
          <StepDescription>
            Ensure you have SOL in your wallet to switch to $BOF. You can buy SOL
            from an exchange or cross-chain swap and send it to your wallet.
          </StepDescription>
        </Step>
        <Step>
          <StepIcon color="#2196f3" hoverColor="#64b5f6">
            <FaExchangeAlt />
          </StepIcon>
          <StepTitle>Step 3: Switch SOL for $BOF</StepTitle>
          <StepDescription>
            Connect to Radium at radium.io. Paste the $BOF token address into Radium
            and confirm the swap. Sign the wallet signature when prompted.
          </StepDescription>
        </Step>
      </StepContainer>
      <HowToBuyButton>Buy $BOF Now!</HowToBuyButton>
    </HowToBuyContainer>
  );
};

export default HowToBuy;