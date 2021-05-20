import moment from "moment";
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  changeDate,
  changeStartTime,
  nextStep,
} from "../../Redux/Slices/bookerSlice";
import { avaibleTimes, notAvaibleTimes } from "../../utils/Functions";
import { v4 as uuidv4 } from "uuid";
import { TimeItem } from "./TimepickerStyles";

interface IAvaibleTimes {
  dayItem: moment.Moment;
}
const appointments = [
  { date: "2021-05-23 00:00:00.000", startTime: "09:00", duration: 30 },
  { date: "2021-05-24 00:00:00.000", startTime: "14:30", duration: 30 },
  { date: "2021-05-25 00:00:00.000", startTime: "15:30", duration: 25 },
  { date: "2021-05-26 00:00:00.000", startTime: "09:00", duration: 35 },
  { date: "2021-05-27 00:00:00.000", startTime: "09:00", duration: 45 },
];
const worker1 = [
  { date: "2021-05-23 00:00:00.000", workStart: "08:00", workEnd: 17 },
  { date: "2021-05-24 00:00:00.000", workStart: "15:30", workEnd: 16 },
  { date: "2021-05-25 00:00:00.000", workStart: "09:00", workEnd: 14 },
  { date: "2021-05-16 00:00:00.000", workStart: "09:00", workEnd: 12 },
];
const worker2 = [
  { date: "2021-05-23 00:00:00.000", workStart: "12:00", workEnd: 18 },
  { date: "2021-05-24 00:00:00.000", workStart: "09:00", workEnd: 12 },
];
const doctor = worker1;
const AvaibleTimes: React.FC<IAvaibleTimes> = ({ dayItem }) => {
  const [select, setSelect] = useState<string>("");
  const REDUXselected = useAppSelector(
    (state) => state.bookerSlice.appointment.startTime
  ); //selected time (with uuid ID) , use of this is for the styling
  const dispatch = useAppDispatch(); // Redux dispatch

  const REDUXchangeTime = (e: string) => {
    const randomID = uuidv4();
    dispatch(changeStartTime({ startTime: e, id: randomID })); // Changes Appointment`s start time
    dispatch(changeDate(dayItem.format("MMM Do YY"))); // Changes Appointment`s date day prop comes from <TimePicker />
    setSelect(randomID); // this one is in combination with REDUXselected for styling . Otherwise styling doesnt get marked.
    dispatch(nextStep(4));
  };

  const isWorkingDay = (e: string) => {
    let workstart: number = 0;
    let workend: number = 0;

    // Finds Work Schedule of the worker for the day
    const matchWorkTimes = doctor.filter(
      (el) => moment(el.date).format("MMM Do YY") === e
    );
    if (matchWorkTimes.length) {
      workstart = moment.duration(matchWorkTimes[0].workStart).asMinutes();
      workend = matchWorkTimes[0].workEnd;
    }
    //Matches workers appointments with the days so later i can not show the booked days
    const matchDays = appointments.filter(
      (el) => moment(el.date).format("MMM Do YY") === e
    );

    // If there are bookings  shows only free avaible appointments
    if (matchDays.length) {
      const times = matchDays.map((el) => {
        const totalBookedTime = moment.duration(el.startTime).asMinutes(); // Transfomrs string (timestart of DB ) to minutes (number)
        const durationTime =
          moment.duration(el.startTime).asMinutes() + el.duration; //totalMinutes(number) + the duration of it so we can pass props to next fucntion
        return notAvaibleTimes(totalBookedTime, durationTime / 60);
      });

      const emptyArrForMerging: string[] = [];
      const merged = emptyArrForMerging.concat(...times); // Because times returns nested array , this one destruction and returns and merges all items;

      return avaibleTimes(merged, workstart, workend); // in the upper one its [0] because it should finnd only one
    }
    // If no appointments made returns times for the full day if the worker has opened his schedule
    else {
      return avaibleTimes([], workstart, workend);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Function checks if worker has schedule this day and loops the times that he is booked*/}
      {isWorkingDay(dayItem.format("MMM Do YY")).map((el, index) => {
        return (
          <TimeItem
            active={
              REDUXselected.id === select && REDUXselected.startTime === el
            }
            key={index}
            onClick={() => REDUXchangeTime(el)}
          >
            {el.length ? el : "Not avaible"}
          </TimeItem>
        );
      })}
    </div>
  );
};

export default AvaibleTimes;
