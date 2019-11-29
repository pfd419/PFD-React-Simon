import { statics, defaultState, getRandomPad } from '../statics';

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case statics.RESET:
      return defaultState;
    case statics.STARTGAME:
      return {
        ...defaultState,
        showSequence: true
      }
    case statics.ENABLEPLAY:
      return {
        ...state,
        playEnabled: true,
        showSequence: false
      };
    case statics.DISABLEPLAY:
      return {
        ...state,
        playEnabled: false,
        showSequence: false
      };
    case statics.PLAYERMOVE:
      return {
        ...state,
        playEnabled: true,
        turn: state.turn + 1
      };
    case statics.ADDSEQUENCE:
      return {
        ...state,
        playEnabled: false,
        gameSequence: state.gameSequence.concat(getRandomPad()),
        showSequence: true,
        score: state.score + 1,
        turn: 0
      };
    default:
      return state;
  }
};
export default reducer;