import React from 'react';
import styled from 'styled-components';
import TwitterIcon from '../assets/Twitter.png';
import TelegramIcon from '../assets/Send.png';
import logo from "../assets/footerlogo.png";

const FooterContainer = styled.footer`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
    min-height: auto;
  }
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterLogo = styled.img`
  width: 150px;
  height: auto;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const FooterNote = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const SocialIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const FartCloud = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: 0.8;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
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
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FartCloudLeft = styled(FartCloud)`
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
`;

const FartCloudRight = styled(FartCloud)`
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo src={logo} alt="Logo" />
        <FooterNote>
          &copy; {currentYear} Farti Land. All rights reserved.
        </FooterNote>
        <SocialLinksContainer>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <SocialIconWrapper>
              <SocialIcon src={TwitterIcon} alt="Twitter" />
            </SocialIconWrapper>
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <SocialIconWrapper>
              <SocialIcon src={TelegramIcon} alt="Telegram" />
            </SocialIconWrapper>
          </a>
        </SocialLinksContainer>
      </FooterContent>
      <FartCloudLeft />
      <FartCloudRight />
    </FooterContainer>
  );
};

export default Footer;