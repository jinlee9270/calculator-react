import React, { useState } from 'react';
import {NumBtn, OperBtn, ExtraBtn, Result, Container} from './styled.js';


function App() {
  let [result, setResult]  = useState('')

  const inputData = () => {
    const data = document.getElementById('result').innerText
    const compare = data.slice(-1)
    console.log(compare)
    if (compare === '-') {
      document.getElementById('result').innerText = data.substring(0, data.length - 1)
    }
    else {
      document.getElementById('result').innerText = data + '-'
    }
  }

  // function plus() {

  // }

  // function minus() {

  // }

  // function multi() {

  // }

  // function divide() {

  // }

  // function mod() {

  // }

  // function SignToggle() {
  //   // 마지막 입력 값이 '-'라면 '-'를 제거한다.
  //   // 아니라면 '-'를 추가한다.
  // }

  return (
    <Container>
      <Result id="result">results : {result}</Result>
      <div>
        <ExtraBtn onClick={() => {setResult('')}}>AC</ExtraBtn>
        <ExtraBtn onClick={inputData}>+/-</ExtraBtn>
        <ExtraBtn onClick={() => {setResult(result + '%')}}>%</ExtraBtn>
        <OperBtn onClick={() => {setResult(result + '÷')}}>÷</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {setResult(result + '7')}}>7</NumBtn>
        <NumBtn onClick={() => {setResult(result + '8')}}>8</NumBtn>
        <NumBtn onClick={() => {setResult(result + '9')}}>9</NumBtn>
        <OperBtn onClick={() => {setResult(result + 'x')}}>x</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {setResult(result + '4')}}>4</NumBtn>
        <NumBtn onClick={() => {setResult(result + '5')}}>5</NumBtn>
        <NumBtn onClick={() => {setResult(result + '6')}}>6</NumBtn>
        <OperBtn onClick={() => {setResult(result + '−')}}>−</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {setResult(result + '1')}}>1</NumBtn>
        <NumBtn onClick={() => {setResult(result + '2')}}>2</NumBtn>
        <NumBtn onClick={() => {setResult(result + '3')}}>3</NumBtn>
        <OperBtn onClick={() => {setResult(result + '+')}}>+</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {setResult(result + '0')}}>0</NumBtn>
        <NumBtn onClick={() => {setResult(result + '.')}}>.</NumBtn>
        <OperBtn>=</OperBtn>
      </div>
    </Container>
  );
}

export default App;
