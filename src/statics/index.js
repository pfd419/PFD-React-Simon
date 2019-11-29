export const statics = {
  RESET: "reset",
  STARTGAME: "startgame",
  ADDSEQUENCE: "addsequence",
  ENABLEPLAY: "enableplay",
  DISABLEPLAY: "disableplay",
  PLAYERMOVE: "playermove"
};

export const getRandomPad = () => {
  return "pad" + (Math.floor(Math.random() * 4) + 1);
};

export const defaultState = {
  playEnabled: false,
  gameSequence: [getRandomPad()],
  score: 0,
  turn: 0,
  showSequence: false
};
