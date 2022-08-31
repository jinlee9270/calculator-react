import React, { useState } from 'react';
import {Btn, Result, Container} from './styled.js';


function App() {
  let [result, setResult]  = useState(0)
  
  return (
    <Container>
      <div>
        <Result>results : {result}</Result>
        <Btn onClick={() => {setResult(result = 0)}}>C</Btn>
        <Btn>()</Btn>
        <Btn>%</Btn>
        <Btn>/</Btn>
      </div>
      <div>
        <Btn>7</Btn>
        <Btn>8</Btn>
        <Btn>9</Btn>
        <Btn>X</Btn>
      </div>
      <div>
        <Btn>4</Btn>
        <Btn>5</Btn>
        <Btn>6</Btn>
        <Btn>-</Btn>
      </div>
      <div>
        <Btn>1</Btn>
        <Btn>2</Btn>
        <Btn>3</Btn>
        <Btn>+</Btn>
      </div>
      <div>
        <Btn>+/-</Btn>
        <Btn>0</Btn>
        <Btn>.</Btn>
        <Btn>=</Btn>
      </div>
    </Container>
  );
}

export default App;
