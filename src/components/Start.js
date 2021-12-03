import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <Link to='main'>
        <button>Press to start</button>
      </Link>
    </div>
  );
};

export default Start;
