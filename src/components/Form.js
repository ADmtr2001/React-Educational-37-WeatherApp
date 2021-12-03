import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <Container>
      <Input type='text' placeholder='Task' />
      <Button>Go!</Button>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  height: 80px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const Input = styled.input`
  width: 400px;
  height: 60%;
  font-size: 18px;
  margin: 0 10px;
  padding: 10px;
  background: papayawhip;
  border: 2px solid black;
  border-radius: 5px;

  color: palevioletred;

  ::placeholder {
    color: palevioletred;
  }
`;

const Button = styled.button`
  height: 60%;
  font-size: 18px;
  padding: 0 20px;
  margin: 0 10px;
  background: papayawhip;
  border: 2px solid black;
  border-radius: 5px;
  color: palevioletred;
`;
