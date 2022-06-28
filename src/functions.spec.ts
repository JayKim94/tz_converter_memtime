import { describe, it, expect } from "vitest";
import Fn from "./functions";

describe("FormatTime", () => {
  it("outputs different formats", () => {
    const time = new Date(1994, 4, 4, 14, 20, 0);
    expect(Fn.FormatTime(time, "HH:MM:SS")).toBe("14:20:00");
    expect(Fn.FormatTime(time, "HH:MM")).toBe("14:20");
    expect(Fn.FormatTime(time, ":SS")).toBe(":00");
  });
});

describe("GetTimeZone", () => {
  it("outputs formatted timezone information", () => {
    expect(Fn.GetTimeZone("Asia/Seoul")).toBe("KST(GMT+9)");
    expect(Fn.GetTimeZone("Europe/Berlin")).toBe("CEST(GMT+2)");
    expect(Fn.GetTimeZone("America/New_York")).toBe("EDT(EDT)");
    expect(Fn.GetTimeZone("Africa/Johannesburg")).toBe("SAST(GMT+2)");
  });
});

describe("FromTime", () => {
  it("outputs JS date object with converted timezone", () => {
    const time = "13:30";
    const result = Fn.FromTime(time);
    expect(result).toBeInstanceOf(Date);
    expect(result.getHours()).toBe(13);
    expect(result.getMinutes()).toBe(30);
  });
});
