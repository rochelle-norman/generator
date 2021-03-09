import styled from "styled-components";
import { device } from "../../styles/media";
import { ReactComponent as ReadingIllustation } from "../../assets/illustrations/reading.svg";
import { ReactComponent as DancingIllustration } from "../../assets/illustrations/dancing.svg";

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 60px 0;
  min-height: 596px;
  text-align: center;

  @media ${device.lg} {
    padding: 80px 0 100px;
    min-height: 600px;
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.gridStyles.getContainerStyles()};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media ${device.lg} {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderText = styled.div`
  ${({ theme }) => theme.fonts.h1};
  margin: 0;
  padding-bottom: 8px;

  @media ${device.md} {
    padding-bottom: 16px;
  }
`;

export const HeaderSubText = styled.div`
  ${({ theme }) => theme.fonts.h2};
  margin: 0 auto;
  padding-bottom: 32px;

  @media ${device.md} {
    max-width: 572px;
    padding-bottom: 56px;
  }
`;

export const StyledReadingIll = styled(ReadingIllustation)`
  margin: 0 auto;
  width: 62px;
  height: 123px;
  margin-bottom: 32px;

  @media ${device.md} {
    width: 126px;
    height: 250px;
  }
`;

export const StyledDancingIll = styled(DancingIllustration)`
  display: none;

  @media ${device.lg} {
    display: inline-block;
    margin: 0 auto;
  }
`;
