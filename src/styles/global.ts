import styled, { createGlobalStyle } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars-2';

export const Scrollbar = styled(Scrollbars)`
  padding-right: 15px;
`;

export const AppStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    user-select: none;

    * {
      user-select: auto;
    }
  }
`;
