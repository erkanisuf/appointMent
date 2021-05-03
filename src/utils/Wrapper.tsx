import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { nextStep } from "../Redux/Slices/bookerSlice";
import { Section, DivError, ToggleDiv } from "./WrapperStyles";
import { ArrowDown, ArrowUp, ErrorIcon } from "../utils/IconsStyled";
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
  const [error, setError] = useState<string>("");
  //Function that toggles automaticly , similar to accordion , depending on Redux`s step.
  const Toggle = () => {
    if (stepNumber === 2 && !appointment.service.servicename) {
      setError("Select service first!");
      return;
    }
    if (stepNumber === 3 && !worker.workername) {
      setError("Select Worker !");
      return;
    }
    if (stepNumber === 4 && !appointment.startTime.startTime) {
      setError("Select appointment time!");
      return;
    }
    setError("");
    setToggle(!toggle);
    dispatch(nextStep(stepNumber));
  };

  useEffect(() => {
    if (stepNumber === step) {
      setError("");
      setToggle(true);
    } else {
      setToggle(false);
    }
    return () => {};
  }, [step, stepNumber, appointment, worker]);
  return (
    <Section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 onClick={Toggle}>
          {toggle ? <ArrowUp /> : <ArrowDown />} {stepNumber}.{title}
          <DivError display={error ? true : false}>
            {error && (
              <span>
                <ErrorIcon /> {error}
              </span>
            )}
          </DivError>
        </h1>

        <div>{info}</div>
      </div>

      <ToggleDiv toggle={toggle}>{children}</ToggleDiv>
    </Section>
  );
};

export default Wrapper;
