
import { useState, useEffect } from "react";
import styled from "styled-components";

function Counter() {
  const [counter, setCounter] = useState(0);
  const onPlus = () => setCounter(prev => prev + 1);
  const onMinus = () => setCounter(prev => prev - 1);

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>MY COUNTER</h1>
      <Number><p>{counter}</p></Number>
      <Button><button onClick={onPlus}>PLUS</button></Button>
      <Button><button onClick={onMinus}>MINUS</button></Button>
    </div>
  );
}

const Button = styled.div`
background-color: yellow;
align-items: center;
display: block;
float: left;
diplay: flex;
font-size: 30px;
width: 250px;
height: 50px;
`
const Number = styled.div`
align-items: center;
font-weight: 900;
font-size: 40px;
width: 500px;
`

export default Counter;