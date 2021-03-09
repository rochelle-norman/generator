import { ReactComponent as Github } from "../../../assets/icons/github.svg";
import { ReactComponent as Linkedin } from "../../../assets/icons/linkedin.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/icons/instagram.svg";
import { ReactComponent as Generate } from "../../../assets/icons/generate.svg";

export enum IconType {
  Github = "GITHUB",
  Linkedin = "LINKEDIN",
  Twitter = "TWITTER",
  Instagram = "INSTAGRAM",
  Generate = "GENERATE",
}

export interface IconProps {
  icon: IconType;
  className?: string;
}

export const Icon = ({ icon, className }: IconProps) => {
  switch (icon) {
    case IconType.Github:
      return <Github />;
    case IconType.Linkedin:
      return <Linkedin />;
    case IconType.Twitter:
      return <Twitter />;
    case IconType.Instagram:
      return <Instagram />;
    case IconType.Generate:
      return <Generate className={className} />;
    default:
      return null;
  }
};
