import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo1.png';
import Ifart from "../assets/farts/Ifarted.wav";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  position: relative;
  z-index: 999;
  animation: ${fadeIn} 1s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
  }
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    right: 0;
    width: 250px;
    height: calc(100vh - 80px);
    max-height: 400px;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease;
    border-radius: 20px 0 0 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }
  }
`;


const MenuItem = styled.li`
  margin-left: 30px;
  cursor: pointer;
  font-family: 'Exo 2', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
  transition: color 0.3s ease;
  position: relative;
  background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    color: #ffcc00;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ffcc00;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    margin: 15px 0;
  }
`;

const FartButton = styled.button`
  padding: 10px 20px;
  font-family: 'Exo 2', sans-serif;
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
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
    margin-left: 0;
    margin-top: 10px;
  }
`;
const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 20px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  margin-right: 25px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #ffffff;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:nth-child(1) {
    transform: ${props => (props.isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
  }

  &:nth-child(2) {
    opacity: ${props => (props.isOpen ? '0' : '1')};
  }

  &:nth-child(3) {
    transform: ${props => (props.isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none')};
  }
`;

const FartMeter = styled.div`
  width: 150px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin-left: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), transparent);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const FartMeterFill = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: #ffcc00;
  transition: width 0.5s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 10%,
      transparent 11%
    );
    background-size: 20px 20px;
    animation: gasAnimation 2s linear infinite;
  }
`;

const FartMeterText = styled.div`
  margin-right: 40px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Exo 2', sans-serif;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    display: none;
  }
`;


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFartSoundPlaying, setIsFartSoundPlaying] = useState(false);
  const [fartMeterPercentage, setFartMeterPercentage] = useState(0);
  const audioRef = useRef(null);
  
  const handleMenuToggle = () => {
  setIsMenuOpen(!isMenuOpen);
  };
  
  const handleFartButtonClick = () => {
  if (fartMeterPercentage < 100) {
  setIsFartSoundPlaying(true);
  audioRef.current.play();
  setFartMeterPercentage(prevPercentage => prevPercentage + 20);
  setTimeout(() => {
  setIsFartSoundPlaying(false);
  console.log(isFartSoundPlaying)
  }, 2000);
  }
  if (fartMeterPercentage === 100) {
  setFartMeterPercentage(0);
  }
  };
  
  const handleMenuItemClick = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
  section.scrollIntoView({ behavior: 'smooth' });
  setIsMenuOpen(false);
  }
  };
  
  return (
  <>
  <NavbarContainer>
  <Logo src={logo} alt="Book of Farts Logo" />

  <MenuItems isOpen={isMenuOpen}>
  <MenuItem onClick={() => handleMenuItemClick('about')}>About</MenuItem>
  <MenuItem onClick={() => handleMenuItemClick('roadmap')}>Roadmap</MenuItem>
  <MenuItem onClick={() => handleMenuItemClick('tokenomics')}>Tokenomics</MenuItem>
  <MenuItem onClick={() => handleMenuItemClick('how-to-buy')}>How to Buy</MenuItem>
  <MenuItem onClick={() => handleMenuItemClick('hall-of-fame')}>Hall of Fame</MenuItem>
  </MenuItems>
  <FartButton onClick={handleFartButtonClick}>
  Fart Now!
  </FartButton>
  <FartMeter>
  <FartMeterFill percentage={fartMeterPercentage} />
  </FartMeter>
  <FartMeterText>Fart Meter: {fartMeterPercentage}%</FartMeterText>
  <audio ref={audioRef} src={Ifart} />
  <HamburgerMenu onClick={handleMenuToggle}>
  <HamburgerLine isOpen={isMenuOpen} />
  <HamburgerLine isOpen={isMenuOpen} />
  <HamburgerLine isOpen={isMenuOpen} />
  </HamburgerMenu>
  </NavbarContainer>
  </>
  );
  };
  
  export default Navbar;