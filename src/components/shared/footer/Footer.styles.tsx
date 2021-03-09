import styled from "styled-components";
import { device } from "../../../styles/media";
import { Label } from "../label/Label";
import { SocialLinks } from "../socialLinks/SocialLinks";

export const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 66px 0 64px;

  @media ${device.md} {
    padding: 32px 0 0;
  }
  @media ${device.lg} {
    padding: 64px 0;
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.gridStyles.getContainerStyles()};
`;

export const Row = styled.div`
  ${({ theme }) => theme.gridStyles.getRowStyles()};
`;

export const StyledLabel = styled(Label)`
  padding-bottom: 12px;

  @media ${device.lg} {
    padding-bottom: 16px;
  }
`;

export const Details = styled.div`
  ${({ theme }) => theme.fonts.link};
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;

  @media ${device.md} {
    padding-bottom: 0;
  }
`;

export const Section = styled.div`
  ${({ theme }) => theme.gridStyles.getColStyles(12, 5, 3)}
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;

  @media ${device.md} {
    padding-bottom: 64px;
  }

  @media ${device.lg} {
    padding-bottom: 0;
  }
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.underline}
  text-decoration: none;
  max-width: max-content;
  text-transform: uppercase;
  margin-bottom: 9px;
`;

export const SocialLinksWrapper = styled.div`
  ${({ theme }) => theme.gridStyles.getColStyles(12, 8, 6)};
  display: flex;
  flex-direction: column;

  @media ${device.md} {
    flex-direction: row;
  }

  @media ${device.lg} {
    ${({ theme }) => theme.gridStyles.getRowStyles()};
    align-items: center;
  }
`;

export const StyledSocialLink = styled(SocialLinks)`
  padding-bottom: 40px;
  margin-right: 40px;
`;

export const StyledGithubLink = styled(SocialLinks)`
  padding-bottom: 40px;
  margin-right: 0;
`;
