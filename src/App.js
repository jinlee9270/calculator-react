import React, { useState } from 'react';
import {ResultBox, NumBtn, OperBtn, ExtraBtn, Result, Container} from './styled.js';


function App() {
  let [result, setResult]  = useState('')
  let [num,setNum] = useState('')
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

const OnKeyUp = (e) => {
  const event = e.key
  if (0 <= event && event <= 9){
    console.log(event)
    if (result === '') {
      setResult(result = event)
    }
    else {
      setResult(result + event)
    }
  }
  else if (event == 'c' || event == 'esc') {
    setResult('')
    setNum('')
    setisOper('')
  }
  else if (event == 'enter') {
    //plus
    //miinus
    //multiple
    //divide
  }
}

  return (
    <Container>
      <Result id="result">{result}</Result>
      <div>
        <ExtraBtn onKeyUp={OnKeyUp}>AC</ExtraBtn>
        <ExtraBtn onClick={SignToggle}>+/-</ExtraBtn>
        <ExtraBtn>%</ExtraBtn>
        <OperBtn>÷</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('7')}} onKeyUp={OnKeyUp}>7</NumBtn>
        <NumBtn onClick={() => {inputData('8')}} onKeyUp={OnKeyUp}>8</NumBtn>
        <NumBtn onClick={() => {inputData('9')}} onKeyUp={OnKeyUp}>9</NumBtn>
        <OperBtn>x</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('4')}} onKeyUp={OnKeyUp}>4</NumBtn>
        <NumBtn onClick={() => {inputData('5')}} onKeyUp={OnKeyUp}>5</NumBtn>
        <NumBtn onClick={() => {inputData('6')}} onKeyUp={OnKeyUp}>6</NumBtn>
        <OperBtn>−</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('1')}} onKeyUp={OnKeyUp}>1</NumBtn>
        <NumBtn onClick={() => {inputData('2')}} onKeyUp={OnKeyUp}>2</NumBtn>
        <NumBtn onClick={() => {inputData('3')}} onKeyUp={OnKeyUp}>3</NumBtn>
        <OperBtn>+</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('0')}} onKeyUp={OnKeyUp}>0</NumBtn>
        <NumBtn onClick={() => {inputData('.')}} onKeyUp={OnKeyUp}>.</NumBtn>
        <OperBtn >=</OperBtn>
      </div>
    </Container>
  );
}

export default App;
