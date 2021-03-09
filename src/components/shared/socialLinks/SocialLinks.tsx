import { Icon, IconType } from "../icon/Icon";

import styled from "styled-components";

const StyledLinks = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Link = styled.p`
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.fonts.link};
  ${({ theme }) => theme.underline}
  margin: 0;
  max-width: max-content;
  margin-left: 4px;
`;

export interface Props {
  url: string;
  icon: IconType;
  text: string;
  className?: string;
}

export const SocialLinks = ({ url, icon, text, className }: Props) => (
  <StyledLinks className={className} href={url} target="_blank">
    <Icon icon={icon} />
    <Link>{text}</Link>
  </StyledLinks>
);
