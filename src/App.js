import React, {useState} from 'react';
import './App.css';
import './UserInput/UserInput.css'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

function App() {
  const [state, setstate] = useState({
    username : 'Shambhawi'
  })

  const [userInput, setUserInput] = useState('');

  let setUserHandler = (event)=>{
    setstate({
      username: event.target.value
    })
  };

  let calcLengthHandler = (event)=>{
    setUserInput(event.target.value);
  }

  const deleteCharCmp = (index)=>{
    const input = [...userInput.split('')];
    input.splice(index,1);
    setUserInput(input.join(''));
  }

  let charArr = [...userInput.split('')];
  let charCmp = ( <div>
        { userInput.length? <label className='delete'>Click on character box to delete character</label> : null}
        {
          charArr.map((character,index)=>{
            return (
              <CharComponent 
              click={deleteCharCmp.bind(this,index)} 
              char={character} 
              key={index}></CharComponent>
            )
          })
        }
    </div>)

  return (
    <div className="App">
      <div className='container'>
        <h1 className='container-output'>Apply Binding</h1>
        <UserInput changeUser={setUserHandler} value={state.username}></UserInput>
        <UserOutput username={state.username}></UserOutput>
      </div>
      <div className='container'>
        <h1 className='container-output'>Dynamic List</h1>
        <input type='text' className='user-input' onChange={calcLengthHandler} value={userInput} placeholder='Enter user input'></input>
        <p className='container-output inline'>Length of user input: {userInput.length}</p>
        <ValidationComponent length={userInput.length}></ValidationComponent>
        {charCmp}
      </div>
    </div>
  );
}

export default App;
