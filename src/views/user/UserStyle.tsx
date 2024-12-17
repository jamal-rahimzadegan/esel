import styled from 'styled-components';
import Card from 'components/core/Card/Card';

export const ContractorImgContainer = styled(Card)`
  position: absolute;
  z-index: 0;
  bottom: 30px;
`;

export const YellowFooter = styled(Card)`
  height: 15%;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: ${(props) => props.theme.APP};
  display: flex;
  align-items: center;
  justify-content: center;
`;
