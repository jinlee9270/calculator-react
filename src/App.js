import React, { useState } from 'react';
import {NumBtn, OperBtn, ExtraBtn, Result, Container} from './styled.js';


function App() {
  let [result, setResult]  = useState('')
  let [num,setNum] = useState('0')
  let [isOper, setisOper] = useState(false)

  const SignToggle = () => {
    let a = document.getElementById('result').innerText
    // console.log(a)
    document.getElementById('result').innerText = -parseFloat(a)
  }

  const handleKeypress = (e) => {
    if (e.key === 'enter' || e.key === '=') {
      //계산 결과 내기
    }
    else if (e.key === 'c') {
      setResult('')
    }
    else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%') {
      let temp = Number(document.getElementById('result').innerText)
      setNum(num = temp)
      setisOper(isOper = e.key)
    }
    else {
      setResult(result + e.key)
    }
  }

  return (
    <Container>
      <Result id="result">{result}</Result>
      <div>
        <ExtraBtn onClick={() => {setResult('')}}>AC</ExtraBtn>
        <ExtraBtn onClick={SignToggle}>+/-</ExtraBtn>
        <ExtraBtn onClick={() => {setResult(result)}} onKeyUp={handleKeypress}>%</ExtraBtn>
        <OperBtn onClick={() => {setResult(result)}} onKeyUp={handleKeypress}>÷</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {setResult(result + '7')}} onKeyUp={handleKeypress}>7</NumBtn>
        <NumBtn onClick={() => {setResult(result + '8')}} onKeyUp={handleKeypress}>8</NumBtn>
        <NumBtn onClick={() => {setResult(result + '9')}} onKeyUp={handleKeypress}>9</NumBtn>
        <OperBtn onClick={() => {setResult(result)}} onKeyUp={handleKeypress}>x</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {setResult(result + '4')}} onKeyUp={handleKeypress}>4</NumBtn>
        <NumBtn onClick={() => {setResult(result + '5')}} onKeyUp={handleKeypress}>5</NumBtn>
        <NumBtn onClick={() => {setResult(result + '6')}} onKeyUp={handleKeypress}>6</NumBtn>
        <OperBtn onClick={() => {setResult(result)}} onKeyUp={handleKeypress}>−</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {setResult(result + '1')}} onKeyUp={handleKeypress}>1</NumBtn>
        <NumBtn onClick={() => {setResult(result + '2')}} onKeyUp={handleKeypress}>2</NumBtn>
        <NumBtn onClick={() => {setResult(result + '3')}} onKeyUp={handleKeypress}>3</NumBtn>
        <OperBtn onClick={() => {setResult(result)}} onKeyUp={handleKeypress}>+</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {setResult(result + '0')}} onKeyUp={handleKeypress}>0</NumBtn>
        <NumBtn onClick={() => {setResult(result + '.')}} onKeyUp={handleKeypress}>.</NumBtn>
        <OperBtn>=</OperBtn>
      </div>
    </Container>
  );
}

export default App;
