import { DevStationTitle } from ".";

export default {
  title: "Components/DevStationTitle",
  component: DevStationTitle,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
  },
};
