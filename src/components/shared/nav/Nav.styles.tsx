import styled, { css } from "styled-components";
import { device } from "../../../styles/media";

export const Nav = styled.div<{ home?: boolean }>`
  background-color: ${({ theme, home }) =>
    home ? theme.colors.red : theme.colors.blue};
  height: 80px;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  ${({ theme }) => theme.gridStyles.getContainerStyles()};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-decoration: none;
  margin: 0;
  font-weight: 500;
  font-size: 32px;
  line-height: 37.5px;

  &:hover {
    opacity: 0.8;
  }
`;

const sharedButtonStyles = css`
  ${({ theme }) => theme.fonts.link};
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 48px;
  padding: 8px 16px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Button = styled.a`
  ${sharedButtonStyles}

  @media ${device.lg} {
    display: none;
  }
`;

export const LargeButton = styled.a`
  display: none;

  @media ${device.lg} {
    display: flex;
    ${sharedButtonStyles}
  }
`;
