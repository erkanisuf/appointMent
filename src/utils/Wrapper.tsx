import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { nextStep } from "../Redux/Slices/bookerSlice";
import { Section, ToggleDiv } from "./WrapperStyles";

interface IWrapper {
  children: React.ReactNode;
  title: string;
  stepNumber: number;
  info: React.ReactNode;
}
// Example usage:    <Wrapper title={"Some string name here"} stepNumber={1}> // stepNumber if matches with redux Step , then component toggles to true;
const Wrapper: React.FC<IWrapper> = ({ children, title, stepNumber, info }) => {
  const { appointment, worker, step } = useAppSelector(
    (state) => state.bookerSlice
  ); // Redux State selector
  const dispatch = useAppDispatch(); //Redux Dispatch
  const [toggle, setToggle] = useState<boolean>(stepNumber === step); //Components Toggle

  //Function that toggles automaticly , similar to accordion , depending on Redux`s step.
  const Toggle = () => {
    if (stepNumber === 2 && !appointment.service.servicename) {
      console.log("select service");
      return;
    }
    if (stepNumber === 3 && !worker.workername) {
      console.log("select Worker");
      return;
    }
    if (stepNumber === 4 && !appointment.startTime.startTime) {
      console.log("select Time");
      return;
    }
    setToggle(!toggle);
    dispatch(nextStep(stepNumber));
  };

  useEffect(() => {
    if (stepNumber === step) {
      setToggle(true);
    } else {
      setToggle(false);
    }
    return () => {};
  }, [step, stepNumber, appointment, worker]);
  return (
    <Section>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 onClick={Toggle}>{title}</h1>
        <span>{info}</span>
      </div>

      <ToggleDiv toggle={toggle}>{children}</ToggleDiv>
    </Section>
  );
};

export default Wrapper;
