// Convert String time to Minutes (other fucntions require minutes value)
export const stringTimeToMinutes = (input: string): number => {
  let hms = input; //  string e.g "09:45:33"
  let a = hms.split(":"); // split it at the colons
  // eg if 9:45 returns 585 minutes
  let minutes = +a[0] * 60 + +a[1];
  return minutes;
};

// Makes times schedule for the day.
export const avaibleTimes = (
  timestohide: string[],
  startWork: number,
  endWork: number
): string[] => {
  let minutesInterval = 15; //minutes interval
  let times = []; // time array
  let minutes = startWork; // Value of minutes  e.g start time 540 / 60 = 9 hours

  //loop that pushes the times to times array
  for (let i = 0; minutes < endWork * 60; i++) {
    let hh = Math.floor(minutes / 60); // geminutesing hours of day in 0-24 format
    let mm = minutes % 60; // geminutesing minutes of the hour in 0-55 format
    times[i] = ("0" + (hh % 24)).slice(-2) + ":" + ("0" + mm).slice(-2);
    minutes = minutes + minutesInterval;
  }
  const timesToHide = timestohide;
  const freeTimes = times.filter((el) => !timesToHide.includes(el));
  return freeTimes;
};
// Function that makes times for the booked ones so the upper function can clear them
export const notAvaibleTimes = (
  minutesParam: number,
  durationParam: number,
  thechoosenservice: number
): string[] => {
  let minutesInterval = 15; //minutes interval
  let times = []; // time array
  let minutes = minutesParam - thechoosenservice; // Value of minutes  e.g start time 540 / 60 = 9 hours

  //loop that pushes the times to times array
  for (let i = 0; minutes < durationParam * 60; i++) {
    let hh = Math.floor(minutes / 60); // geminutesing hours of day in 0-24 format
    let mm = minutes % 60; // geminutesing minutes of the hour in 0-55 format
    times[i] = ("0" + (hh % 24)).slice(-2) + ":" + ("0" + mm).slice(-2);
    minutes = minutes + minutesInterval;
  }
  console.log(durationParam * 60, "durationParam Param");
  console.log(minutes, "minutesParam");
  console.log(times, "TIMES");
  return times;
};
