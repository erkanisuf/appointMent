import React, { useEffect, useState } from "react";
import { useAppSelector } from "../Redux/hooks";
import { Section, ToggleDiv } from "./WrapperStyles";

interface IWrapper {
  children: React.ReactNode;
  title: string;
  stepNumber: number;
}
const Wrapper: React.FC<IWrapper> = ({ children, title, stepNumber }) => {
  const step = useAppSelector((state) => state.bookerSlice.step);
  const [toggle, setToggle] = useState<boolean>(stepNumber === step);
  const Toggle = () => {
    if (step < stepNumber) {
      console.log("choose service first");
    } else {
      setToggle(!toggle);
    }
  };
  useEffect(() => {
    if (stepNumber === step) {
      setToggle(true);
    } else {
      setToggle(false);
    }
    return () => {};
  }, [step, stepNumber]);
  return (
    <Section>
      <h1 onClick={Toggle}>{title}</h1>
      <ToggleDiv toggle={toggle}>{children}</ToggleDiv>
    </Section>
  );
};

export default Wrapper;
