import React from 'react';
import { media, vw, rem } from 'utils/style-helper';
import { css } from "@emotion/react";

const Header = (props: any) => {
  return (
    <header css={wrap}>
      <h1>header</h1>
    </header>
  )
}

const wrap = css`
  box-sizing: border-box;
  width: 100%;
  background-color: #dadada;
  ${media.pc} {
    padding: 14px 20px;
    h1 {
      font-size: ${rem(20)};
    }
  }
  ${media.sp} {
    padding: ${vw(14)} ${vw(20)};
    h1 {
      font-size: ${vw(20)};
    }
  }
`

export default Header