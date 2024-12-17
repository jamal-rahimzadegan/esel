import styled from 'styled-components';

export const TableStyle = styled.table`
  table-layout: fixed;
  width: 100%;
  display: table;
`;

export const TH = styled.th`
  padding: 8px 0;
  border: 2px double ${({ theme }) => theme['WHITE']};
  text-align: center;
  font-size: 12px;
  margin: 1px;
  width: ${({ width, i }) => (i === 0 ? '30px' : width)};
  background-color: ${({ headerBg, theme, i }) =>
    theme[i === 0 ? 'transparent' : i % 2 !== 0 ? 'BLOCK_BG' : 'INPUT_BG']};
`;

export const TD = styled.td`
  padding: 3px 0;
  border: 2px double ${({ theme }) => theme['WHITE']};
  text-align: center;
  width: ${({ width, i }) => (i === 0 ? '30px' : width)};
  background-color: ${({ headerBg, theme, i }) => theme[i % 2 !== 0 ? 'BLOCK_BG' : 'INPUT_BG']};
`;

export const TR = styled.tr``;
