import React, { useState,  useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logoHeaderwhite.png';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
  z-index: 999;
  animation: ${fadeIn} 1s ease;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    flex-wrap: wrap;
    background-color: #3a6b24;
    backdrop-filter: none;
  }
`;

const Logo = styled.img`
  height: 130px;
  width: 80px;
  width: auto;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: 768px) {
    height: 80px;
    margin-right: 10px;
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
    width: 100%;
    height: calc(100vh - 80px);
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 20px;
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease;
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
    font-size: 20px;
  }
`;


const liquidAnimation = keyframes`
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -60%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
`;

const FartButton = styled.button`
  font-family: 'Exo 2', sans-serif;
  padding: 16px 32px;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 40%;
    transform: translate(-50%, -75%) rotate(0deg);
    animation: ${liquidAnimation} 6s linear infinite;
  }

  &:after {
    content: 'Play Now!';
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.5);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 12px 24px;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 16px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  margin-left: 10px;
  left: -15px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transition: transform 0.3s ease, opacity 0.3s ease;
  position: relative;
 
  &:nth-child(1) {
    transform: ${props => (props.isOpen ? 'rotate(45deg) translate(1px, 1px)' : 'none')};
  }

  &:nth-child(2) {
    opacity: ${props => (props.isOpen ? '0' : '1')};
  }

  &:nth-child(3) {
    transform: ${props => (props.isOpen ? 'rotate(-45deg) translate(1px, -1px)' : 'none')};
  }
`;

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFartButtonClick = () => {
    const gameSection = document.getElementById('game-section');
    if (gameSection) {
      gameSection.scrollIntoView({ behavior: 'smooth' });
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
        <Logo src={logo} alt="FARTI LAND Logo" />
        <MenuItems isOpen={isMenuOpen}>
          <MenuItem onClick={() => handleMenuItemClick('about')}>About</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('hall-of-fame')}>Hall of Fame</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('roadmap')}>Roadmap</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('tokenomics')}>Tokenomics</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('how-to-buy')}>How to Buy</MenuItem>
        </MenuItems>
       <FartButton onClick={handleFartButtonClick} />
        <HamburgerMenu onClick={handleMenuToggle}>
          <HamburgerLine isOpen={isMenuOpen} />
          <HamburgerLine isOpen={isMenuOpen} />
          <HamburgerLine isOpen={isMenuOpen} />
        </HamburgerMenu>
      </NavbarContainer>
      <MenuOverlay isOpen={isMenuOpen} onClick={handleMenuToggle} />
    </>
  );
};

export default Navbar;