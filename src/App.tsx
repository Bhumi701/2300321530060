import Reacy, { useEffect } from 'react';
import { Log } from './utils/logger';


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
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <h1>  Logging Middleware Demo</h1>
      <button onClick = {handleClick}> Click me!</button>
      <button onClick = {handleError} style={{marginLeft: '10px'}}>Trigger Error</button>
    </div>
  );
}

export default App;
