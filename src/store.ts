import { reactive } from "vue";

export enum AppMode {
  Current = "Synchronized",
  Custom = "Arbitrary",
}

const store = reactive<{
  mode: AppMode;
  GetStyle: (target: "text" | "border") => string;
}>({
  mode: AppMode.Current,
  GetStyle(target) {
    if (this.mode === AppMode.Current) {
      return `${target}-indigo-200`;
    } else {
      return `${target}-yellow-600`;
    }
  },
});

export default store;
