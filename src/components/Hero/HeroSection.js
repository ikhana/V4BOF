// Banner.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import dexscreener from "../../assets/header/dexscreener.png"
import coinmarketcap from "../../assets/header/coinmarketcap.png"
import dexview from "../../assets/header/dexview.png"
import pinksale from "../../assets/header/pinksale.png"
import dexstools from "../../assets/header/dex.png"
import xlogo from "../../assets/header/twitter.png"
import tlogo from "../../assets/header/telegram.png"
import animatedLogo from "../../assets/herologo.png";



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

const BannerContainer = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4c8c2f;
  perspective: 1000px;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 80px 0;
  }
`;

const BannerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(76, 140, 47, 0.8), rgba(60, 110, 37, 0.8), rgba(76, 140, 47, 0.8));
  opacity: 0.8;
  mix-blend-mode: multiply;
  z-index: 1;
`;

const BannerPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px), radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
  opacity: 0.6;
  z-index: 2;
`;

const BannerLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 2px, transparent 2px, transparent 10px);
  opacity: 0.4;
  z-index: 3;
`;

const BannerDots = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.8;
  z-index: 4;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 5;
  max-width: 1200px;
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 90%;
    padding: 40px 0;
  }
`;
const LeftColumn = styled.div`
  flex: 2;
  padding-right: 0px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;




const CoinName = styled.h1`
  font-family: 'Exo 2', sans-serif;
  font-size: 72px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 8px;
  line-height: 1.2;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(76, 140, 47, 0.4), 4px 4px 0 #8b4513;
  -webkit-text-stroke: 2px #4c8c2f;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, transparent, #4c8c2f, transparent);
    opacity: 0.8;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, transparent, #8b4513, transparent);
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    font-size: 64px;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(76, 140, 47, 0.3), 3px 3px 0 #8b4513;
    -webkit-text-stroke: 1.5px #4c8c2f;
  }

  @media (max-width: 768px) {
    font-size: 48px;
    margin-bottom: 30px;
    text-shadow: 0 0 6px rgba(255, 255, 255, 0.4), 0 0 12px rgba(76, 140, 47, 0.2), 2px 2px 0 #8b4513;
    -webkit-text-stroke: 1px #4c8c2f;
  }

  @media (max-width: 480px) {
    font-size: 36px;
    margin-bottom: 20px;
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.2), 0 0 8px rgba(76, 140, 47, 0.1), 1px 1px 0 #8b4513;
    -webkit-text-stroke: 0.5px #4c8c2f;
  }
`;


const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;

  a {
    margin-right: 40px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 40px;

    a {
      margin-right: 20px;
      margin-bottom: 20px;
    }

    img {
      width: 50px;
      height: 50px;
    }
  }
`;
const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 40px;
  max-width: 600px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  position: relative;
   background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 2px solid #4c8c2f;
  border-radius: 10px;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 30px;
    max-width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;


const Button = styled.button`
  font-family: 'Exo 2', sans-serif;
  padding: 20px 40px;
  font-size: 28px;
  font-weight: 600;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: skewX(-30deg);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 16px 32px;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;


const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const ImageContainer = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
  margin-left: -0px;
  animation: ${bounceAnimation} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    margin-left: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


const FartCloud = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: 0.8;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
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
    width: 60%;
    height: 60%;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    opacity: 0.4;
  }
`;
const Banner = () => {
  return (
    <BannerContainer>
      <BannerBackground />
      <BannerPattern />
      <BannerLines />
      <BannerDots />
      <BannerContent>
        <LeftColumn>
          <CoinName>FARTILAND</CoinName>
          <SocialIcons>
            <a href="https://t.me/bookoffarts" target="_blank" rel="noopener noreferrer">
              <img src={tlogo} alt="Telegram" />
            </a>
            <a href="https://twitter.com/bookoffarts" target="_blank" rel="noopener noreferrer">
              <img src={xlogo} alt="Twitter" />
            </a>
            <a href="https://dexscreener.com/ethereum/0x1234567890" target="_blank" rel="noopener noreferrer">
              <img src={dexscreener} alt="Dexscreener" />
            </a>
            <a href="https://coinmarketcap.com/currencies/book-of-farts/" target="_blank" rel="noopener noreferrer">
              <img src={coinmarketcap} alt="CoinMarketCap" />
            </a>
            <a href="https://dexview.com/eth/0x1234567890" target="_blank" rel="noopener noreferrer">
              <img src={dexview} alt="Dexview" />
            </a>
            <a href="https://www.pinksale.finance/#/launchpad/0x1234567890" target="_blank" rel="noopener noreferrer">
              <img src={pinksale} alt="PinkSale" />
            </a>
            <a href="https://www.dextools.io/app/uniswap/pair-explorer/0x1234567890" target="_blank" rel="noopener noreferrer">
              <img src={dexstools} alt="Dextools" />
            </a>
          </SocialIcons>
          <Description>
          Farti Land (FARTI) is a hilarious and interactive memecoin project that celebrates the joy of flatulence. Dive into a world of laughter and earn meme coins for your gassy contributions!
          </Description>
          <ButtonContainer>
            <Button width="200px" backgroundColor="#8b4513">
              Buy $FARTI
            </Button>
            <Button width="200px" backgroundColor="#4b2c20">
              View Charts
            </Button>
          </ButtonContainer>
        </LeftColumn>
        <RightColumn>
          <ImageContainer>
            <Image src={animatedLogo} alt="Animated Logo" />
            <FartCloud />
          </ImageContainer>
        </RightColumn>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;

