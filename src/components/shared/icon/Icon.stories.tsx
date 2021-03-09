import * as React from "react";
import { Story } from "@storybook/react/types-6-0";

import { Icon, IconType, IconProps } from "./Icon";

export default {
  component: Icon,
  title: "Components/Icons",
};

const Template: Story<IconProps> = (args) => {
  return <Icon {...args} />;
};

export const Github = Template.bind({});
Github.args = {
  icon: IconType.Github,
};

export const Twitter = Template.bind({});
Twitter.args = {
  icon: IconType.Twitter,
};

export const Instagram = Template.bind({});
Instagram.args = {
  icon: IconType.Instagram,
};

export const Linkedin = Template.bind({});
Linkedin.args = {
  icon: IconType.Linkedin,
};

export const Generate = Template.bind({});
Generate.args = {
  icon: IconType.Generate,
};
