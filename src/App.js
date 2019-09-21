import React, {useState} from 'react';
import logo from './rice.png';
import './App.css';

function App() {
  const [text, setText] = useState("")
  const [count, setCount] = useState(1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <header className="App-body">
        <p>
           Hello! My name is Anna Bai and I'm a freshman at Rice University.
        </p>
        <a
          className="App-link"
          href="https://www.rice.edu/"
          target="_blank"
         rel="noopener noreferrer"
        >
         Check out Rice University!
        </a>
      </header>
      <header className="App-button">
        <button type="button" onClick={() => {
           if (count % 2 === 1)
           {
             setText("Surprise!")
           }
           else
           {
             setText("")
         }
          setCount(count+1)
         }}>
            About Me
          </button>
        <p>{text}</p>
    </header>
    </div>
  );
}


export default App;
