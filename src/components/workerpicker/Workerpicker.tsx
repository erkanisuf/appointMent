import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  changeService,
  changeWorker,
  IEmployee,
  nextStep,
} from "../../Redux/Slices/bookerSlice";
import useFetch from "../../utils/useFetch";
import Wrapper from "../../utils/Wrapper";
import Spinner from "../Spinner/Spinner";
import { StyleItemWorker } from "./WorkerStyles";

const workers = [
  { workername: "erko", id: 1 },
  { workername: "mari", id: 2 },
  { workername: "julia", id: 3 },
];
const Workerpicker = () => {
  const dispatch = useAppDispatch();
  const { employeeName } = useAppSelector(
    (state) => state.bookerSlice.employee
  ); //Redux selector
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_SERVER_URL}/api/Employee/Index`
  );

  const changeReduxService = (e: IEmployee) => {
    dispatch(changeWorker(e));
    dispatch(nextStep(3));
  };
  return (
    <Wrapper title={"Select employee"} stepNumber={2} info={employeeName}>
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
          {data.map((el: IEmployee, index: number) => {
            return (
              <StyleItemWorker
                key={index}
                onClick={() => changeReduxService(el)}
              >
                <div>
                  {" "}
                  <img
                    src={
                      el.employeeImgLink
                        ? el.employeeImgLink
                        : "https://bizraise.pro/wp-content/uploads/2014/09/no-avatar.png"
                    }
                    alt="random"
                  />
                </div>

                <div>
                  <p>{el.employeeName}</p>
                  <p>Kampaaja</p>
                </div>
              </StyleItemWorker>
            );
          })}{" "}
        </div>
      </Spinner>
    </Wrapper>
  );
};

export default Workerpicker;
