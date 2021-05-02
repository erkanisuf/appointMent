import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  changeService,
  Iservice,
  nextStep,
} from "../../Redux/Slices/bookerSlice";
import Wrapper from "../../utils/Wrapper";

const services = [
  { servicename: "Haircut", id: 1 },
  { servicename: "BlowDry", id: 2 },
  { servicename: "Wash", id: 3 },
];
const Servicepicker = () => {
  const { servicename } = useAppSelector(
    (state) => state.bookerSlice.appointment.service
  ); //Redux selector
  const dispatch = useAppDispatch(); // Redux Dispatch
  const changeReduxService = (e: Iservice) => {
    dispatch(changeService(e)); // change service
    dispatch(nextStep(2)); // opens/toggles component <TimePicker />
  };
  return (
    <Wrapper title={"Select service"} stepNumber={1} info={servicename}>
      {services.map((el, index) => {
        return (
          <p key={index} onClick={() => changeReduxService(el)}>
            {el.servicename}
          </p>
        );
      })}{" "}
    </Wrapper>
  );
};

export default Servicepicker;
