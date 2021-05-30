import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface IInitialState {
  appointment: {
    service: Iservice;
    startTime: IstartTime;
    duration: number;
    date: string;
  };
  step: number;
  employee: IEmployee;
}

export interface Iservice {
  serviceName: string;
  serviceId: number;
  serviceInfo?: string;
  imageUrl?: string;
  duration: number;
  price: number;
}
export interface IEmployee {
  employeeName: string;
  employeeId: number;
  employeeImgLink?: string;
}
export interface IstartTime {
  id: string;
  startTime: string;
}
const ResetState = () => {
  return {
    appointment: {
      service: { serviceName: "", serviceId: 0, duration: 0, price: 0 },
      startTime: { startTime: "", id: "" },
      duration: 0,
      date: "",
    },
    step: 1, //step is used for the toggling
    employee: { employeeName: "", employeeId: 0 }, //
  };
};
// Define the initial state using that type
const initialState: IInitialState = {
  appointment: {
    service: { serviceName: "", serviceId: 0, duration: 0, price: 0 },
    startTime: { startTime: "", id: "" },
    duration: 0,
    date: "",
  },
  step: 1, //step is used for the toggling
  employee: { employeeName: "", employeeId: 0 }, //
};

export const bookerSlice = createSlice({
  name: "booker",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeService: (state, action: PayloadAction<Iservice>) => {
      state.appointment.service = action.payload;
    },
    changeDate: (state, action: PayloadAction<string>) => {
      state.appointment.date = action.payload;
    },
    changeStartTime: (state, action: PayloadAction<IstartTime>) => {
      state.appointment.startTime = action.payload;
    },
    changeDuration: (state, action: PayloadAction<number>) => {
      state.appointment.duration = action.payload;
    },
    changeWorker: (state, action: PayloadAction<IEmployee>) => {
      state.employee = action.payload;
    },
    nextStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    ResetREDUX: (state) => {
      state.appointment = ResetState().appointment;
      state.employee = ResetState().employee;
      state.step = ResetState().step;
    },
  },
});

export const {
  changeService,
  changeStartTime,
  changeDuration,
  nextStep,
  changeDate,
  changeWorker,
  ResetREDUX,
} = bookerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBooker = (state: RootState) => state.bookerSlice;

export default bookerSlice.reducer;
