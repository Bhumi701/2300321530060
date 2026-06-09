import Reacy, { useEffect } from 'react';
import { Log } from './utils/logger';
import './App.css';

function App() {
  useEffect(() => {
    Log('App', 'INFO', 'Frontend', 'App mounted successfully');
  }, []);


  const handleClick = () => {
    Log('App', 'INFO', 'Frontend', 'User clicked the button');
  }; 

  const handleError = () => {
    Log('App', 'Error', 'Frontend', 'Something went wrong!');
  };
  return (
    <div className="App">
      <h1>  Logging Middleware Demo</h1>
      <button onClick = {handleClick}> Click me!</button>
      <button onClick = {handleError} className="error">Trigger Error</button>
    </div>
  );
}

export default App;
