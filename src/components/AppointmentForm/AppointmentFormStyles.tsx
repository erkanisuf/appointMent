import styled from "styled-components";
import { pSize, blueColor } from "../../utils/WrapperStyles";
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
  label {
    font-size: ${pSize};

    margin: 5px;
  }
  input,
  textarea {
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
    background-color: ${blueColor};
    color: white;
    font-weight: 600;
    border: none;
    &:hover {
      background-color: #6f9bf3;
    }
  }
`;
