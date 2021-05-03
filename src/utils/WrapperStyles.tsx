import styled from "styled-components";

//colors
export const greyishColor = "#f0f4f7";
export const blueColor = "#518bff";
export const h1Color = "#3d4656";
export const toggleDivbackground = "#ffffff";
export const radiusborder = "15px";
export const errorColor = "#f42a62";
//font sizes
export const h1Size = "18px";
export const errorSize = "13px";
// Section is like Container of the <Wrapper /> component
export const Section = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${greyishColor};
  border-radius: ${radiusborder};
  margin: 2px auto;

  h1 {
    font-size: ${h1Size};
    color: ${h1Color};
    cursor: pointer;
    margin: 15px;
    font-weight: 400;
  }
`;

//ToggleDiv for the props.children of the <Wrapper /> Component , its toggling depending on state
interface IToggleDiv {
  toggle: boolean;
}
export const ToggleDiv = styled.div<IToggleDiv>`
  width: 100%;
  display: ${(props) => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  background-color: ${toggleDivbackground};
  border: 1px solid ${greyishColor};
  border-bottom-left-radius: ${radiusborder};
  border-bottom-right-radius: ${radiusborder};
`;
interface IDivErrorv {
  display: boolean;
}
export const DivError = styled.div<IDivErrorv>`
  background-color: ${errorColor};
  color: white;
  font-size: ${errorSize};
  border-radius: 5px;
  padding: 3px;
  display: ${(props) => (props.display ? "block" : "none")};
`;
