import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color: white;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

//this is called creating variant styled(Button) here Button is a function and it will have same properties as upper one have
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background: black;
    border: 1px solid transparent;
    color: white;
  }
`;
