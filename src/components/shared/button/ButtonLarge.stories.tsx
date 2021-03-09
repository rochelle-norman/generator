import * as React from "react";
import { Story } from "@storybook/react/types-6-0";

import { Button, Props } from "./ButtonLarge";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    onClick: { action: "onClick" },
  },
};

const Template: Story<Props> = (args) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Generate",
};
