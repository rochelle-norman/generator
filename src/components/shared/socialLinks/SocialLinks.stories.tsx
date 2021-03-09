import * as React from "react";
import { Story } from "@storybook/react/types-6-0";

import { SocialLinks, Props } from "./SocialLinks";
import { IconType } from "../icon/Icon";

export default {
  component: SocialLinks,
  title: "Components/SocialLinks",
};

const Template: Story<Props> = (args) => {
  return <SocialLinks {...args} />;
};

export const Github = Template.bind({});
Github.args = {
  icon: IconType.Github,
  text: "github",
  url: "",
};

export const Twitter = Template.bind({});
Twitter.args = {
  icon: IconType.Twitter,
  text: "twitter",
  url: "",
};

export const Instagram = Template.bind({});
Instagram.args = {
  icon: IconType.Instagram,
  text: "instagram",
  url: "",
};

export const Linkedin = Template.bind({});
Linkedin.args = {
  icon: IconType.Linkedin,
  text: "linkedin",
  url: "",
};
