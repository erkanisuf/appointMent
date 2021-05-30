import React, { useState } from "react";
import { FormEvent } from "react";
import { ResetREDUX } from "../../Redux/Slices/bookerSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import Wrapper from "../../utils/Wrapper";
import Spinner from "../Spinner/Spinner";
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
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<IForm>({
    name: "",
    lastname: "",
    phonenumber: "",
    email: "",
    info: "",
  });
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [succs, setSuccs] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);
  const { appointment, employee } = useAppSelector(
    (state) => state.bookerSlice
  );
  const onChangeInput: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const PostAppointment = (e: FormEvent) => {
    e.preventDefault();
    setSpinner(true);
    setLoading(true);
    axios
      .post("http://localhost:5001/api/Appointments", {
        customer: {
          firstName: form.name,
          lastName: form.lastname,
          email: form.email,
          phonenumber: form.phonenumber,
          details: "",
        },
        appointment: {
          date: appointment.date,
          startTime: appointment.startTime.startTime,
          information: form.info,
          duration: appointment.duration,
          employeeid: employee.employeeId,
          serviceid: appointment.service.serviceId,
        },
      })
      .then(function (response: any) {
        // handle success
        console.log(response);
        if (response.data.error) {
          setSuccs(false);
          setError(true);
        } else {
          setSuccs(true);
          setError(false);
        }
        setLoading(false);
      })
      .catch(function (err: any) {
        // handle error
        console.log(err);
        setLoading(false);
        setError(true);
        setSuccs(false);
      });
  };
  if (spinner) {
    return (
      <Spinner data={"fake data"} loading={loading} error={error}>
        {error && "Error bug!"}
        {succs && "Succsess"}
      </Spinner>
    );
  }
  return (
    <Wrapper
      title={"Appointment Form"}
      stepNumber={4}
      info={succs ? "Booking completed" : ""}
    >
      <button onClick={() => dispatch(ResetREDUX())}>RESET REDUX</button>
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
