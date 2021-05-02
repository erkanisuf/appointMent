import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  changeService,
  changeWorker,
  Iworker,
  nextStep,
} from "../../Redux/Slices/bookerSlice";
import Wrapper from "../../utils/Wrapper";

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
      {workers.map((el, index) => {
        return (
          <p key={index} onClick={() => changeReduxService(el)}>
            {el.workername}
          </p>
        );
      })}{" "}
    </Wrapper>
  );
};

export default Workerpicker;
