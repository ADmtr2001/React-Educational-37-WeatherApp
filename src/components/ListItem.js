import React from "react";
import styled from "styled-components";

const ListItem = () => {
  return (
    <Container>
      There's an action you need to do! There's an action you need to do!
    </Container>
  );
};

export default ListItem;

const Container = styled.div`
  color: palevioletred;
  background: papayawhip;
  font-size: 1.5rem;
  width: 100%;
  height: 60px;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
`;
