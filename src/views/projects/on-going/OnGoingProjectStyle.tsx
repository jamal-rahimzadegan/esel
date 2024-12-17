import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  overflow-x: hidden;

  table {
    width: 100%;
    margin: 10px 0;

    thead {
      width: 100%;

      :nth-child(1) {
        font-weight: bold;
        font-size: 15px;
        background: ${({ theme }) => theme.SHADOW};
      }
    }

    th {
      width: 100px;
    }

    th,
    td {
      font-size: 13px;
      padding: 5px;
      border: 1px solid ${({ theme }) => theme.WHITE};
      color: ${({ theme }) => theme.PRIMARY_TEXT};
    }
  }
`;
