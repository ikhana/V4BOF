import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:wght@400;500;600;700&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #f5f5f5;
    background-color: #1a1a1a;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bangers', cursive;
    font-weight: normal;
    margin-bottom: 1rem;
    line-height: 1.2;
    color: #ff8c00;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
  }

  h1 {
    font-size: 72px;

    @media (max-width: 768px) {
      font-size: 48px;
    }
  }

  h2 {
    font-size: 64px;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }

  h3 {
    font-size: 48px;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  h4 {
    font-size: 36px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  h5 {
    font-size: 28px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  h6 {
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: #ff8c00;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffa500;
    }
  }

  button {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    padding: 12px 24px;
    border: none;
    border-radius: 50px;
    background-color: #ff8c00;
    color: #1a1a1a;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ffa500;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 10px 20px;
    }
  }

  input, textarea, select {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #555;
    border-radius: 4px;
    background-color: #333;
    color: #f5f5f5;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #ff8c00;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;


