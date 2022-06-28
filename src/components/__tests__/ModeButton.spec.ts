import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ModeButton from "../ModeButton.vue";

describe("ModeButton", () => {
  it("renders properly", () => {
    const wrapper = mount(ModeButton);
    expect(wrapper.text()).toContain("Synchronized");
  });
});
