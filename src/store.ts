import { reactive } from "vue";
import Fn from "./functions";

export enum AppMode {
  Current = "Synchronized",
  Custom = "Arbitrary",
}

export type City = {
  id: string;
  name: string;
  time: string | number;
  timezone: string;
};

const store = reactive<{
  mode: AppMode;
  currentTime: string;
  timeInput: string;
  selectedCities: City[];
  cityList: City[];
  SetTime: () => void;
  AddCity: (name: string) => void;
  GetStyle: (target: "text" | "border") => string;
}>({
  mode: AppMode.Current,
  currentTime: Fn.GetCurrentTime(),
  timeInput: "13:00:00",
  selectedCities: [],
  cityList: [
    {
      id: "0",
      name: "Beijing",
      time: "00:00",
      timezone: "CEST",
    },
    {
      id: "1",
      name: "Seoul",
      time: "14:00",
      timezone: "CEST",
    },
  ],
  SetTime() {},
  AddCity(name) {
    if (!name) return;
    name = name.toLowerCase();
    const city = this.cityList.find((c) => c.name.toLowerCase() === name);
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
});

export default store;
