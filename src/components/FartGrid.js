import React, { useState,useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import FartItem from './FartItem';
import fartx1 from "../assets/farts/fart1.wav";
import fartx2 from "../assets/farts/fart2.wav";
import fartx3 from "../assets/farts/fart3.wav";
import fartx4 from "../assets/farts/fart4.wav";
import fartx5 from "../assets/farts/fart5.wav";
import fartx6 from "../assets/farts/fart6.wav";
import fartx7 from "../assets/farts/fart7.wav";
import fartx8 from "../assets/farts/fart8.wav";
import fartx9 from "../assets/farts/fart9.wav";
import fart1 from "../assets/farts/fart1.gif";
import fart2 from "../assets/farts/fart2.gif";
import fart3 from "../assets/farts/fart3.gif";
import fart4 from "../assets/farts/fart4.gif";
import fart5 from "../assets/farts/fart41.gif";
import fart6 from "../assets/farts/fart5.gif";
import fart7 from "../assets/farts/fart6.gif";
import fart8 from "../assets/farts/fart7.gif";

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

const FartGridContainer = styled.section`
  padding: 80px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 60px 10px;
  }
`;

const FartGridTitle = styled.h2`
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


const FartGridDescription = styled.p`
font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 60px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 40px;
    max-width: 90%;
  }
`;

const FartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 70px;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  font-family: 'Exo 2', sans-serif;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.2);
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

const AddFartButton = styled(Button)`
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FartGridComponent = () => {
  // Dummy data for fart items
  const fartItems = [
    { emoji: fart7, audioSrc: fartx1, walletAddress: "0x73C585A6D48390CA21223fFdE93D0bfAc90d7b4f" },
    { emoji: fart6, audioSrc: fartx2, walletAddress: "0x967738A92D194615018eD2553DAdAAcF78f9E0E6" },
    { emoji: fart5, audioSrc: fartx3, walletAddress: "0x96C43dbdE612101Ea1D53142316452F5e46F4738" },
    { emoji: fart4, audioSrc: fartx4, walletAddress: "0x807e419933110f7E9F90348c4D2734801ac70138" },
    { emoji: fart8, audioSrc: fartx5, walletAddress: "0x807e419933110f7E9F90348c4D2734801ac70138" },
    { emoji: fart1, audioSrc: fartx6, walletAddress: "0x807e419933110f7E9F90348c4D2734801ac70138" },
    { emoji: fart2, audioSrc: fartx7, walletAddress: "0x807e419933110f7E9F90348c4D2734801ac70138" },
    { emoji: fart3, audioSrc: fartx8, walletAddress: "0x807e419933110f7E9F90348c4D2734801ac70138" },
    { emoji: fart1, audioSrc: fartx9, walletAddress: "0x967738A92D194615018eD2553DAdAAcF78f9E0E6" },
    { emoji: fart2, audioSrc: fartx7, walletAddress: "0x807e419933110f7E9F90348c4D2734801ac70138" },
    { emoji: fart3, audioSrc: fartx8, walletAddress: "0x807e419933110f7E9F90348c4D2734801ac70138" },
    { emoji: fart1, audioSrc: fartx9, walletAddress: "0x967738A92D194615018eD2553DAdAAcF78f9E0E6" },
    { emoji: fart2, audioSrc: fartx7, walletAddress: "0x807e419933110f7E9F90348c4D2734801ac70138" },
    { emoji: fart3, audioSrc: fartx8, walletAddress: "0x807e419933110f7E9F90348c4D2734801ac70138" },
    { emoji: fart1, audioSrc: fartx9, walletAddress: "0x967738A92D194615018eD2553DAdAAcF78f9E0E6" },
  ];

  const [visibleItems, setVisibleItems] = useState(9);
  const [showMore, setShowMore] = useState(true);
  const fartGridRef = useRef(null);

  const handleSeeMoreClick = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
    setShowMore(visibleItems + 3 >= fartItems.length ? false : true);
  };

  const handleSeeLessClick = () => {
    setVisibleItems(9);
    setShowMore(true);
    fartGridRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <FartGridContainer ref={fartGridRef}>
      <FartGridTitle>The Fart Menagerie</FartGridTitle>
      <FartGridDescription>
      Explore below the uproarious collection of user-uploaded farts and press the like button if any of the farts tickle your fancy.
<br/>
<br/>
<br/>
Want your fart to be featured here? 
<br/>
<br/>
<br/>
Upload it on our Telegram channel and if it gathers at least 10 likes, we'll showcase it on the website for additional voting. Share your gaseous masterpiece, and let the community decide its fate both on Telegram and here.
   
      </FartGridDescription>
      <FartGrid>
        {fartItems.slice(0, visibleItems).map((item, index) => (
          <FartItem
            key={index}
            emoji={item.emoji}
            audioSrc={item.audioSrc}
            walletAddress={item.walletAddress}
          />
        ))}
      </FartGrid>
      <ButtonContainer>
        {visibleItems < fartItems.length && showMore && (
          <Button onClick={handleSeeMoreClick}>See More</Button>
        )}
        {visibleItems > 9 && (
          <Button onClick={handleSeeLessClick}>See Less</Button>
        )}
      </ButtonContainer>
      <AddFartButton>ADD YOUR FART(S)</AddFartButton>
    </FartGridContainer>
  );
};

export default FartGridComponent;
