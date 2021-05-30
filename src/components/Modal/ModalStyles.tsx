import styled from "styled-components";
import { blueColor } from "../../utils/WrapperStyles";
interface IModalBackground {
  open: boolean;
  buttonOpen: boolean;
}
export const ModalBackground = styled.div<IModalBackground>`
  top: 0;
  right: 0;
  position: fixed;
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(170, 165, 165, 0.582);
  width: 100%;
  height: 100%;
  min-height: 100vh;

  div {
    background-color: white;
    min-height: 50%;
    min-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  button {
    display: ${(props) => (props.buttonOpen ? "block" : "none")};
    cursor: pointer;
    background-color: ${blueColor};
    color: white;
    width: 160px;
    padding: 7px;
    font-weight: 600;
    border: none;
    border-radius: 15px;
    &:hover {
      background-color: #6f9bf3;
    }
  }

  p {
    font-weight: 700;
    color: #3a3a3a;
  }
`;
