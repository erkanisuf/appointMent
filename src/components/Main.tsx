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
        width: "90%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        height: "100%",
        minHeight: "75vh",
        borderRadius: "15px",
        alignContent: "center",
        justifyContent: "center",
        padding: "15px 0px",
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
