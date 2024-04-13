import styled, { keyframes } from 'styled-components';

// Keyframes for the bubble pulse
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const BrainBubble = styled.div`
  background-color: #fff;
  border-radius: 30px; // Adjust as needed for a more 'brain-like' appearance
  padding: 20px;
  min-width: 40px;
  max-width: 220px;
  min-height: 40px;
  margin: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: ${pulse} 2s infinite ease-in-out;

  &:before,
  &:after {
    content: "";
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
  }

  &:before {
    width: 44px;
    height: 44px;
    top: -12px;
    left: 50%; // Position it in the middle and use negative margin to adjust
    margin-left: -70px; // Adjust as needed
    box-shadow: 10px 0 0 -5px #fff; // Adjust for a lobe-like appearance
  }

  &:after {
    width: 44px;
    height: 44px;
    bottom: -12px;
    right: 50%; // Position it in the middle and use negative margin to adjust
    margin-right: -70px; // Adjust as needed
    box-shadow: -10px 0 0 -5px #fff; // Adjust for a lobe-like appearance
  }
`;

// Text within the brain bubble
const BrainText = styled.p`
  color: #007bff; // This should be the text color you desire
  font-family: 'Press Start 2P', cursive; // This should be the font family you desire
  font-size: 1rem; // Adjust the size as needed
`;

// BrainBubble component with text
const BrainThoughtBubble = ({ text }) => (
  <BrainBubble>
    <BrainText>{text}</BrainText>
  </BrainBubble>
);

export default BrainThoughtBubble;
