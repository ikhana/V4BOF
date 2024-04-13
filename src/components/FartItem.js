import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import like from "../assets/like.png";

const FartItemContainer = styled.div`
  background: url(${props => props.emoji}) no-repeat center center;
  background-size: cover;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  height: 250px;
  width: 100%;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 200px;
    padding: 20px;
    border-radius: 15px;
    width: 90%;
    margin: 0 auto;
  }
`;

const AudioButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
  position: relative;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const LikeCounterContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 2;

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    padding: 8px 12px;
    border-radius: 20px;
  }
`;

const LikeCounter = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #8b4513;
  font-family: 'Roboto', sans-serif;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const LikeIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 6px;
  }
`;

const walletBubbleAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const WalletAddressContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 16px;
  color: #8b4513;
  font-family: 'Roboto Mono', monospace;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  animation: ${walletBubbleAnimation} 3s infinite;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
  z-index: 2;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    bottom: 15px;
    padding: 8px 16px;
    font-size: 12px;
    border-radius: 20px;
    max-width: 80%;
  }
`;
const FartItem = ({ emoji, audioSrc, walletAddress }) => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isFartSoundPlaying, setIsFartSoundPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isFartSoundPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isFartSoundPlaying]);

  const handlePlayClick = () => {
    setIsFartSoundPlaying(!isFartSoundPlaying);
  };

  const handleLikeClick = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
    <FartItemContainer emoji={emoji}>
      <AudioButton onClick={handlePlayClick}>
        {isFartSoundPlaying ? '❚❚' : '▶'}
      </AudioButton>
      <audio ref={audioRef} src={audioSrc} />
      <LikeCounterContainer>
        <LikeCounter>
          <LikeIcon src={like} alt="Like" onClick={handleLikeClick} />
          {likes} Likes
        </LikeCounter>
      </LikeCounterContainer>
      <WalletAddressContainer>{walletAddress}</WalletAddressContainer>
    </FartItemContainer>
  );
};

export default FartItem;
