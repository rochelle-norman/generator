import styled from "styled-components";
import { device } from "../../styles/media";
import { ReactComponent as Icon } from "../../assets/icons/generate.svg";

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  min-height: 596px;
  padding: 60px 0;
`;

export const Container = styled.div`
  ${({ theme }) => theme.gridStyles.getContainerStyles()};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.h1};
  margin: 0;
  padding-bottom: 8px;

  @media ${device.md} {
    padding-bottom: 16px;
  }
`;

export const Description = styled.div`
  ${({ theme }) => theme.fonts.h2};
  margin: 0 0 32px 0;
  min-height: 186px;

  @media ${device.md} {
    max-width: 572px;
    min-height: 245px;
  }

  @media ${device.lg} {
    max-height: 245px;
    margin: 0 0 40px 0;
    max-width: 956px;
  }
`;

export const Link = styled.a`
  border: 2px solid ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.pink};
  ${({ theme }) => theme.fonts.button};
  background-color: transparent;
  text-decoration: none;
  border-radius: 48px;
  cursor: pointer;
  width: 155px;
  height: 50px;
  font-size: 20px;
  padding-top: 12px;
  transition: 0.3s;

  @media ${device.lg} {
    border: 4px solid ${({ theme }) => theme.colors.pink};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.pink};
    border: 2px solid ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.blue};
  }

  @media ${device.lg} {
    padding-top: 6px;
    height: 86px;
    width: 400px;
    border: 4px solid ${({ theme }) => theme.colors.pink};

    &:hover {
      border: 4px solid ${({ theme }) => theme.colors.pink};
    }
  }
`;

export const StyledIcon = styled(Icon)`
  fill: ${({ theme }) => theme.colors.blue};
  margin: 0;
  height: 34px;
  width: 44px;
  padding-top: 6px;

  @media ${device.lg} {
    width: 71px;
    height: 55px;
  }
`;

export const Generate = styled.button`
  background-color: ${({ theme }) => theme.colors.pink};
  border: 4px solid ${({ theme }) => theme.colors.pink};
  border-radius: 48px;
  font-size: 30px;
  border: none;
  cursor: pointer;
  width: 156px;
  height: 46px;
  margin-bottom: 32px;
  transition: 0.3s;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.pink};

    @media ${device.lg} {
      border: 4px solid ${({ theme }) => theme.colors.pink};
    }

    ${StyledIcon} {
      fill: ${({ theme }) => theme.colors.pink};
    }
  }

  @media ${device.md} {
    margin-bottom: 0;
    margin-right: 50px;
  }

  @media ${device.lg} {
    margin-right: 70px;
    height: 86px;
    width: 183px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.md} {
    flex-direction: row;
  }
`;
