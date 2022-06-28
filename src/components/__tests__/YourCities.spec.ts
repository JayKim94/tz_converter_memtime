import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import YourCities from "../YourCities.vue";
// @ts-ignore
import TableList from "../../shared/TableList.vue";
// @ts-ignore
import Heading from "../../shared/Heading.vue";

describe("YourCities", () => {
  it("renders properly with local JSON data", () => {
    const wrapper = mount(YourCities);
    const heading = wrapper.findComponent(Heading);
    expect(wrapper.findComponent(TableList).exists()).toBe(true);
    expect(wrapper.find("option").exists()).toBe(true);
    expect(heading.exists()).toBe(true);
    expect(heading.text()).toContain("Your Cities");
    expect(heading.text()).toContain("Add a city from the list");
  });
});
