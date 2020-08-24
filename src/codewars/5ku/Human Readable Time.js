function humanReadable(seconds) {
  let second = seconds % 60;
  let minute = Math.floor(seconds / 60) % 60;
  let hour = Math.floor(seconds / 3600);

  return `${hour < 10 ? "0" + hour : hour}:${
    minute < 10 ? "0" + minute : minute
  }:${second < 10 ? "0" + second : second}`;
}

let ret = humanReadable(60);
console.log(ret);
