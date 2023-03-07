import './App.css';
import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import Screen from './components/Screen';

const btnPad = [
  ["AC", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];


function App() {

  //STATES
  //num, sign, and asnwer will be the 3 states.
  let [calc, setCalc] = useState({
    num:0, // the entered value
    sign: "", // the selected sign
    answer: 0, // the calculated value
  });



  //FUNCTIONALITY
  //numClickHandler buttons (0–9).
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (calc.num.length < 16) { //up to 16 integers long.
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        answer: !calc.sign ? 0 : calc.answer, //format .0 when this button is pressed
      });
    }
  };

  //Decimal point button "."
  // no multiple decimal points are possible.
  const dotClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  // singClickHandler function "+, -, * or /"
  // The value is then set as the sign STATE in the "calc" object.
  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    setCalc({
      ...calc,
      sign: value,
      answer: !calc.answer && calc.num ? calc.num : calc.answer,
      num: 0,
    });
  };

  // equalsClickHandler function "="
  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;
  
      setCalc({
        ...calc,
        answer:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : math(Number(calc.answer), Number(calc.num), calc.sign),
        sign:"",
        num:0,
      });
    }
  };
  
 

  return (
    <Wrapper>
    {/* ternary operator _ ? _ : _ takes 3 operands (_ -> replace with operands)*/}
      <Screen value={calc.num ? calc.num : calc.answer} />
      <ButtonBox>
        {
          btnPad.flat().map((btn,  i) =>{
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals": ""}
                value={btn}
                onClick={
                  btn === "AC"
                  ? resetClickHandler
                  : btn === "+-"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? dotClickHandler
                  : numClickHandler
                }
              />
            );
          })   
      }
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
