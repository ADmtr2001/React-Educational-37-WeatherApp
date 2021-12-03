import React from "react";
import styled from "styled-components";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import ClearIcon from "@mui/icons-material/Clear";
import ShuffleIcon from "@mui/icons-material/Shuffle";

const Buttons = () => {
  return (
    <Container>
      <Button>
        <SortByAlphaIcon fontSize='large' />
      </Button>
      <Button>
        <ShuffleIcon fontSize='large' />
      </Button>
      <Button>
        <ClearIcon fontSize='large' />
      </Button>
    </Container>
  );
};

export default Buttons;

const Container = styled.div`
  background: #a9d066;
  border: 2px solid black;
  border-radius: 5px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  padding: 10px;
`;

const Button = styled.button`
  height: 90%;
  width: 80px;
  text-align: center;
  font-size: 18px;
  margin: 0 10px;
  background: papayawhip;
  border: 2px solid black;
  border-radius: 5px;
  color: palevioletred;
`;
