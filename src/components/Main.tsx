import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import AppointmentForm from "./AppointmentForm/AppointmentForm";
import Servicepicker from "./servicepicker/Servicepicker";
import Timepicker from "./timepicker/Timepicker";
import Workerpicker from "./workerpicker/Workerpicker";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "green",
        height: "100%",
      }}
    >
      <Servicepicker />
      <Workerpicker />
      <Timepicker />
      <AppointmentForm />
    </div>
  );
};

export default Main;
