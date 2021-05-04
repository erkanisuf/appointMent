import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  changeService,
  changeWorker,
  Iworker,
  nextStep,
} from "../../Redux/Slices/bookerSlice";
import Wrapper from "../../utils/Wrapper";
import { StyleItemWorker } from "./WorkerStyles";

const workers = [
  { workername: "erko", id: 1 },
  { workername: "mari", id: 2 },
  { workername: "julia", id: 3 },
];
const Workerpicker = () => {
  const dispatch = useAppDispatch();
  const { workername } = useAppSelector((state) => state.bookerSlice.worker); //Redux selector
  const changeReduxService = (e: Iworker) => {
    dispatch(changeWorker(e));
    dispatch(nextStep(3));
  };
  return (
    <Wrapper title={"Select worker"} stepNumber={2} info={workername}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {workers.map((el, index) => {
          return (
            <StyleItemWorker key={index} onClick={() => changeReduxService(el)}>
              <div>
                {" "}
                <img
                  src="https://www.pinnaclecare.com/wp-content/uploads/2017/12/bigstock-African-young-doctor-portrait-28825394.jpg.webp"
                  alt="random"
                />
              </div>

              <div>
                <p>{el.workername}</p>
                <p>Kampaaja</p>
              </div>
            </StyleItemWorker>
          );
        })}{" "}
      </div>
    </Wrapper>
  );
};

export default Workerpicker;
