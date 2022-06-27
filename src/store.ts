import { reactive } from "vue";
import Fn from "./functions";

export enum AppMode {
  Current = "Synchronized",
  Custom = "Arbitrary",
}

export type City = {
  city: string;
  country: string;
  timezone: string;
  time?: string;
};

const store = reactive<{
  mode: AppMode;
  currentTime: Date;
  currentTimezone: string;
  timeInput: string;
  selectedCities: City[];
  cityList: City[];
  ToggleMode: () => void;
  SetTime: () => void;
  AddCity: (name: string) => void;
  GetStyle: (target: "text" | "border") => string;
  GetTime: (timezone: string) => Date;
}>({
  mode: AppMode.Current,
  currentTime: new Date(),
  currentTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  timeInput: "13:00:00",
  selectedCities: [],
  cityList: [],
  ToggleMode() {
    this.mode =
      this.mode === AppMode.Current ? AppMode.Custom : AppMode.Current;
  },
  SetTime() {},
  AddCity(name) {
    if (!name) return;
    name = name.toLowerCase();
    const city = this.cityList.find((c) => c.city.toLowerCase() === name);
    if (city === undefined || city === null) return;
    this.selectedCities.push(city);
  },
  GetStyle(target) {
    if (this.mode === AppMode.Current) {
      return `${target}-indigo-200`;
    } else {
      return `${target}-yellow-600`;
    }
  },
  GetTime(timeZone) {
    if (this.mode === AppMode.Current) {
      return Fn.ConvertTimeZone(this.currentTime, timeZone);
    } else {
      return Fn.ConvertTimeZone(new Date(), timeZone);
    }
  },
});

export default store;
