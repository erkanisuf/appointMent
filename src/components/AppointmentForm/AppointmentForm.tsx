import React, { useState } from "react";
import { FormEvent } from "react";
import Wrapper from "../../utils/Wrapper";
import { FormContainer } from "./AppointmentFormStyles";

interface IForm {
  name: string;
  lastname: string;
  phonenumber: string;
  email: string;
  info: string;
}
const AppointmentForm = () => {
  const [form, setForm] = useState<IForm>({
    name: "",
    lastname: "",
    phonenumber: "",
    email: "",
    info: "",
  });
  const [error, setError] = useState<boolean>(false);
  const [succs, setSuccs] = useState<boolean>(true);

  const onChangeInput: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper
      title={"Appointment Form"}
      stepNumber={4}
      info={succs ? "Booking completed" : ""}
    >
      <FormContainer>
        <label>First name</label>
        <input
          type="text"
          placeholder="required field"
          onChange={onChangeInput}
          name="name"
        ></input>
        <label>Last name</label>
        <input
          type="text"
          placeholder="required field"
          onChange={onChangeInput}
          name="lastname"
        ></input>
        <label>Phonenumber</label>
        <input
          type="text"
          placeholder="required field"
          onChange={onChangeInput}
          name="phonenumber"
        ></input>
        <label>Email</label>
        <input
          type="text"
          placeholder="required field"
          onChange={onChangeInput}
          name="email"
        ></input>
        <label>More information</label>
        <textarea onChange={onChangeInput} name="info"></textarea>
        <input type="submit" value="Submit" />
      </FormContainer>
    </Wrapper>
  );
};

export default AppointmentForm;
