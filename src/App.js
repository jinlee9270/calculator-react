import React, { useState } from 'react';
import { NumBtn, OperBtn, Result, ExtraBtn, Container} from './styled.js';


function App() {
  const [input, setInput]  = useState('')
  const [num,setNum] = useState('')
  const [oper,setOper] = useState('')
  const [value,setValue] = useState(0)
  // console.log("value",value)

  const inputData = (data) => {
    if (input === '' || oper === '='){
      setInput(data)
    }
    else {
      setInput(input + data)
    }
  }

  const SignToggle = () => {
    if (input === '') {
      setInput('-')
    }
    else if (input === '-') {
      setInput('')
    }
    else {
      setInput(-input)
    }
  }

const OnKeyUp = (e) => {
  const event = e.key
  if (0 <= event && event <= 9){
    inputData(event)
  }
  else if (event === 'c' || event === 'esc') {
    ClearMemory()
  }
}

const ClearMemory = () => {
  setInput('')
  setNum('')
  setValue(0)
  setOper('')
}

const Calculate = (o) => {
  
  if (o === '=') {
    if (oper === '+'){
      setValue(parseFloat(num) + parseFloat(input))
      setInput(parseFloat(num) + parseFloat(input))
    }
    else if (oper === '-'){
      setValue(parseFloat(num) - parseFloat(input))
      setInput(parseFloat(num) - parseFloat(input))
    }
    else if (oper === '*'){
      setValue(parseFloat(num) * parseFloat(input))
      setInput(parseFloat(num) * parseFloat(input))
    }
    else if (oper === '/'){
      setValue(parseFloat(num) / parseFloat(input))
      setInput(parseFloat(num) / parseFloat(input))
    }
  }
  else if (o === '%') {
    setValue(0.01 * parseFloat(input))
    setInput(0.01 * parseFloat(input))
  }
  else{
    setNum(input)
    setInput('')
    setOper(o)
  }
}

  return (
    <Container>
      <Result id="result">{input}</Result>
      <div>
        <ExtraBtn onKeyUp={OnKeyUp} onClick={ClearMemory}>AC</ExtraBtn>
        <ExtraBtn onClick={SignToggle}>+/-</ExtraBtn>
        <ExtraBtn onClick={() => Calculate('%')}>%</ExtraBtn>
        <OperBtn onClick={() => Calculate('/')}>÷</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('7')}} onKeyUp={OnKeyUp}>7</NumBtn>
        <NumBtn onClick={() => {inputData('8')}} onKeyUp={OnKeyUp}>8</NumBtn>
        <NumBtn onClick={() => {inputData('9')}} onKeyUp={OnKeyUp}>9</NumBtn>
        <OperBtn onClick={() => Calculate('*')}>x</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('4')}} onKeyUp={OnKeyUp}>4</NumBtn>
        <NumBtn onClick={() => {inputData('5')}} onKeyUp={OnKeyUp}>5</NumBtn>
        <NumBtn onClick={() => {inputData('6')}} onKeyUp={OnKeyUp}>6</NumBtn>
        <OperBtn onClick={() => Calculate('-')}>−</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('1')}} onKeyUp={OnKeyUp}>1</NumBtn>
        <NumBtn onClick={() => {inputData('2')}} onKeyUp={OnKeyUp}>2</NumBtn>
        <NumBtn onClick={() => {inputData('3')}} onKeyUp={OnKeyUp}>3</NumBtn>
        <OperBtn onClick={() => Calculate('+')}>+</OperBtn>
      </div>
      <div>
        <NumBtn width = '210px' onClick={() => {inputData('0')}} onKeyUp={OnKeyUp}>0</NumBtn>
        <NumBtn onClick={() => {inputData('.')}} onKeyUp={OnKeyUp}>.</NumBtn>
        <OperBtn onClick={() => Calculate('=')}>=</OperBtn>
      </div>
    </Container>
  );
}

export default App;
