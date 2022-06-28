import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TableList from "../TableList.vue";

describe("TableList", () => {
  it("renders props properly", () => {
    const wrapper = mount(TableList, {
      props: {
        headers: ["City", "Time", "Timezone"],
        list: [
          {
            city: "Berlin",
            timezone: "Europe/Berlin",
          },
          {
            city: "Jakarta",
            timezone: "Asia/Jakarta",
          },
        ],
      },
    });
    const texts = wrapper.text();
    expect(wrapper.findAll("th").length).toBe(4);
    expect(wrapper.findAll("tr").length).toBe(3);
    expect(texts).toContain("City");
    expect(texts).toContain("Time");
    expect(texts).toContain("Timezone");
  });
  it("gives feedback for empty list", () => {
    const wrapper = mount(TableList, {
      props: {
        headers: ["City", "Time", "Timezone"],
        list: [],
      },
    });
    expect(wrapper.findAll("th").length).toBe(4);
    expect(wrapper.findAll("tr").length).toBe(2);
    expect(wrapper.text()).toContain("Empty List");
  });
});
