import * as math from 'mathjs';
import { statics, defaultState } from '../statics';

const valueReducer = (state, action) => {
  // Get current values stripped of leading zero
  const currentKey = action.character;
  let currentInput =
    state.input.toString() === "0" ? "" : state.input.toString();
  let currentNumber =
    state.display.toString() === "0" ? "" : state.display.toString();

  let newNumber;
  let newInput;

  switch (action.type) {
    case statics.CLEAR:
      return defaultState;
    case statics.EQUALS:
      let newValue = math.evaluate(state.input);
      return {
        display: newValue,
        input: newValue
      };
    case statics.ADD:
    case statics.SUBTRACT:
    case statics.MULTIPLY:
    case statics.DIVIDE:
      let lastKey = currentInput.charAt(currentInput.length - 1);
      const operators = ["+", "*", "/", "-"];
      if (operators.includes(currentKey) && currentKey !== "-") {
        // Strip all pervious operators (except when "-" currentKey)
        while (operators.includes(lastKey)) {
          currentInput = currentInput.slice(0, -1);
          lastKey = currentInput.charAt(currentInput.length - 1);
        }
      }
      newInput = currentInput + currentKey;
      return {
        display: "",
        input: newInput
      };
    default:
      // Determine newly entered values stripped of extraneous decimals
      newNumber =
        currentKey !== "." || currentNumber.split(".").length <= 1
          ? currentNumber + currentKey
          : currentNumber;
      newInput =
        currentKey !== "." || currentNumber.split(".").length <= 1
          ? currentInput + currentKey
          : currentInput;
      return {
        input: newInput,
        display: newNumber
      };
  }
};

export default valueReducer;