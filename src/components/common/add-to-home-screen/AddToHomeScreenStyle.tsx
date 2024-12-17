import styled from 'styled-components';

export const InstallContainer = styled.div`
  padding: 10px;
  position: fixed;
  bottom:25px;
  right: 10px;
  left: 10px;
  border-radius: 10px;
  z-index: 1000;
  background-color: ${({ theme }) => theme.CARD_BG};
  width: 300px;
  margin:auto;
  box-shadow: 0 8px 5px 2px ${({ theme }) => theme['SHADOW']};

`;

export const InstallBtn = styled.button`
  width:120px;
  height:40px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.APP};
  font-size: 12px;
  font-weight: bold;
`;
