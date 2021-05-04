import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  changeService,
  Iservice,
  nextStep,
} from "../../Redux/Slices/bookerSlice";
import Wrapper from "../../utils/Wrapper";
import { StyleItem } from "./ServiceStyles";

const services = [
  { servicename: "Haircut", id: 1 },
  { servicename: "BlowDry", id: 2 },
  { servicename: "Wash", id: 3 },
  { servicename: "Wash", id: 32 },
  { servicename: "Wash", id: 3 },
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {services.map((el, index) => {
          return (
            <StyleItem key={index} onClick={() => changeReduxService(el)}>
              <div>
                {" "}
                <img
                  src="https://www.svgrepo.com/show/20577/vaccine.svg"
                  alt="random"
                  width="50px"
                />
              </div>

              <div>
                <p>{el.servicename}</p>
                <p>35 €</p>
              </div>
            </StyleItem>
          );
        })}{" "}
      </div>
    </Wrapper>
  );
};

export default Servicepicker;
