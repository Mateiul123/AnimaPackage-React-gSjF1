import { BtnSection } from ".";

export default {
  title: "Components/BtnSection",
  component: BtnSection,
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
    sectionNBtnName: "section 1",
    sectionNDivClassName: {},
  },
};
