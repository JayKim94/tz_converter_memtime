const Fn = {
  FormatTime(date: Date, format: string = "HH:MM:SS"): string {
    let hours: string | number = date.getHours(),
      minutes: string | number = date.getMinutes(),
      seconds: string | number = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds.toString();

    if (format === "HH:MM") {
      return hours + ":" + minutes;
    } else if (format === ":SS") {
      return ":" + seconds;
    } else {
      return hours + ":" + minutes + ":" + seconds;
    }
  },
  GetTimeZone(timeZone: string) {
    const date = new Date();
    const short = date
      .toLocaleTimeString("en-US", { timeZoneName: "shortOffset", timeZone })
      .split(" ")[2];
    const long = date
      .toLocaleTimeString("en-US", {
        timeZoneName: "long",
        timeZone,
      })
      .split(" ")
      .map((g, i) => {
        if (i > 1) {
          return g.charAt(0);
        }
      })
      .join("");

    return `${long} (${short})`;
  },
  ConvertTimeZone(date: Date, timeZone: string) {
    return new Date(new Date(date).toLocaleString("en-US", { timeZone }));
  },
};

export default Fn;
