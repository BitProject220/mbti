import logo from './logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios.get('/hello')
    .then(res => setHello(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{ hello }</div>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
