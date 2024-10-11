// App.js
import React, {  useState, useEffect, Suspense, lazy } from 'react';

import styled, { keyframes } from 'styled-components';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Banner from './components/Hero/HeroSection';
import FartGridComponent from './components/FartGrid';
import TokenEconomicsSections from './components/TokenEconomics';
import MainBackground from './components/Background';
import PartnersSection from './components/MovingStrip';
import Roadmap from './components/Rodmap';
import HowToBuy from './components/HowToBuy';
import HallOfFame from './components/HallOfFame';
import { GlobalStyle } from './GlobalStyle';
import About from './components/About';
import CTASection from './components/CTASection';
import axios from 'axios';

// Lazy load the GameSection component
const GameSection = lazy(() => import('./components/GameSection'));

const AppContainer = styled.div`
  position: relative;
  z-index: 1;
`;

// Animations
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const colorChange = keyframes`
  0% { color: #4c8c2f; }
  50% { color: #8b4513; }
  100% { color: #4c8c2f; }
`;

// Styled components for the loading screen
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  background: rgba(76, 140, 47, 0.1);
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(76, 140, 47, 0.3);
`;

const LoadingText = styled.h2`
  font-family: 'Exo 2', sans-serif;
  font-size: 48px;
  font-weight: 800;
  color: #4c8c2f;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${bounce} 2s ease-in-out infinite, ${colorChange} 4s linear infinite;
`;

const LoadingSubText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #ffffff;
  margin-top: 20px;
`;

// Loading component
const ThematicLoadingComponent = () => (
  <LoadingContainer>
    <LoadingText>FartiLand</LoadingText>
    <LoadingSubText>Preparing a gassy adventure...</LoadingSubText>
  </LoadingContainer>
);

function App() {

  const [user, setUser] = useState('');
  useEffect(() => {
    const baseURL = 'https://tbackend.bojackbase.com/api';
    const api = axios.create({ baseURL });
    
    
  
  if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      const telegramUser = window.Telegram.WebApp.initDataUnsafe.user;
      const referralCode  = window.Telegram.WebApp.initDataUnsafe.start_param || null;
      if (telegramUser || telegramUser.username || telegramUser.first_name | telegramUser.last_name) {
        // Function to handle user fetching or creation
        const fetchOrCreateUser = async () => {
          try {
            // Check if user exists
            const response = await api.get(`/user/${telegramUser.id}`);
            if (response.data.username) {
              setUser(response.data);
            }
          } catch (error) {
            // Handle 404 (user not found)
            if (error.response && error.response.status === 404) {
              console.log("User not found, creating a new one...");
              try {
                if (referralCode){
                  if (telegramUser.username){
                    const createResponse = await api.post('/user', {
                      telegramId: telegramUser.id,
                      username: telegramUser.username,
                      referralUsername:referralCode
                    });
                  }
                  else if (telegramUser.first_name | telegramUser.last_name){
                    const createResponse = await api.post('/user', {
                      telegramId: telegramUser.id,
                      username: telegramUser.first_name +""+telegramUser.last_name,
                      referralUsername:referralCode
                    });
                  }
                  
                }else{
                  if(telegramUser.username){
                    const createResponse = await api.post('/user', {
                      telegramId: telegramUser.id,
                      username: telegramUser.username,
                    });
                  }
                  else if (telegramUser.first_name | telegramUser.last_name){
                    const createResponse = await api.post('/user', {
                      telegramId: telegramUser.id,
                      username: telegramUser.first_name +""+telegramUser.last_name,
                    });
                  }
                
                }
                // If user not found, create user

                if (createResponse.data.username) {
                  setUser(createResponse.data);
                } else {
                  throw new Error('Failed to create user');
                }
              } catch (createError) {
                console.error('Error creating user:', createError.message);
                const response_again = await api.get(`/user/${telegramUser.id}`);
            if (response_again.data.username) {
              setUser(response_again.data);
            }
              }
            } else {
              // Handle other errors (e.g., network issues)

              console.error('Error during user fetch:', error.message);
            }
          }
        };
  
        // Call the function to fetch or create the user
        fetchOrCreateUser();
        console.log(user.score)
      } else {
        console.error('Telegram Web App user is not available');
        setUser({ username: 'Guest', score: '0' });
      }
    } else {
      console.error('Telegram Web App is not available');
      setUser({ username: 'Guest', score: '0' });
    }
  
    // Cleanup the timer on component unmount
  }, []);
  
  return (
    <>
      <MainBackground/>
      <GlobalStyle/>
      <AppContainer>
        <NavBar />
        <Banner />
        <About/>
        <Suspense fallback={<ThematicLoadingComponent />}>
        <GameSection user={user} />
        </Suspense>
        <HallOfFame/>
        <FartGridComponent />
        <PartnersSection/>
        <Roadmap/>
        <TokenEconomicsSections />
        <CTASection/>
        <HowToBuy/>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
