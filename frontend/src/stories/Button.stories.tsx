import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "@components/buttons";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
// };
