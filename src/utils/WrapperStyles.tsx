import styled from "styled-components";

export const Section = styled.div`
  width: 80%;
  height: 100%;
  background-color: #b4b3b3;
  border: 1px solid black;
  margin: 0 auto;
`;

interface IToggleDiv {
  toggle: boolean;
}
export const ToggleDiv = styled.div<IToggleDiv>`
  width: 100%;
  height: ${(props) => (props.toggle ? "100%" : "0")};
  min-height: ${(props) => (props.toggle ? "100%" : "0")};
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
  opacity: ${(props) => (props.toggle ? "1" : "0")};
  background-color: #6b3da7;
  transform: ${(props) =>
    props.toggle ? "translateY(-1em)" : "translateY(-0.5em)"};
  transition: 0.3s;
`;
