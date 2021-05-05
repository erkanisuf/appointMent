import moment from "moment";
import React, { useState } from "react";
import { useAppSelector } from "../../Redux/hooks";
import { NextIcon, PrevIcon } from "../../utils/IconsStyled";

import Wrapper from "../../utils/Wrapper";
import AvaibleTimes from "./AvaibleTimes";
import { BtnsContainer, DayContainer } from "./TimepickerStyles";

const Timepicker = () => {
  const { startTime, date } = useAppSelector(
    (state) => state.bookerSlice.appointment
  ); //Redux selector
  const [page, setPage] = useState<number>(0); // sets page of the calendars weekd

  // This function creates calendar ref: https://stackoverflow.com/questions/39786372/creating-a-custom-calendar-with-moment-using-days-weeks-and-headings
  const getDays = () => {
    const calendar = [];
    const today = moment();
    const startDay = today.clone().startOf("day"); // from where to start
    const endDay = today.clone().endOf("month").endOf("year"); // until when
    let date = startDay.clone().subtract(1, "day");

    // Loop makes arry with the days 1-7 until end of year
    while (date.isBefore(endDay, "day"))
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => date.add(1, "day").clone()),
      });
    console.log(calendar);
    return calendar;
  };

  type IchangePage = "next" | "prev";
  const changePage = (e: IchangePage) => {
    if (e === "next") {
      page < getDays().length - 1 && setPage((prev) => prev + 1); //getDays().lenght gives the number of weeks for the whole year (-1) to be exacy until 31.12
    } else if (e === "prev") {
      page > 0 && setPage((prev) => prev - 1);
    }
  };
  return (
    <Wrapper
      title={"Time picker"}
      stepNumber={3}
      info={startTime.startTime + date}
    >
      <p>Pick a Time</p>
      {getDays()
        .splice(page, 1)
        .map((el, index) => {
          return (
            <div key={index}>
              {/* Shows week number (-1 otherwise it shows it wrong) */}
              Week :{el.days[0].week() - 1}
              <BtnsContainer>
                <button onClick={() => changePage("prev")}>
                  <PrevIcon />
                </button>
                <button onClick={() => changePage("next")}>
                  <NextIcon />
                </button>
              </BtnsContainer>
              <div
                style={{
                  width: "100%",

                  display: "flex",
                }}
              >
                {/* Maps the days from 1-7 */}
                {el.days.map((dayItem, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        width: "100%",
                        minHeight: "100px",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        margin: 5,
                      }}
                    >
                      {/* Gives the date,date name and month*/}
                      <DayContainer>
                        {" "}
                        <p>{dayItem.format("MM / Do")}</p>{" "}
                        <p>{dayItem.format("dddd")}</p>{" "}
                      </DayContainer>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Function checks if worker has schedule this day and loops the times that he is booked*/}
                        <AvaibleTimes dayItem={dayItem} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </Wrapper>
  );
};

export default Timepicker;
