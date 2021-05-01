import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import Servicepicker from "./servicepicker/Servicepicker";
import Timepicker from "./timepicker/Timepicker";

const Main = () => {
  const [page, setPage] = useState<number>(0);
  const [service, setService] = useState<string>("");
  const [toggle, setToggle] = useState<string>("time");
  const count = useAppSelector((state) => state.bookerSlice);
  const dispatch = useAppDispatch();
  console.log(count);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "green",
        height: "100%",
      }}
    >
      <Servicepicker
        service={service}
        setService={setService}
        toggleProp={toggle === "service"}
      />
      <Timepicker />
    </div>
  );
};

export default Main;
