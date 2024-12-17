import styled from 'styled-components';
import { Card } from 'components';

const handleSizes = (size) => (size * 100) / 12 + '%';

export const StyledColumn = styled(Card)`
  // Extra Small devices (landscape phones, 576px and up)
  @media (max-width: 576px) {
    width: ${({ xs }) => handleSizes(xs)};
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    width: ${({ sm }) => handleSizes(sm)};
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: ${({ md }) => handleSizes(md)};
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    width: ${({ lg }) => handleSizes(lg)};
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    width: ${({ xl }) => handleSizes(xl)};
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    width: ${({ xxl }) => handleSizes(xxl)};
  }
`;
