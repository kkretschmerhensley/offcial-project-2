import logo from './logo.svg';
import './App.css';
import {Addition} from './Addition.js';

const App = () => {
  const styles = {
    container: {
      padding: 20,
      backgroundColor: "black",
      color: "white"
    }
  };

  return (
    <div style={styles.container}>
      <Addition numberOne={12} numberTwo={4}/>
      <Addition numberOne={-14} numberTwo={25}/>
      <Addition numberOne={2.27} numberTwo={13.543}/>
    </div>
  );
}

export default App;
