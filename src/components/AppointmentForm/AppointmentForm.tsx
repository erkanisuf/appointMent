import React, { useState } from "react";
import { FormEvent } from "react";
import Wrapper from "../../utils/Wrapper";
import { FormContainer } from "./AppointmentFormStyles";
const axios = require("axios").default;
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

  const PostAppointment = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/api/Appointments", {
        customer: {
          firstName: "ReactName",
          lastName: "reactLastName",
          email: "react@gmail.com",
          details: "From React",
        },
        appointment: {
          date: "2021-05-28T19:34:53.479Z",
          startTime: "11:30",
          information: "react",
          duration: 80,
          employeeid: 3,
          serviceid: 1,
        },
      })
      .then(function (response: any) {
        // handle success
        console.log(response);
      })
      .catch(function (err: any) {
        // handle error
        console.log(err);
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <Wrapper
      title={"Appointment Form"}
      stepNumber={4}
      info={succs ? "Booking completed" : ""}
    >
      <FormContainer onSubmit={PostAppointment}>
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
