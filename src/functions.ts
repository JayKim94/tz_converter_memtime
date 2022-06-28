const Fn: {
  FormatTime: (date: Date, format: string) => string;
  GetTimeZone: (timeZone: string) => string;
  ConvertTimeZone: (date: Date, timeZone: string) => Date;
  FromTime: (time: string) => Date;
} = {
  FormatTime(date, format = "HH:MM:SS") {
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
  GetTimeZone(timeZone) {
    const date = new Date();
    const short = date
      .toLocaleTimeString("en-US", { timeZoneName: "short", timeZone })
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

    return `${long}(${short})`;
  },
  ConvertTimeZone(date, timeZone) {
    return new Date(new Date(date).toLocaleString("en-US", { timeZone }));
  },
  FromTime(time) {
    const d = new Date(),
      parts = time.match(/(\d+)\:(\d+)/);

    if (parts === null) return d;

    const hours = parseInt(parts[1], 10),
      minutes = parseInt(parts[2], 10);

    d.setHours(hours);
    d.setMinutes(minutes);

    return d;
  },
};

export default Fn;
