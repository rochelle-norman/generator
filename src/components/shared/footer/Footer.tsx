import * as Fade from "react-reveal/Fade";
import * as S from "./Footer.styles";
import { IconType } from "../icon/Icon";

export const Footer = () => {
  return (
    <S.Footer>
      <Fade big>
        <S.Container>
          <S.Row>
            <S.Section>
              <S.StyledLabel label="visit us" />
              <S.Details>
                Runway East London Bridge, <br />
                20 St Thomas Street, <br />
                London, SE1 9RS.
              </S.Details>
            </S.Section>
            <S.Section>
              <S.StyledLabel label="get in touch" />
              <S.Details>
                <S.ContactLink href="mailto:hello@thisissoon.com">
                  hello@thisissoon.com
                </S.ContactLink>
                <S.ContactLink href="tel:020%8038%2892">
                  020 8038 2892
                </S.ContactLink>
              </S.Details>
            </S.Section>
            <S.SocialLinksWrapper>
              <S.StyledSocialLink
                icon={IconType.Twitter}
                text="twitter"
                url="https://twitter.com/soonlondon"
              />
              <S.StyledSocialLink
                icon={IconType.Instagram}
                text="instagram"
                url="https://www.instagram.com/soon_london/"
              />
              <S.StyledSocialLink
                icon={IconType.Linkedin}
                text="linkedin"
                url="https://linkedin.com/company/5010088"
              />
              <S.StyledGithubLink
                icon={IconType.Github}
                text="github"
                url="https://github.com/thisissoon"
              />
            </S.SocialLinksWrapper>
          </S.Row>
        </S.Container>
      </Fade>
    </S.Footer>
  );
};
