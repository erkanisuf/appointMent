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
  worker: Iworker;
}

export interface Iservice {
  servicename: string;
  id: number;
}
export interface Iworker {
  workername: string;
  id: number;
}
export interface IstartTime {
  id: string;
  startTime: string;
}
// Define the initial state using that type
const initialState: IInitialState = {
  appointment: {
    service: { servicename: "", id: 0 },
    startTime: { startTime: "", id: "" },
    duration: 0,
    date: "",
  },
  step: 1, //step is used for the toggling
  worker: { workername: "", id: 0 }, //
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
    changeWorker: (state, action: PayloadAction<Iworker>) => {
      state.worker = action.payload;
    },
    nextStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
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
} = bookerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBooker = (state: RootState) => state.bookerSlice;

export default bookerSlice.reducer;
