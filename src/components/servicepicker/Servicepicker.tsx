import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  changeService,
  Iservice,
  nextStep,
} from "../../Redux/Slices/bookerSlice";
import useFetch from "../../utils/useFetch";
import Wrapper from "../../utils/Wrapper";
import Spinner from "../Spinner/Spinner";
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
  const { serviceName } = useAppSelector(
    (state) => state.bookerSlice.appointment.service
  ); //Redux selector
  const dispatch = useAppDispatch(); // Redux Dispatch
  const changeReduxService = (e: Iservice) => {
    dispatch(changeService(e)); // change service
    dispatch(nextStep(2)); // opens/toggles component <TimePicker />
  };
  const { data, loading, error } = useFetch(
    "http://localhost:5001/api/Service"
  );
  console.log(data, loading, error);
  return (
    <Wrapper title={"Select service"} stepNumber={1} info={serviceName}>
      <Spinner data={data} loading={loading} error={error}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {data.map((el, index) => {
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
                  <p>{el.serviceName}</p>
                  <p>{el.price} €</p>
                </div>
              </StyleItem>
            );
          })}{" "}
        </div>
      </Spinner>
    </Wrapper>
  );
};

export default Servicepicker;
