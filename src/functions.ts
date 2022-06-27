const Fn = {
  GetCurrentTime(): string {
    let today = new Date(),
      hours: string | number = today.getHours(),
      minutes: string | number = today.getMinutes(),
      seconds: string | number = today.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  },
};

export default Fn;
