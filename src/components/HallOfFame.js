import React, { useState, useRef, useEffect, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

import crown from '../assets/crwon.png';
import fartemoji1 from "../assets/farts/fart5.gif";
import fartemoji2 from "../assets/farts/fart6.gif";
import fartemoji3 from "../assets/farts/fart7.gif";
import fartaudio1 from "../assets/farts/fart5.wav";
import fartaudio2 from "../assets/farts/fart4.wav";
import fartaudio3 from "../assets/farts/fart2.wav";
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

const HallOfFameContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;


const HallOfFAmeTitleContainer = styled.div`
  text-align: center;
`;

const HallOfFameTitle = styled.h2`
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


const HallOfFameDescription = styled.p`
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
const PodiumContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
`;

const Podium = styled.div`
  width: 300px;
  height: ${props => props.height}px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0 20px;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  padding: 20px;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    margin: 20px 0;
  }
`;
const PodiumHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const PodiumRank = styled.div`
  font-family: 'Exo 2', sans-serif;
  font-size: 36px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const PrizeTag = styled.div`
  font-family: 'Exo 2', sans-serif;
  font-size: 24px;
  color: #ffcc00;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CrownIcon = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: -20px;
  }
`;

const PodiumName = styled.div`
  font-family: 'Exo 2', sans-serif;
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PodiumFartMeter = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const PodiumFartButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: rgba(255, 255, 255, 0);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const PodiumBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${props => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  z-index: -1;
  opacity: 0.1;
  border-radius: 10px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.3;
  }
`;

const PodiumAudio = styled.audio`
  display: none;
`;

const WalletAddressContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  word-wrap: break-word;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 8px;
    margin-top: 10px;
  }
`;
const PrizeDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #ffffff;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 10px;
    max-width: 90%;
  }
`;

const HallOfFame = () => {
  const topContributors = useMemo(() => [
    {
      name: 'Gassy Gus',
      fartMeter: 100,
      fartGif: fartemoji1,
      fartSound: fartaudio1,
      walletAddress: '0x1234567890123456789012345678901234567890',
      prize: '$1,000',
    },
    {
      name: 'Flatulent Frankie',
      fartMeter: 80,
      fartGif: fartemoji2,
      fartSound: fartaudio2,
      walletAddress: '0x0987654321098765432109876543210987654321',
      prize: '$500',
    },
    {
      name: 'Stinky Stella',
      fartMeter: 60,
      fartGif: fartemoji3,
      fartSound: fartaudio3,
      walletAddress: '0x1122334455667788990011223344556677889900',
      prize: '$250',
    },
  ], []);

  const [isPlaying, setIsPlaying] = useState(Array(3).fill(false));
  const audioRefs = useRef([]);

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, topContributors.length);
  }, [topContributors]);

  const togglePlay = (index) => {
    const newIsPlaying = [...isPlaying];
    newIsPlaying[index] = !newIsPlaying[index];
    setIsPlaying(newIsPlaying);

    if (newIsPlaying[index]) {
      audioRefs.current[index].play();
    } else {
      audioRefs.current[index].pause();
      audioRefs.current[index].currentTime = 0;
    }
  };

  const handleAudioEnd = (index) => {
    const newIsPlaying = [...isPlaying];
    newIsPlaying[index] = false;
    setIsPlaying(newIsPlaying);
  };

  const handleWalletAddressClick = (walletAddress) => {
    console.log("Wallet address clicked", { walletAddress });
  };

  return (
    <HallOfFameContainer>
      <HallOfFAmeTitleContainer>
      <HallOfFameTitle>Fart Hall of Fame</HallOfFameTitle>
      </HallOfFAmeTitleContainer>
   
      <HallOfFameDescription>
        Behold the legendary fart masters who have unleashed the most epic toots!
      </HallOfFameDescription>
      <PodiumContainer>
        {topContributors.map((contributor, index) => (
          <Podium
            key={index}
            height={400 - index * 50}
          >
            <PodiumBackground backgroundImage={contributor.fartGif} />
            <PodiumAudio
              ref={(el) => (audioRefs.current[index] = el)}
              src={contributor.fartSound}
              onEnded={() => handleAudioEnd(index)}
            />
            <PodiumHeader>
              {index === 0 && <CrownIcon src={crown} alt="Crown" />}
              <PodiumRank>{index + 1}</PodiumRank>
              <PrizeTag>{contributor.prize}</PrizeTag>
            </PodiumHeader>
            <PodiumName>{contributor.name}</PodiumName>
            <PodiumFartMeter>Fart-O-Meter: {contributor.fartMeter}%</PodiumFartMeter>
            <PodiumFartButton onClick={() => togglePlay(index)}>
              {isPlaying[index] ? '💨' : '🍑'}
            </PodiumFartButton>
            <WalletAddressContainer
              onClick={() => handleWalletAddressClick(contributor.walletAddress)}
            >
              {contributor.walletAddress}
            </WalletAddressContainer>
          </Podium>
        ))}
      </PodiumContainer>
      <PrizeDescription>
      Turn your gassy contributions into rewards! Every week, we announce the Hall of Fame Farts, selected based on community votes. <br/>The top three contributions will receive $1000, $500, and $250 for the 1st, 2nd, and 3rd positions respectively
      </PrizeDescription>
    </HallOfFameContainer>
  );
};

export default HallOfFame;
