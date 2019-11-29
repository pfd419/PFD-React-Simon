import React from 'react';

import Game from './components/game';

import './App.css';

const App = () => {
    return (
      <div className="game">
        <div className="banner">
          Simon
          <div className="sub-banner">Would you like to play a game???</div>
        </div>
        <Game />
      </div>
    );
  };
export default App;
