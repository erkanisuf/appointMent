import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface IInitialState {
  appointment: {
    service: string;
    startTime: IstartTime;
    duration: number;
    date: string;
  };
  step: number;
}

interface IstartTime {
  id: string;
  startTime: string;
}
// Define the initial state using that type
const initialState: IInitialState = {
  appointment: {
    service: "",
    startTime: { startTime: "", id: "" },
    duration: 0,
    date: "",
  },
  step: 1, //step is used for the toggling
};

export const bookerSlice = createSlice({
  name: "booker",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeService: (state, action: PayloadAction<string>) => {
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
    nextStep: (state) => {
      state.step += 1;
    },
  },
});

export const {
  changeService,
  changeStartTime,
  changeDuration,
  nextStep,
  changeDate,
} = bookerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBooker = (state: RootState) => state.bookerSlice;

export default bookerSlice.reducer;
