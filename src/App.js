import React, {useState} from 'react';
import './App.css';
import './UserInput/UserInput.css'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


function App() {
  const [state, setstate] = useState({
    username : 'Shambhawi'
  })

  let setUserHandler = (event)=>{
    setstate({
      username: event.target.value
    })
  };

  return (
    <div className="App">
      <h1 className='container-output'>Apply Binding</h1>
      <UserInput changeUser={setUserHandler} value={state.username}></UserInput>
      <UserOutput username={state.username}></UserOutput>
    </div>
  );
}

export default App;
