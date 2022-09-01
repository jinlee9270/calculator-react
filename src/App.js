import React, { useState } from 'react';
import {ResultBox, NumBtn, OperBtn, ExtraBtn, Result, Container} from './styled.js';


function App() {
  let [result, setResult]  = useState('')
  let [num,setNum] = useState('0')
  let [isOper, setisOper] = useState('')

  const inputData = (data) => {
    if (result === ''){
      setResult(result = data)
    }
    else {
      setResult(result + data)
    }
  }

  const SignToggle = () => {
    if (result === '') {
      setResult('-')
    }
    else if (result === '-') {
      setResult('')
    }
    else {
      setResult(-result)
    }
  }


  return (
    <Container>
      <Result id="result">{result}</Result>
      <div>
        <ExtraBtn onClick={() => {setResult('')}}>AC</ExtraBtn>
        <ExtraBtn onClick={SignToggle}>+/-</ExtraBtn>
        <ExtraBtn>%</ExtraBtn>
        <OperBtn>÷</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('7')}}>7</NumBtn>
        <NumBtn onClick={() => {inputData('8')}}>8</NumBtn>
        <NumBtn onClick={() => {inputData('9')}}>9</NumBtn>
        <OperBtn>x</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('4')}}>4</NumBtn>
        <NumBtn onClick={() => {inputData('5')}}>5</NumBtn>
        <NumBtn onClick={() => {inputData('6')}}>6</NumBtn>
        <OperBtn>−</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('1')}}>1</NumBtn>
        <NumBtn onClick={() => {inputData('2')}}>2</NumBtn>
        <NumBtn onClick={() => {inputData('3')}}>3</NumBtn>
        <OperBtn>+</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('0')}} >0</NumBtn>
        <NumBtn onClick={() => {inputData('.')}} >.</NumBtn>
        <OperBtn >=</OperBtn>
      </div>
    </Container>
  );
}

export default App;
