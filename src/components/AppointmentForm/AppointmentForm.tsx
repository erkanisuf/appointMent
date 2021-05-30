import React, { useState } from "react";
import { FormEvent } from "react";
import { ResetREDUX } from "../../Redux/Slices/bookerSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import Wrapper from "../../utils/Wrapper";
import Spinner from "../Spinner/Spinner";
import { FormContainer } from "./AppointmentFormStyles";
import Modal from "../Modal/Modal";
import { ErrorIcon, SadIcon, SmileIcon } from "../../utils/IconsStyled";
import { MergeErrors } from "../../utils/Functions";
import { useForm } from "react-hook-form";
const axios = require("axios").default;
export interface IForm {
  firstName: string;
  lastName: string;
  phonenumber: string;
  email: string;
  details: string;
}
const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  console.log(errors);
  const [error, setError] = useState<boolean>(false);
  const [errorlist, setErrorList] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [succs, setSuccs] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const { appointment, employee } = useAppSelector(
    (state) => state.bookerSlice
  );

  const PostAppointment = (input: IForm, e: any) => {
    console.log(input);

    // e.preventDefault();
    setModal(true);
    setLoading(true);
    axios
      .post("http://localhost:5001/api/Appointments", {
        customer: {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          phonenumber: input.phonenumber,
          details: input.details,
        },
        appointment: {
          date: appointment.date,
          startTime: appointment.startTime.startTime,
          information: input.details,
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
          dispatch(ResetREDUX());
          reset();
          setSuccs(true);
          setError(false);
        }
        setLoading(false);
      })
      .catch(function (err: any) {
        // handle error

        console.log(err.response.status, "STATUS");
        if (err.response.status === 400) {
          setErrorList(MergeErrors(Object.values(err.response.data.errors)));
        }
        setLoading(false);
        setError(true);
        setSuccs(false);
      });
  };
  const CloseModal = (e: boolean) => {
    setModal(e);
    setSuccs(false);
    setError(false);
  };
  if (modal) {
    return (
      <Modal
        open={modal}
        error={error}
        succsess={succs}
        closeModal={CloseModal}
      >
        <Spinner
          data={"fake data"}
          loading={loading}
          error={error}
          errorlist={errorlist}
        >
          {error && (
            <>
              <SadIcon />
              <p>Something Went wrong ,please try again !</p>
            </>
          )}
          {succs && (
            <>
              <SmileIcon />
              <p>
                Appointment successfully done! Details has been sent to email.
              </p>
            </>
          )}
        </Spinner>
      </Modal>
    );
  }
  return (
    <Wrapper
      title={"Appointment Form"}
      stepNumber={4}
      info={succs ? "Booking completed" : ""}
    >
      <FormContainer onSubmit={handleSubmit(PostAppointment)}>
        <div>
          <label>First name</label>
          <input
            type="text"
            placeholder="required field"
            {...register("firstName", { required: true })}
          />
          <p>
            {errors.firstName && (
              <>
                <ErrorIcon />
                First name is required.
              </>
            )}
          </p>
        </div>
        <div>
          <label>Last name</label>
          <input
            type="text"
            placeholder="required field"
            {...register("lastName", { required: true })}
          />
          <p>
            {errors.lastName && (
              <>
                <ErrorIcon />
                Last name is required.
              </>
            )}
          </p>
        </div>
        <div>
          <label>Phonenumber(+)</label>
          <input
            type="tel"
            placeholder="e.g 358503040519"
            {...register("phonenumber", {
              required: ", Required",
              minLength: 6,
              maxLength: 12,
            })}
          />
          <p>
            {errors.phonenumber && (
              <>
                <ErrorIcon />
                Invalid format {errors.phonenumber.message}!
              </>
            )}
          </p>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="required field"
            {...register("email", {
              required: ", Required",
              pattern: /^\S+@\S+$/i,
            })}
          />
          <p>
            {errors.email && (
              <>
                <ErrorIcon />
                Invalid format {errors.email.message}!
              </>
            )}
          </p>
        </div>
        <div>
          <label>More information</label>
          <textarea {...register("details", { required: false })}></textarea>
          <p></p>
        </div>
        <input type="submit" value="Submit Appointment" />
      </FormContainer>
    </Wrapper>
  );
};

export default AppointmentForm;
