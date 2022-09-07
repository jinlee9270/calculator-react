import React, { useState } from 'react';
import { NumBtn, OperBtn, Result, ExtraBtn, Container} from './styled.js';


function App() {
  const [input, setInput]  = useState('')
  const [num,setNum] = useState(0)
  const [oper,setOper] = useState('')
  console.log('num = ',num,'input = ',input,"oper = ",oper)


  const inputData = (data) => {
    if (input === '') {
      setInput(data)
    }
    else if (oper !== '' || num !== '') {
      setNum(input)
      setInput(data)
    }
    else {
      setInput(input + data)
    }
  }

  const SignToggle = () => {
    if (input !== '') {
      setInput(-input)
    }
  }

//키보드 이벤트 부분
const OnKeyUp = (e) => {
  const event = e.key
  if (0 <= event && event <= 9){
    inputData(event)
  }
  else if (event === 'c' || event === 'esc') {
    ClearMemory()
  }
  else {
    Calculate(event)
  }
}

const ClearMemory = () => {
  setInput('')
  setNum(0)
  setOper('')
}

const Calculate = (curOper) => {
  console.log(curOper, oper)
  if (curOper === '%') {
    Percent()
  }

  else if (oper === '' && curOper !== '') {
    setOper(curOper)
    setNum(parseFloat(input))
    setInput('')
  }

  else if (oper !== '' && curOper === '=') {
    if (oper === '+') {
      Plus()
    }
    else if (oper === '-') {
      Minus()
    }
    else if (oper === '/') {
      Divide()
    }
    else if (oper === '*') {
      Multiple()
    }
  }
  else if (oper !== '' && curOper !== '=') {
    if (oper === '+') {
      Plus()
    }
    else if (oper === '-') {
      Minus()
    }
    else if (oper === '/') {
      Divide()
    }
    else if (oper === '*') {
      Multiple()
    }
    setOper(curOper)
  }
}

const Plus = () => {
  setInput(num + parseFloat(input))
}

const Minus = () => {
  setInput(num - parseFloat(input))
}

const Multiple = () => {
  setInput(num * parseFloat(input))
}

const Divide = () => {
  setInput(num / parseFloat(input))
}

const Percent = () => {
  setInput(0.01 * parseFloat(input))
}

  return (
    <Container>
      <Result id="result">{input}</Result>
      <div>
        <ExtraBtn onClick={ClearMemory} onKeyUp={OnKeyUp}>AC</ExtraBtn>
        <ExtraBtn onClick={SignToggle}>+/-</ExtraBtn>
        <ExtraBtn onClick={() => Calculate('%')} onKeyUp={OnKeyUp}>%</ExtraBtn>
        <OperBtn onClick={() => Calculate('/')} onKeyUp={OnKeyUp}>÷</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('7')}} onKeyUp={OnKeyUp}>7</NumBtn>
        <NumBtn onClick={() => {inputData('8')}} onKeyUp={OnKeyUp}>8</NumBtn>
        <NumBtn onClick={() => {inputData('9')}} onKeyUp={OnKeyUp}>9</NumBtn>
        <OperBtn onClick={() => Calculate('*')} onKeyUp={OnKeyUp}>x</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('4')}} onKeyUp={OnKeyUp}>4</NumBtn>
        <NumBtn onClick={() => {inputData('5')}} onKeyUp={OnKeyUp}>5</NumBtn>
        <NumBtn onClick={() => {inputData('6')}} onKeyUp={OnKeyUp}>6</NumBtn>
        <OperBtn onClick={() => Calculate('-')} onKeyUp={OnKeyUp}>−</OperBtn>
      </div>
      <div>
        <NumBtn onClick={() => {inputData('1')}} onKeyUp={OnKeyUp}>1</NumBtn>
        <NumBtn onClick={() => {inputData('2')}} onKeyUp={OnKeyUp}>2</NumBtn>
        <NumBtn onClick={() => {inputData('3')}} onKeyUp={OnKeyUp}>3</NumBtn>
        <OperBtn onClick={() => Calculate('+')} onKeyUp={OnKeyUp}>+</OperBtn>
      </div>
      <div>
        <NumBtn width = '210px' onClick={() => {inputData('0')}} onKeyUp={OnKeyUp}>0</NumBtn>
        <NumBtn onClick={() => {inputData('.')}} onKeyUp={OnKeyUp}>.</NumBtn>
        <OperBtn onClick={() => Calculate('=')} onKeyUp={OnKeyUp}>=</OperBtn>
      </div>
    </Container>
  );
}

export default App;
