import styled from 'styled-components';
import { Card } from '../../index';

export const StyledDropDown = styled(Card)`
  height: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: ${({ width }) => width ?? '200px'};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  animation-name: ${({ isOpen }) => (isOpen ? 'openDrawer' : 'closeDrawer')};
  z-index: 2;

  @keyframes openDropDown {
    from {
      height: 0;
    }
    to {
      height: 700px;
    }
  }

  @keyframes closeDropDown {
    from {
      height: 700px;
    }
    to {
      height: 0;
    }
  }
`;
