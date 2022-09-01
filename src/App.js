import React, { useState } from 'react';
import {NumBtn, OperBtn, ExtraBtn, Result, Container} from './styled.js';


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
    setResult(-result)
  }

  const handleKeypress = (e) => {
    console.log(0, e.keyCode)
    if (e.keyCode == 13) {
      let answer = 0
      if (isOper === '+') {
        answer = num + parseFloat(result)
        console.log(num, isOper, result, answer)
      }
      else if (isOper === '-') {
        answer = num - parseFloat(result)
      }
      else if (isOper === '*') {
        answer = num * parseFloat(result)
      }
      else if (isOper === '/') {
        answer = num / parseFloat(result)
      }
      setResult(answer)
      // setNum(num = 0)
      // setisOper(isOper = '')
    }
    else if (e.key === 'c') {
      setResult('')
    }
    else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%') {
      setNum(num = parseFloat(result))
      setResult('')
      setisOper(isOper = e.key)
      // console.log(1, e.key, num, isOper)
    }
    else if (0 <= parseInt(e.key) && parseInt(e.key) <= 9) {
      // console.log(2, e.key, parseInt(e.key))
      if (isOper === '') {
        setResult(result + e.key)
      }
      else {
        setResult(result = e.key)
      }
    }
  }

  return (
    <Container>
      <Result id="result">{result}</Result>
      <div>
        <ExtraBtn onClick={() => {setResult('')}}>AC</ExtraBtn>
        <ExtraBtn onClick={SignToggle}>+/-</ExtraBtn>
        <ExtraBtn onClick={handleKeypress} onKeyUp={handleKeypress}>%</ExtraBtn>
        <OperBtn onClick={handleKeypress} onKeyUp={handleKeypress}>÷</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('7')}} onKeyUp={handleKeypress}>7</NumBtn>
        <NumBtn onClick={() => {inputData('8')}} onKeyUp={handleKeypress}>8</NumBtn>
        <NumBtn onClick={() => {inputData('9')}} onKeyUp={handleKeypress}>9</NumBtn>
        <OperBtn onClick={handleKeypress} onKeyUp={handleKeypress}>x</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('4')}} onKeyUp={handleKeypress}>4</NumBtn>
        <NumBtn onClick={() => {inputData('5')}} onKeyUp={handleKeypress}>5</NumBtn>
        <NumBtn onClick={() => {inputData('6')}} onKeyUp={handleKeypress}>6</NumBtn>
        <OperBtn onClick={handleKeypress} onKeyUp={handleKeypress}>−</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('1')}} onKeyUp={handleKeypress}>1</NumBtn>
        <NumBtn onClick={() => {inputData('2')}} onKeyUp={handleKeypress}>2</NumBtn>
        <NumBtn onClick={() => {inputData('3')}} onKeyUp={handleKeypress}>3</NumBtn>
        <OperBtn onClick={handleKeypress} onKeyUp={handleKeypress}>+</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('0')}} onKeyUp={handleKeypress}>0</NumBtn>
        <NumBtn onClick={() => {inputData('.')}} onKeyUp={handleKeypress}>.</NumBtn>
        <OperBtn onClick={handleKeypress} onKeyUp={handleKeypress}>=</OperBtn>
      </div>
    </Container>
  );
}

export default App;
