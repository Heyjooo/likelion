import React from "react";
import Count from "./Counter";
import styled from "styled-components";

function App() {
  return (
      <Counter>
        <Count/>
      </Counter>
  );
}

const Counter = styled.div`
width: 500px;
background-color: pink;
color: white;
font-size: 30px;
margin: 150px 450px;
display: flex;
align-items: flex-end;
text-align: center;

`;

export default App;