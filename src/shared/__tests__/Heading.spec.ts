import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Heading from "../Heading.vue";

describe("Heading", () => {
  it("renders without icon", () => {
    const wrapper = mount(Heading, {
      props: {
        title: "HeadingTitle",
        subtitle: "HeadingSubtitle",
        icon: false,
      },
    });
    expect(wrapper.find("label").text()).toContain("HeadingTitle");
    expect(wrapper.find("p").text()).toContain("HeadingSubtitle");
    expect(wrapper.find("img").exists()).toBe(false);
  });

  it("renders with icon", () => {
    const wrapper = mount(Heading, {
      props: {
        title: "HeadingTitle",
        subtitle: "HeadingSubtitle",
        icon: true,
      },
    });
    expect(wrapper.find("label").text()).toContain("HeadingTitle");
    expect(wrapper.find("p").text()).toContain("HeadingSubtitle");
    expect(wrapper.find("img").exists()).toBe(true);
  });
});
