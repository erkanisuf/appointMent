import styled from "styled-components";
import {
  pSize,
  blueColor,
  errorColor,
  errorSize,
} from "../../utils/WrapperStyles";
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  div {
    display: flex;
    justify-content: space-between;
  }
  label {
    font-size: ${pSize};
    font-weight: 700;
    width: 100%;
    margin: 5px;
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    margin: 5px;
    &::placeholder {
      font-size: 11px;
    }
  }
  input[type="submit"] {
    cursor: pointer;
    width: 40%;
    margin: 15px auto;
    background-color: ${blueColor};
    color: white;
    font-weight: 600;
    border: none;
    &:hover {
      background-color: #6f9bf3;
    }
  }
  p {
    color: ${errorColor};
    padding: 5px;
    font-size: ${errorSize};
    font-weight: 500;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      background-color: ${errorColor};
      height: 15px;
      width: 15px;

      border-radius: 100%;
    }
  }
`;
