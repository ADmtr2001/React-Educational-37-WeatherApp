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
  background: #a9d066;
  border: 2px solid black;
  border-radius: 5px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const Input = styled.input`
  width: 400px;
  height: 60%;
  font-size: 1.1rem;
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
  font-size: 1.1rem;
  padding: 0 20px;
  margin: 0 10px;
  background: papayawhip;
  border: 2px solid black;
  border-radius: 5px;
  color: palevioletred;
`;
