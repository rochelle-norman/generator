import { css } from "styled-components";
import { device } from "../media";

export const h1 = css`
  font-family: "Aktiv Grotesk Blk";
  font-size: 46px;
  line-height: 59px;
  font-weight: 900;

  @media ${device.md} {
    font-size: 76px;
    line-height: 97px;
  }

  @media ${device.lg} {
    font-size: 90px;
    line-height: 115px;
  }
`;

export const h2 = css`
  font-family: "Aktiv Grotesk VF";
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  @media ${device.md} {
    font-size: 40px;
    line-height: 51px;
  }

  @media ${device.lg} {
    font-size: 48px;
    line-height: 61px;
  }
`;

export const h3 = css`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 37.5px;
  font-weight: 400;

  @media ${device.md} {
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
  }
`;

export const body = css`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  line-height: 28.13px;
  font-weight: 400;

  @media ${device.lg} {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const button = css`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 23.44px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;

  @media ${device.lg} {
    font-size: 55px;
    line-height: 64.45px;
    letter-spacing: 2px;
  }
`;

export const link = css`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 18.75px;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  font-weight: 400;
`;

export const label = css`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1.5px;
  font-weight: 400;
`;
