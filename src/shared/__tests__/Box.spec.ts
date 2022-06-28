import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Box from "../Box.vue";

describe("Box", () => {
  it("renders properly", () => {
    const wrapper = mount(Box, {
      slots: {
        content: "<p>BoxContent</p>",
      },
    });

    expect(wrapper.find("p").exists()).toBe(true);
    expect(wrapper.text()).toContain("BoxContent");
  });
});
