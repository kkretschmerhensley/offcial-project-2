import logo from './logo.svg';
import './App.css';
import {Addition} from './Addition.js';

const App = () => {
  return (
    <>
      <Addition numberOne={12} numberTwo={4}/>
      <Addition numberOne={-14} numberTwo={25}/>
      <Addition numberOne={2.27} numberTwo={13.543}/>
    </>
  );
}

export default App;
