import React from "react";
import styled from "styled-components";

const ButtonH2c = styled.button`
  background: red;
  font-family: "Quicksand", sans-serif;
  padding: 7px 12px;
  text-transform: uppercase;
  font-size: 2vh;
  overflow: hidden;
  border: 0;
  border-radius: 5px;
  background: #eb3535;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.25s ease;
  cursor: pointer;
  &:active {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    background: #f2b1ae;
  }
`;

const ButtonH1c = styled.button`
  background: red;
  font-family: "Quicksand", sans-serif;
  padding: 7px 12px;
  text-transform: uppercase;
  font-size: 25px;
  overflow: hidden;
  border: 0;
  border-radius: 5px;
  background: #eb3535;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.25s ease;

  &:active {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    background: #f2b1ae;
  }
`;

export const ButtonH2 = (props) => {
  return <ButtonH2c>{props.children}</ButtonH2c>;
};

export const ButtonH1 = (props) => {
  return <ButtonH1c>{props.children}</ButtonH1c>;
};

export default ButtonH2;
