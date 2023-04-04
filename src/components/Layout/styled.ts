import styled, { createGlobalStyle } from 'styled-components';
import fontIconEOT from 'assets/fonts/jest-reporter.eot';
import fontIconTTF from 'assets/fonts/jest-reporter.ttf';
import fontIconWOFF from 'assets/fonts/jest-reporter.woff';

export const MasterLayout = styled.div``;

export const GuestLayout = styled.div``;

export const DashboardLayout = styled.div``;

export const FontIconLoader = createGlobalStyle`
  @charset "UTF-8";

  @font-face {
    font-family: "font-icons";
    font-weight: normal;
    font-style: normal;
    src: url(${fontIconEOT});
    src:
      url(${fontIconEOT}) format("embedded-opentype"),
      url(${fontIconTTF}) format("truetype"),
      url(${fontIconWOFF}) format("woff");
  }
`;
