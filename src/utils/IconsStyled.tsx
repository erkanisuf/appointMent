import { ArrowDropDown, ArrowDropUp } from "@styled-icons/material-twotone/";
import { ErrorCircle } from "@styled-icons/boxicons-regular/ErrorCircle";
import styled from "styled-components";
import { blueColor, greenColor } from "./WrapperStyles";
import { GppGood } from "@styled-icons/material-outlined/GppGood";
export const ArrowDown = styled(ArrowDropDown)`
  width: 35px;
  color: ${blueColor};
`;
export const ArrowUp = styled(ArrowDropUp)`
  width: 35px;
  color: ${blueColor};
`;

export const ErrorIcon = styled(ErrorCircle)`
  width: 18px;
  color: white;
`;

export const OKIcon = styled(GppGood)`
  width: 18px;
  color: white;
`;