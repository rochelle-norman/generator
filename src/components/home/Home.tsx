import * as S from "./Home.styles";
import * as Fade from "react-reveal/Fade";
import { Button } from "../shared/button/ButtonLarge";
import { Nav } from "../shared/nav/Nav";

export interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  return (
    <>
      <Nav home />
      <S.Header className={className}>
        <Fade big>
          <S.Container>
            <S.StyledReadingIll />
            <S.Wrapper>
              <S.HeaderText>She Created</S.HeaderText>
              <S.HeaderSubText>
                Discover things created by women who inspire us
              </S.HeaderSubText>
              <Button label="generate" />
            </S.Wrapper>
            <S.StyledDancingIll />
          </S.Container>
        </Fade>
      </S.Header>
    </>
  );
};
