import React from 'react';
import './App.css';
import LeaderBoard from './containers/LeaderBoardContainer'

function App(props) {
  return (
    <div className="App">
      <nav><h1>Leader Board</h1></nav>
      <LeaderBoard/>
    </div>
  );
}

export default App;
