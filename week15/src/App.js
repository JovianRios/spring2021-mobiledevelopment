import React, { useReducer } from 'react';
import './App.css';
import {state, reducer} from './components/ApplicationState';
import Arms from './components/Arms';
import Legs from './components/Legs';


function App() {

  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <header className="App-header">
        <Arms state={currentState} dispatch={dispatch}/>
        <Legs state={currentState} dispatch={dispatch}/>
      </header>
    </div>
  );
}

export default App;