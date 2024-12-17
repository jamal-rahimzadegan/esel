import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {
    background: ${({ theme }) => theme.BACKGROUND};;
    color: ${({ theme }) => theme.PRIMARY_TEXT};;
    text-align: unset;
    line-height: normal;
    overscroll-behavior: none;
    scroll-behavior: smooth;
    transition: background 600ms;
    caret-color: ${({ theme }) => theme.APP};
    accent-color: ${({ theme }) => theme.APP};
  }

  a{
    text-decoration: none !important;
  }
  
  
  //-----removing chrome auto fill bg
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  //--------------------------------------------------
  .modal-content {
    background-color: ${(props) => props.theme.BACKGROUND};
  }
  

  th, tr {
    color: ${(props) => props.theme.PRIMARY_TEXT} !important;
  }

  select {
    background-color: ${(props) => props.theme.BLOCK_BG} !important;
    color: ${(props) => props.theme.PRIMARY_TEXT} !important;
  }

  //------------scrollbar-----------------------------------------------------
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.HOVER};
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

// * how to calculate responsive font: minFontSize + (maxFontSize - minFontSize) *(100vw - minScreenSize) / (breakpoint - minScreenSize)
