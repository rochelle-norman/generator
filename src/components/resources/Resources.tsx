import * as React from "react";
import * as Fade from "react-reveal/Fade";
import { shuffle } from "../../utils/Shuffle";
import { Nav } from "../shared/nav/Nav";
import { links } from "../../data/data.js";

import * as S from "./Resources.styles";

export interface Props {
  className?: string;
}

export const Header2 = ({ className }: Props) => {
  const [description, setDescription] = React.useState(links[0].description);
  const [link, setLink] = React.useState(links[0].link);

  const randomizeResource = () => {
    const randomArr = shuffle(links);
    setDescription(randomArr[0].description);
    setLink(randomArr[0].link);
  };

  return (
    <>
      <Nav />
      <S.Header className={className}>
        <S.Container>
          <S.Wrapper>
            <S.Title>She Created</S.Title>
            <Fade big>
              <S.Description>{description}</S.Description>
            </Fade>
            <S.Buttons>
              <S.Generate onClick={randomizeResource}>
                <S.StyledIcon />
              </S.Generate>
              <S.Link href={link} target="_blank">
                Visit link
              </S.Link>
            </S.Buttons>
          </S.Wrapper>
        </S.Container>
      </S.Header>
    </>
  );
};
