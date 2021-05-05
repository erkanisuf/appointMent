import React from "react";
import Wrapper from "../../utils/Wrapper";

const AppointmentForm = () => {
  return (
    <Wrapper title={"Appointment Form"} stepNumber={4} info={"xD"}>
      <form>
        <label>First name</label>
        <input></input>
        <label>Last name</label>
        <input></input>
        <label>Phonenumber</label>
        <input></input>
        <label>Email</label>
        <input></input>
      </form>
    </Wrapper>
  );
};

export default AppointmentForm;
