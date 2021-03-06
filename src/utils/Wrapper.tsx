import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { nextStep } from "../Redux/Slices/bookerSlice";
import { Section, DivError, ToggleDiv, DivInfo } from "./WrapperStyles";
import { ArrowDown, ArrowUp, ErrorIcon, OKIcon } from "../utils/IconsStyled";
interface IWrapper {
  children: React.ReactNode;
  title: string;
  stepNumber: number;
  info: string;
}
// Example usage:    <Wrapper title={"Some string name here"} stepNumber={1}> // stepNumber if matches with redux Step , then component toggles to true;
const Wrapper: React.FC<IWrapper> = ({ children, title, stepNumber, info }) => {
  const { appointment, employee, step } = useAppSelector(
    (state) => state.bookerSlice
  ); // Redux State selector
  const dispatch = useAppDispatch(); //Redux Dispatch
  const [toggle, setToggle] = useState<boolean>(stepNumber === step); //Components Toggle
  const [error, setError] = useState<string>("");
  //Function that toggles automaticly , similar to accordion , depending on Redux`s step.
  const Toggle = () => {
    if (stepNumber === 2 && !appointment.service.serviceName) {
      setError("Select service first!");
      return;
    }
    if (stepNumber === 3 && !employee.employeeName) {
      setError("Select employee !");
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
  }, [step, stepNumber, appointment, employee]);
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
        </h1>
        {/* Info display of the selected item by the user (state from redux) */}
        <DivInfo display={info !== "" ? 1 : 0}>
          <OKIcon />
          <span>{info}</span>
        </DivInfo>
        <DivError display={error ? 1 : 0}>
          <ErrorIcon />
          <span>{error}</span>
        </DivError>
      </div>

      <ToggleDiv toggle={toggle}>{children}</ToggleDiv>
    </Section>
  );
};

export default Wrapper;
