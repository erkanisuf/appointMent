import moment from "moment";
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  changeDate,
  changeStartTime,
  nextStep,
  ResetREDUX,
} from "../../Redux/Slices/bookerSlice";
import { avaibleTimes, notAvaibleTimes } from "../../utils/Functions";
import { v4 as uuidv4 } from "uuid";
import { TimeItem } from "./TimepickerStyles";
import useFetch from "../../utils/useFetch";

interface IAvaibleTimes {
  dayItem: moment.Moment;
}
const appointments = [
  { date: "2021-06-07 00:00:00.000", startTime: "12:30", duration: 30 },
  { date: "2021-06-07 00:00:00.000", startTime: "14:30", duration: 30 },
  { date: "2021-06-07 00:00:00.000", startTime: "09:30", duration: 25 },
  { date: "2021-06-07 00:00:00.000", startTime: "10:00", duration: 35 },
  { date: "2021-06-07 00:00:00.000", startTime: "09:00", duration: 45 },
];

const choosenService = 60;

const AvaibleTimes: React.FC<IAvaibleTimes> = ({ dayItem }) => {
  const [select, setSelect] = useState<string>("");
  const EmployeeID = useAppSelector(
    (state) => state.bookerSlice.employee.employeeId
  ); //Id of Employee so it can fetch avaible times for him .
  const REDUXselected = useAppSelector(
    (state) => state.bookerSlice.appointment.startTime
  ); //selected time (with uuid ID) , use of this is for the styling
  const dispatch = useAppDispatch(); // Redux dispatch
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_SERVER_URL}/api/Employee/Schedules/${EmployeeID}`
  ); // fetches from DB workers schedule.

  //employee`s appointments
  const employeeAppointments = useFetch(
    `${process.env.REACT_APP_SERVER_URL}/api/Appointments/GetByEmployee/${EmployeeID}`
  );
  console.log(employeeAppointments, "AZ");
  const REDUXchangeTime = (e: string) => {
    const randomID = uuidv4(); // frontend id ,does not have connection with backend

    dispatch(changeStartTime({ startTime: e, id: randomID })); // Changes Appointment`s start time
    dispatch(changeDate(transoformDateToBackend(e))); // Changes Appointment`s date day prop comes from <TimePicker />
    setSelect(randomID); // this one is in combination with REDUXselected for styling . Otherwise styling doesnt get marked.
    dispatch(nextStep(4));
  };

  // Sets the hours and minutes to the date time that will go to the DB after
  const transoformDateToBackend = (time: string) => {
    const result = dayItem
      .set("hour", Number(time.substring(0, 2)))
      .set("minutes", Number(time.substring(3, 5)));

    return result.format();
  };

  const isWorkingDay = (e: string) => {
    let workstart: number = 0;
    let workend: number = 0;

    // Finds Work Schedule of the worker for the day
    const matchWorkTimes = data.filter(
      (el) => moment(el.date).format("MMM Do YY") === e
    );

    if (matchWorkTimes.length) {
      workstart = moment.duration(matchWorkTimes[0].workStart).asMinutes();
      workend = moment.duration(matchWorkTimes[0].workEnd).asMinutes();
    }
    //Matches workers appointments with the days so later i can not show the booked days
    const matchDays = employeeAppointments.data.filter(
      (el) => moment(el.date).format("MMM Do YY") === e
    );

    // If there are bookings  shows only free avaible appointments
    if (matchDays.length) {
      return AvaibleTimesHelper(matchDays, workstart, workend);
    }
    // If no appointments made returns times for the full day if the worker has opened his schedule
    else {
      return avaibleTimes([], workstart, workend);
    }
  };

  ///////// Helper function
  const AvaibleTimesHelper = (
    matchDays: any[],
    workstart: number,
    workend: number
  ) => {
    const times = matchDays.map((el: any) => {
      const totalBookedTime = moment.duration(el.startTime).asMinutes(); // Transfomrs string (timestart of DB ) to minutes (number)
      const durationTime =
        moment.duration(el.startTime).asMinutes() + el.duration; //totalMinutes(number) + the duration of it so we can pass props to next fucntion

      return notAvaibleTimes(
        totalBookedTime,
        durationTime / 60,
        choosenService
      );
    });
    const emptyArrForMerging: string[] = [];
    const merged = emptyArrForMerging.concat(...times); // Because times returns nested array , this one destruction and returns and merges all items;
    return avaibleTimes(merged, workstart, workend); // in the upper one its [0] because it should finnd only one
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
