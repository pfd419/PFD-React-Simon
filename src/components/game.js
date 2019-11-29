import React, { useCallback, useEffect, useReducer } from 'react';

import reducer from '../reducers';
import { defaultState, statics } from '../statics';

import './game.css';

const Game = () => {
  const [val, dispatch] = useReducer(reducer, defaultState);

  const startGame = () => {
    dispatch({ type: statics.STARTGAME });
  };

  const pressPad = async pad => {
    pad.classList.add("pressed");
    document.getElementById(pad.id + "-audio").play();
    await new Promise(done => setTimeout(() => done(), 500));
    pad.classList.remove("pressed");
    await new Promise(done => setTimeout(() => done(), 500));
  };

  const showGameSequence = useCallback(async () => {
    await new Promise(done => setTimeout(() => done(), 1000));
    for (const pad of val.gameSequence) {
      await pressPad(document.getElementById(pad));
    }
    dispatch({ type: statics.ENABLEPLAY });
  }, [val.gameSequence])

  const showLoss = () => {
    for (const padId of [1, 2, 3, 4]) {
      pressPad(document.getElementById("pad" + padId));
    }
  };

  const playHandler = (e) => {
    const pad = e.target;
    if (val.playEnabled) {
      dispatch({ type: statics.DISABLEPLAY });
      const correctMove = val.gameSequence[val.turn];
      if (pad.id === correctMove) {
        pressPad(pad);
        if (val.turn===(val.gameSequence.length-1)) {
          dispatch({ type: statics.ADDSEQUENCE });
        } else {
          dispatch({ type: statics.PLAYERMOVE, pad: pad.id });
        }
      } else {
        showLoss();
      }
    }
  };

  useEffect(() => {
    if (val.showSequence) {
      showGameSequence();
    }
  }, [val.showSequence, showGameSequence]);
  
  return (
    <div className="board">
      <div className="background" />
      <div id="pad1" className="quarter quarter1" onClick={playHandler} />
      <div id="pad2" className="quarter quarter2" onClick={playHandler} />
      <div id="pad3" className="quarter quarter3" onClick={playHandler} />
      <div id="pad4" className="quarter quarter4" onClick={playHandler} />
      <audio id="pad1-audio" src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" />
      <audio id="pad2-audio" src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3" />
      <audio id="pad3-audio" src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3" />
      <audio id="pad4-audio" src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" />
      <div className="horizontal" />
      <div className="vertical" />
      <div className="cutout">
        <div className="top">
          <div className="scoreDisplay">{val.score}</div>
        </div>
        <div className="bottom">
          <button className="startBtn" onClick={startGame} />
        </div>
      </div>
    </div>
  );
};
export default Game;