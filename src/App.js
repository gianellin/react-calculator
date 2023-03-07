import './App.css';
import Wrapper from './components/Wrapper';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import Screen from './components/Screen';

const btnCalc = [
  ["AC", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];


function App() {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        {
          btnCalc.flat().map((btn,  i) =>{
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals": ""}
                value={btn}
                onClick={() => {
                console.log(`${btn} clicked!`);
                }}
              />
            );
          })   
      }
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
