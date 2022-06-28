import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Times from "../Times.vue";
// @ts-ignore
import Box from "../../shared/Box.vue";
// @ts-ignore
import Heading from "../../shared/Heading.vue";

describe("Times", () => {
  it("renders properly", () => {
    const wrapper = mount(Times);
    const texts = wrapper.text();
    const boxes = wrapper.findAllComponents(Box);
    const headings = wrapper.findAllComponents(Heading);
    expect(boxes.length).toBe(2);
    expect(headings.length).toBe(2);

    expect(texts).toContain("Enter Time");
    expect(texts).toContain("Current Time");
  });
});
