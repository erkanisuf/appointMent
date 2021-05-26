import styled from "styled-components";

//colors
export const greyishColor = "#e4e8eb";
export const blueColor = "#518bff";
export const h1Color = "#3d4656";
export const toggleDivbackground = "#ffffff";
export const radiusborder = "15px";
export const errorColor = "#f42a62";
export const greenColor = "#32d386";
//font sizes
export const h1Size = "18px";
export const errorSize = "13px";
export const pSize = "13px";
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
  @media (max-width: 768px) {
    width: 100%;
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
  display: number;
}
export const DivError = styled.div<IDivErrorv>`
  background-color: ${errorColor};
  color: white;
  font-size: ${errorSize};
  border-radius: 5px;
  padding: 5px;
  display: ${(props) => (props.display === 1 ? "flex" : "none")};
  margin: 0px 15px;
  min-width: 20%;
  justify-content: space-between;
  span {
    margin: 0 auto;
  }
`;

export const DivInfo = styled.div<IDivErrorv>`
  background-color: ${greenColor};
  color: white;
  font-size: ${errorSize};
  border-radius: 5px;
  padding: 5px;
  display: ${(props) => (props.display === 1 ? "flex" : "none")};
  margin: 0px 15px;
  min-width: 20%;
  justify-content: space-between;
  span {
    margin: 0 auto;
  }
`;
