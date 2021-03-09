import * as S from "./Nav.styles";

export interface Props {
  home?: boolean;
  className?: string;
}

export const Nav = ({ home, className }: Props) => {
  return (
    <S.Nav className={className} home={home}>
      <S.Container>
        <S.Logo href="/">SOON_</S.Logo>
        <S.Button href="https://thisissoon.com/signup/" target="_blank">
          our newsletter
        </S.Button>
        <S.LargeButton href="https://thisissoon.com/signup/" target="_blank">
          subscribe to our newsletter
        </S.LargeButton>
      </S.Container>
    </S.Nav>
  );
};
