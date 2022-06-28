import { reactive } from "vue";
import Fn from "./functions";
// @ts-ignore
import CityJson from "./assets/cityList.json";

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
  cityList: City[];
  ToggleMode: () => void;
  GetTime: (timezone: string) => Date;
}>({
  mode: AppMode.Current,
  currentTime: new Date(),
  currentTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  timeInput: "13:00",
  cityList: CityJson,
  ToggleMode() {
    this.mode =
      this.mode === AppMode.Current ? AppMode.Custom : AppMode.Current;
  },
  GetTime(timeZone) {
    if (this.mode === AppMode.Current) {
      return Fn.ConvertTimeZone(this.currentTime, timeZone);
    } else {
      return Fn.ConvertTimeZone(Fn.FromTime(this.timeInput), timeZone);
    }
  },
});

export default store;
