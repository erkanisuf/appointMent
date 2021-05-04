import React, { useState } from "react";
import styled from "styled-components";
import { greyishColor, pSize } from "../../utils/WrapperStyles";

export const StyleItemWorker = styled.div`
  display: flex;
  margin: 15px;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  padding: 15px;

  img {
    border-radius: 100%;
    border: 1px solid #ccc;
    background-color: white;
    padding: 5px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 15px;
  }
  p:nth-of-type(1) {
    font-weight: 600;
  }
  p:nth-of-type(2) {
    font-weight: 300;
    font-size: ${pSize};
    color: #b3b0b0;
  }
  &:hover {
    background-color: ${greyishColor};
  }
`;
