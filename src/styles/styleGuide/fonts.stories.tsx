import * as React from "react";
import styled from "styled-components";

export default {
  title: "Styleguide / Fonts",
};

export const Default = () => {
  const Headline1 = styled.h1`
    ${(props) => props.theme.fonts.h1};
  `;

  const Headline2 = styled.h2`
    ${(props) => props.theme.fonts.h2};
  `;

  const Headline3 = styled.h3`
    ${(props) => props.theme.fonts.h3};
  `;

  const Body = styled.p`
    ${(props) => props.theme.fonts.body};
  `;

  const Button = styled.p`
    ${(props) => props.theme.fonts.button};
  `;

  const Label = styled.p`
    ${(props) => props.theme.fonts.label};
  `;

  const Link = styled.p`
    ${(props) => props.theme.fonts.link};
  `;

  return (
    <div>
      <Headline1>Headline-1</Headline1>
      <Headline2>Headline-2</Headline2>
      <Headline3>Headline-3</Headline3>
      <Label>Label</Label>
      <Body>Body</Body>
      <Button>Button</Button>
      <Link>Link</Link>
    </div>
  );
};
