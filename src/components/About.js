import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
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


const YouTubeContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 60px;
  padding-top: 50.625%; /* 16:9 aspect ratio */
  background-color: #000;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 40px;
    padding-top: 177.78%; /* 9:16 aspect ratio for mobile */
  }
`;

const StyledYouTube = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
    order: 2;
  }
`;

const LogoVariationContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 0 auto;
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
    margin-top: 40px;
  }
`;

const LogoVariation = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
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

const LogoVariationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    opacity: 1;
  }
`;

const LogoVariationText = styled.p`
  font-family: 'Exo 2', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${LogoVariationOverlay}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FartCloudLeft = styled.div`
  position: absolute;
  top: 20%;
  left: -100px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: 0.8;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  animation: floatAnimation 4s ease-in-out infinite;
  z-index: -1;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    top: 10%;
    left: -50px;
  }
`;

const FartCloudRight = styled.div`
  position: absolute;
  bottom: 20%;
  right: -100px;
  width: 250px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: 0.8;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  animation: floatAnimation 5s ease-in-out infinite reverse;
  z-index: -1;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    bottom: 10%;
    right: -50px;
  }
`;
const About = () => {
  const isMobile = window.innerWidth <= 768;

  const desktopVideoId = 'q8PO63nCNt4'; // Your desktop video ID
  const mobileVideoId = 'kOHg3rG_vY0'; // Your mobile video ID

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      playlist: isMobile ? mobileVideoId : desktopVideoId, // Required for looping
    },
  };

  return (
    <AboutContainer id='about'>
      <YouTubeContainer>
        <StyledYouTube
          videoId={isMobile ? mobileVideoId : desktopVideoId}
          opts={opts}
        />
      </YouTubeContainer>
      <AboutContent>
        <LeftColumn>
          <LogoVariationContainer>
            <LogoVariation src={logoVariation} alt="Logo Variation" />
            <LogoVariationOverlay>
              <LogoVariationText>Frens I am to the moon</LogoVariationText>
            </LogoVariationOverlay>
          </LogoVariationContainer>
        </LeftColumn>
        <RightColumn>
          <AboutTitle>About $FARTI</AboutTitle>
          <AboutDescription>
            We believe that laughter is the best medicine, and our mission is to spread happiness and humor throughout the crypto world.
          </AboutDescription>
          <AboutDescription>
            With $FARTI, you can earn rewards for your gassy contributions and engage in a variety of fart-themed activities. From daily fart sound contests to exclusive NFT collections, we aim to create a fun and engaging ecosystem that unites people through the power of laughter.
          </AboutDescription>
          <AboutDescription>
            Join our community of fart enthusiasts and become a part of the most gas-tastic project in the crypto space! Let's make some noise and profit with every toot in the vibrant world of $FARTI.
          </AboutDescription>
        </RightColumn>
      </AboutContent>
      <FartCloudLeft />
      <FartCloudRight />
    </AboutContainer>
  );
};

export default About;
