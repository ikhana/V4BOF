import React, { useState, useEffect } from 'react';
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
    flex-wrap: nowrap;
    background-color: #3a6b24;
    backdrop-filter: none;
  }
`;

const Logo = styled.img`
  height: 130px;
  width: auto;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: 768px) {
    height: 50px;
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
    transform: ${props => (props.isopen ? 'translateX(0)' : 'translateX(100%)')};
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

const gooeyEffect = keyframes`
  0% {
    --a: 0%;
    --x: 50;
    --y: 50;
  }
  20% {
    --a: 100%;
    --x: 0;
    --y: 50;
  }
  40% {
    --a: 0%;
    --x: 50;
    --y: 100;
  }
  60% {
    --a: 100%;
    --x: 100;
    --y: 50;
  }
  80% {
    --a: 0%;
    --x: 50;
    --y: 0;
  }
  100% {
    --a: 100%;
    --x: 0;
    --y: 50;
  }
`;

const FartButton = styled.button`
  --a: 10%;
  --hue: 110deg;
  --x: 50;
  --y: 50;
  --button: hsl(var(--hue), 66%, 20%);
  --edge: 20px;
  --size: 1.6em;
  
  background: transparent;
  color: #ffffff;
  font-size: 1.6em;
  font-family: 'Exo 2', sans-serif;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
  position: relative;
  padding: calc(var(--size)) calc(var(--size)*1.5);
  animation: ${gooeyEffect} 8s ease-in-out infinite;
  transition: 
    --a .5s ease-in-out, 
    scale var(--spring-duration) var(--spring-easing);
  scale: 0.92;
  isolation: isolate;

  &:before {
    content: "";
    position: absolute;
    inset: 0em;
    filter: blur(20px) url(#goo) drop-shadow(0 .25em .5em hsla(0deg, 0%, 0%, 0.8)); 
    background-image:linear-gradient(0deg,var(--button),var(--button)),
      radial-gradient(
        50% 80% at calc(var(--x) * 1%) calc(var(--y) * 1%),
        hsla(var(--hue), 77%, 50%, var(--a)) 0%,
        transparent 90%
      );
    background-clip: content-box, border-box;
    padding: 24px;
    z-index: -1;
    border: inherit;
    animation: ${gooeyEffect} 8s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    font-size: 1.2em;
    --size: 1.8em;
    animation: ${gooeyEffect} 8s ease-in-out infinite;
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
  margin-right: 10px;
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
    transform: ${props => (props.isopen ? 'rotate(45deg) translate(1px, 1px)' : 'none')};
  }

  &:nth-child(2) {
    opacity: ${props => (props.isopen ? '0' : '1')};
  }

  &:nth-child(3) {
    transform: ${props => (props.isopen ? 'rotate(-45deg) translate(1px, -1px)' : 'none')};
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
  display: ${props => (props.isopen ? 'block' : 'none')};
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
        <MenuItems isopen={isMenuOpen ? 'true' : undefined}>
          <MenuItem onClick={() => handleMenuItemClick('about')}>About</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('hall-of-fame')}>Hall of Fame</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('roadmap')}>Roadmap</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('tokenomics')}>Tokenomics</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('how-to-buy')}>How to Buy</MenuItem>
        </MenuItems>
        <FartButton onClick={handleFartButtonClick}>
          Start Farting Now!
        </FartButton>
        <HamburgerMenu onClick={handleMenuToggle}>
        <HamburgerLine isopen={isMenuOpen ? 'true' : undefined} />
<HamburgerLine isopen={isMenuOpen ? 'true' : undefined} />
<HamburgerLine isopen={isMenuOpen ? 'true' : undefined} />

        </HamburgerMenu>
      </NavbarContainer>
      <MenuOverlay isopen={isMenuOpen ? 'true' : undefined} onClick={handleMenuToggle} />

      
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="goo" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 1"></feFuncA>
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
          <feComponentTransfer>
            <feFuncA type="table" tableValues="-5 11"></feFuncA>
          </feComponentTransfer>
        </filter>
      </svg>
    </>
  );
};

export default Navbar;
