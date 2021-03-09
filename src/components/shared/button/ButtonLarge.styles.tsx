import styled from "styled-components";
import { device } from "../../../styles/media";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  ${({ theme }) => theme.fonts.h2};
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 90px;
  border: 2px solid ${({ theme }) => theme.colors.pink};
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  width: 155px;
  height: 50px;

  &:hover {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.pink};
  }

  @media ${device.lg} {
    border: 4px solid ${({ theme }) => theme.colors.pink};

    &:hover {
      border: 4px solid ${({ theme }) => theme.colors.pink};
    }
  }

  @media ${device.md} {
    width: 413px;
    height: 129px;
    border-radius: 150px;
  }

  @media ${device.md} {
    width: 413px;
    height: 129px;
    border-radius: 150px;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.fonts.button};
  display: flex;
  cursor: pointer;
  padding: 12px 20px;

  @media ${device.md} {
    padding: 30px 55px;
    font-size: 55px;
    line-height: 64px;
    letter-spacing: 2px;
  }
`;
