import styled from "styled-components/macro";
import { device } from "../../../styles/media";
import { Label } from "../label/Label";

export const AboutSection = styled.div`
  color: ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 0 0;

  @media ${device.md} {
    padding: 41px 0 24px;
  }

  @media ${device.lg} {
    padding: 41px 0 97px;
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.gridStyles.getContainerStyles()};
`;

export const Row = styled.div`
  ${({ theme }) => theme.gridStyles.getRowStyles()};
  display: flex;
  flex-direction: column;

  @media ${device.lg} {
    flex-direction: row;
  }
`;

export const StyledLabel = styled(Label)`
  padding-bottom: 24px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.h3};
  margin: 0;
  margin-bottom: 57px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.lg} {
    ${({ theme }) => theme.gridStyles.getColStyles(12, 12, 6, 0, 0, 6)}
    flex-direction: row;
  }
`;

export const Paragraph = styled.p`
  ${({ theme }) => theme.gridStyles.getColStyles(12, 6, 6)}
  ${({ theme }) => theme.fonts.body};
  margin: 0;
  margin-bottom: 24px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.gridStyles.getColStyles(12, 6, 6)}
`;
