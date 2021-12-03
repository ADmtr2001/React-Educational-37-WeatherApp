import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const List = () => {
  return (
    <Container>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Container>
  );
};

export default List;

const Container = styled.div`
  background: #a9d066;
  width: 80%;
  height: 400px;
  display: flex;
  overflow: auto;
  flex-direction: column;
  margin-top: 5px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
`;
