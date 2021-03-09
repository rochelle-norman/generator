import { css } from "styled-components";
import { device } from "./media";
import * as fonts from "./styleGuide/fonts";

const colors = {
  black: "#151515",
  white: "#ffffff",
  red: "#EC404A",
  blue: "#4D46FF",
  pink: "#FF9BFF",
};

const gridValues = {
  sm: {
    gutter: 1, // 16px
    padding: 1,
    maxWidth: "100%",
  },
  md: {
    gutter: 1,
    padding: 1,
    maxWidth: "100%",
  },
  lg: {
    gutter: 1.5, // 24px
    padding: 1.5,
    maxWidth: "78rem", // 1248px
  },
};

const gridStyles: any = {
  getContainerStyles: () => {
    return css`
      width: 100%;
      padding-left: ${gridValues.sm.padding}rem;
      padding-right: ${gridValues.sm.padding}rem;
      box-sizing: border-box;

      @media ${device.lg} {
        max-width: ${gridValues.lg.maxWidth};
        padding-left: ${gridValues.lg.padding}rem;
        padding-right: ${gridValues.lg.padding}rem;
        margin-left: auto;
        margin-right: auto;
      }
    `;
  },
  getRowStyles: () => {
    return css`
      display: flex;
      flex-wrap: wrap;
      margin-left: ${0 - gridValues.sm.gutter / 2}rem;
      margin-right: ${0 - gridValues.sm.gutter / 2}rem;

      @media ${device.lg} {
        margin-left: ${0 - gridValues.lg.gutter / 2}rem;
        margin-right: ${0 - gridValues.lg.gutter / 2}rem;
      }
    `;
  },
  getColStyles: (
    sm = 12,
    md = 12,
    lg = 12,
    offsetSm = 0,
    offsetMd = 0,
    offsetLg = 0,
    totalSm = 12,
    totalMd = 12,
    totalLg = 12,
  ) => {
    return css`
      box-sizing: border-box;
      padding-left: ${gridValues.sm.gutter / 2}rem;
      padding-right: ${gridValues.sm.gutter / 2}rem;
      flex-basis: ${100 / (totalSm / sm)}%;
      max-width: ${100 / (totalSm / sm)}%;
      margin-left: ${100 / (totalSm / offsetSm)}%;

      @media ${device.md} {
        flex-basis: ${100 / (totalMd / md)}%;
        max-width: ${100 / (totalMd / md)}%;
        margin-left: ${100 / (totalMd / offsetMd)}%;
      }

      @media ${device.lg} {
        padding-left: ${gridValues.lg.gutter / 2}rem;
        padding-right: ${gridValues.lg.gutter / 2}rem;
        flex-basis: ${100 / (totalLg / lg)}%;
        max-width: ${100 / (totalLg / lg)}%;
        margin-left: ${100 / (totalLg / offsetLg)}%;
      }
    `;
  },
};

const underline = css`
  &:after {
    display: block;
    content: "";
    border-bottom: solid 0.063rem ${({ theme }) => theme.colors.red};
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 250ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(0);
  }
`;

const theme = {
  colors,
  gridValues,
  gridStyles,
  fonts,
  underline,
};

export default theme;
