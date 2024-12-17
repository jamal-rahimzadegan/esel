import styled from 'styled-components';

export const TriangleStyle = styled.div`
  .up {
    width: 0;
    height: 0;
    border-left: ${(props) => `${props.size} solid transparent`};
    border-right: ${(props) => `${props.size} solid transparent`};
    border-bottom: ${(props) => `${props.size} solid ` + props.theme[props.bgColor]};
  }

  .down {
    width: 0;
    height: 0;
    border-left: ${(props) => `${props.size} solid transparent`};
    border-right: ${(props) => `${props.size} solid transparent`};
    border-top: ${(props) => `${props.size} solid ` + props.theme[props.bgColor]};
  }

  .right {
    width: 0;
    height: 0;
    border-top: ${(props) => `${props.size} solid transparent`};
    border-bottom: ${(props) => `${props.size} solid transparent`};
    border-left: ${(props) => `${props.size} solid ` + props.theme[props.bgColor]};
  }

  .left {
    width: 0;
    height: 0;
    border-top: ${(props) => `${props.size} solid transparent`};
    border-bottom: ${(props) => `${props.size} solid transparent`};
    border-right: ${(props) => `${props.size} solid ` + props.theme[props.bgColor]};
  }
`;
