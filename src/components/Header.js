import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Container>Header</Container>;
};

export default Header;

const Container = styled.div`
  background: #8eb54b;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  border: 2px solid black;
  border-top: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`;
