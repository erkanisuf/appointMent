import React, { useState } from "react";
import { useAppDispatch } from "../../Redux/hooks";
import { changeService, nextStep } from "../../Redux/Slices/bookerSlice";
import Wrapper from "../../utils/Wrapper";

const services = ["Haircut", "hairCOlor", "wash"];
const Servicepicker = ({ setService, service, toggleProp }: any) => {
  const dispatch = useAppDispatch();
  const changeReduxService = (e: string) => {
    dispatch(changeService(e));
    dispatch(nextStep());
  };
  return (
    <Wrapper title={"Select service"} stepNumber={1}>
      {services.map((el) => {
        return (
          <p key={el} onClick={() => changeReduxService(el)}>
            {el}
          </p>
        );
      })}{" "}
    </Wrapper>
  );
};

export default Servicepicker;
