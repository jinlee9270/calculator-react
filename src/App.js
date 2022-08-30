import React from 'react';
import {Btn, Result, Container} from './styled.js';

let result = 0

function App() {
  return (
    <Container>
      <div>
        <Btn>C</Btn>
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
      <Result>results : {result}</Result>
    </Container>
  );
}

export default App;
