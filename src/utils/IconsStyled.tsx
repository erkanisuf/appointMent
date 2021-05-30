import { ArrowDropDown, ArrowDropUp } from "@styled-icons/material-twotone/";
import { ErrorCircle } from "@styled-icons/boxicons-regular/ErrorCircle";
import styled, { keyframes } from "styled-components";
import { blueColor, errorColor, greenColor } from "./WrapperStyles";
import { GppGood } from "@styled-icons/material-outlined/GppGood";
import { NavigateNext } from "@styled-icons/material-rounded/NavigateNext";
import { NavigateBefore } from "@styled-icons/material-outlined/NavigateBefore";
import { Spinner10 } from "@styled-icons/icomoon/Spinner10";
import { EmojiSmileFill } from "@styled-icons/bootstrap/EmojiSmileFill";
import { EmojiSad } from "@styled-icons/fluentui-system-filled/EmojiSad";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { NewMessage } from "@styled-icons/entypo/NewMessage";
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

export const NextIcon = styled(NavigateNext)`
  width: 25px;
  color: white;
`;
export const PrevIcon = styled(NavigateBefore)`
  width: 25px;
  color: white;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const SpinnerIcon = styled(Spinner10)`
  width: 25%;
  padding: 50px;
  color: ${greenColor};
  animation: ${rotate} 1.5s linear infinite;
`;

const scale = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
`;
export const SmileIcon = styled(EmojiSmileFill)`
  width: 25%;
  padding: 50px;
  color: ${greenColor};
  animation: ${scale} 1.5s infinite alternate;
`;
export const SadIcon = styled(EmojiSad)`
  width: 25%;
  padding: 50px;
  color: ${errorColor};
  animation: ${scale} 1.5s infinite alternate;
`;
export const CloseIcon = styled(Close)`
  width: 25px;
  color: white;
`;
export const NewAppointmentIcon = styled(NewMessage)`
  width: 25px;
  color: white;
`;
