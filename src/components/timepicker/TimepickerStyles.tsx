import styled from "styled-components";
import {
  blueColor,
  greenColor,
  greyishColor,
  pSize,
} from "../../utils/WrapperStyles";

export const BtnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    background-color: ${blueColor};
    border: none;
    outline: none;
    cursor: pointer;

    &:nth-last-of-type(1) {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      margin-right: 15px;
    }
    &:nth-last-of-type(2) {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:hover {
      background-color: #6f9bf3;
    }
  }
`;
export const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: ${greyishColor};
  margin: 5px;
  padding: 5px;
  font-weight: 600;
  p {
    margin: 0;

    font-size: ${pSize};
  }
`;

interface ITimeItem {
  active: boolean;
}
export const TimeItem = styled.p<ITimeItem>`
  margin: 3px;
  cursor: pointer;
  background-color: ${(prop) => (prop.active ? greenColor : "")};
  color: ${(prop) => (prop.active ? "white" : "")};
  border-radius: ${(prop) => (prop.active ? "5px" : "")};
  &:hover {
    background-color: ${greyishColor};
  }
`;
