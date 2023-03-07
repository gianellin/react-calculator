import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import Screen from './components/Screen';

function App() {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        <Button
        className=""
        value="0"
        onClick={() => {
          console.log("Button clicked");
        }}
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
