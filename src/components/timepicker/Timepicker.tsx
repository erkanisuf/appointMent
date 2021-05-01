import moment from "moment";
import React, { useState } from "react";
import { useAppSelector } from "../../Redux/hooks";
import { avaibleTimes, notAvaibleTimes } from "../../utils/Functions";
import Wrapper from "../../utils/Wrapper";
import AvaibleTimes from "./AvaibleTimes";

const doctor = [];
const Timepicker = () => {
  const [page, setPage] = useState<number>(0);

  // This function creates calendar ref: https://stackoverflow.com/questions/39786372/creating-a-custom-calendar-with-moment-using-days-weeks-and-headings
  const getDays = () => {
    const calendar = [];
    const today = moment();
    const startDay = today.clone().startOf("month").startOf("day"); // from where to start
    const endDay = today.clone().endOf("month").endOf("year"); // until when
    let date = startDay.clone().subtract(1, "day");
    // Loop makes arry with the days 1-7
    while (date.isBefore(endDay, "day"))
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => date.add(1, "day").clone()),
      });
    return calendar;
  };

  return (
    <Wrapper title={"Time picker"} stepNumber={2}>
      <p>Pick a Time</p>
      <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>

      {getDays()
        .splice(page, 1)
        .map((el, index) => {
          return (
            <div key={index}>
              {/* Shows week number (-1 otherwise it shows it wrong) */}
              Week :{el.days[0].week() - 1}
              <div
                style={{
                  width: "100%",
                  border: "1px solid #ffffff",
                  margin: "5px",
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
                        border: "1px solid #000000",
                        margin: "5px",
                      }}
                    >
                      {/* Gives the date,date name and month*/}
                      <div
                        style={{
                          width: "100%",
                          border: "1px solid #000000",
                          margin: "5px",
                        }}
                      >
                        {" "}
                        <p>{dayItem.format("MM / Do")}</p>{" "}
                        <p>{dayItem.format("dddd")}</p>{" "}
                      </div>
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
