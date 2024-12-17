import styled from 'styled-components';

export const MessageBox = styled.section`
  transition: all 0.2s;
  height: ${({ isConnected }) => (isConnected ? 0 : 50)}px;
  overflow: hidden;
  background: ${({ theme }) => theme.RED};
  color: ${({ theme }) => theme.WHITE};
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
`;
