import React from 'react';
import { media, vw, rem } from 'utils/style-helper';
import { css } from "@emotion/react";

const Footer = (props: any) => {
  return (
    <footer css={wrap}>
      <h2>footer</h2>
    </footer>
  )
}

const wrap = css`
  width: 100%;
  background-color: #dadada;
  box-sizing: border-box;
  ${media.pc} {
    padding: 14px 20px;
    h2 {
      font-size: ${rem(18)};
    }
  }
  ${media.sp} {
    padding: ${vw(14)} ${vw(20)};
    h2 {
      font-size: ${vw(18)};
    }
  }
`

export default Footer