import * as Fade from "react-reveal/Fade";
import * as S from "./About.styles";

export const About = () => {
  return (
    <S.AboutSection>
      <Fade big>
        <S.Container>
          <S.Row>
            <S.Heading>
              <S.StyledLabel label="about" />
              <S.Title>Powered by the women at SOON_</S.Title>
            </S.Heading>
            <S.Content>
              <S.Paragraph>
                She Created is an initiative from the women of SOON_, a digital
                product agency based in London. Despite being a small team, our
                women represent seven different countries.
              </S.Paragraph>
              <S.Paragraph>
                This microsite reveals all the creations, organisations, films,
                books, articles and podcasts highlighting women that inspire us
                to keep on creating.
              </S.Paragraph>
            </S.Content>
          </S.Row>
        </S.Container>
      </Fade>
    </S.AboutSection>
  );
};
