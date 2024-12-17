import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

export default function Test() {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') router.replace('/home');
  }, []);

  return (
    <StyledTest>
      <p>test page</p>
      <div className="icon-container">
        <i />
      </div>
    </StyledTest>
  );
}

const StyledTest = styled.div`
  .icon-container {
    position: relative;

    i {
      margin: 0;
      padding: 0;
      list-style: none;
      position: absolute;
      top: 0;
      height: 44px;
      display: block;
      left: 0;
      width: 46px;
      background: url(https://www.w3schools.com/css/img_navsprites_hover.gif) 0 0;
    }
  }
`;
