import React from 'react';
import styled, { keyframes } from 'styled-components';
import BrainThoughtBubble from './ThoughtBuble';

const ComicSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #007bff; // Primary background color

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const NPCImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px; // Add margin for mobile layout

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0; // Reset margin for desktop layout
  }
`;

const MediaContainer = styled.div`
  width: 80%;
  max-width: 700px;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  
  margin-top: 70px;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;


const DialogueBox = styled.div`
  width: 100%;
  padding: 20px;

  border-radius: 10px;
  background-color: #007bff; // Off-White background for the dialogue box

  @media (min-width: 768px) {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const jump = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;


const ActionButton = styled.button`
  background-color: #99914b;
  color: #f9f9f9;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  align-self: center;
  margin-top: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  animation: ${jump} 1s ease-in-out infinite;
  transform-origin: bottom center;

  &:hover {
    background-color: #b3a159;
    animation: none; // Stop the jumping animation on hover
  }

  &:active {
    transform: translateY(2px); // Push the button down on click
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2); // Shorten the shadow on click
  }
`;

const VideoContainer = styled.div`
  flex-basis: 40%;
  max-width: 500px;
  margin: 1rem;
  position: relative;
  @media (max-width: 768px) {
    flex-basis: 80%;
    max-width: 80%;
  }
`;

const NPCVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
  loop: true;
  autoplay: true;
  muted: true;
 
`;

const ComicPanel = ({ mediaType, mediaSrc, question, answer, ctaText, ctaLink }) => (
  <ComicSection>
    <MediaContainer>
      {mediaType === 'video' ? (
        <VideoContainer><NPCVideo src={mediaSrc} autoPlay loop muted /></VideoContainer>
      ) : (
        <NPCImage src={mediaSrc} alt="NPC" />
      )}
    </MediaContainer>
    <DialogueBox>
      <BrainThoughtBubble text={question} />
      <BrainThoughtBubble text={answer} />
      <ActionButton onClick={() => window.open(ctaLink, '_blank')}>{ctaText}</ActionButton>
    </DialogueBox>
  </ComicSection>
);

export default ComicPanel;
