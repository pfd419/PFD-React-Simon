import React from 'react';

import valueReducer from './reducers';
import { defaultState } from './statics';

import KeyDiv from './components/keydiv';

import './App.css';

const App = () => {
  const [val, dispatch] = React.useReducer(valueReducer, defaultState);

  const clickHandler = e => {
    dispatch({
      type: e.target.id,
      character: e.target.innerHTML
    });
  };

  return (
    <div className="calculator">
      <table>
        <tbody>
        <tr>
          <td colSpan="5">
            <input
              className="displayWindow"
              id="displayFull"
              type="text"
              value={val.input}
              readOnly
            />
            <br />
            <input
              className="displayWindow"
              id="display"
              type="text"
              value={val.display}
              readOnly
            />
          </td>
        </tr>
        <tr>
          <td>
            <KeyDiv id="seven" value="7" clickHandler={clickHandler} />
          </td>
          <td>
            <KeyDiv id="eight" value="8" clickHandler={clickHandler} />
          </td>
          <td>
            <KeyDiv id="nine" value="9" clickHandler={clickHandler} />
          </td>
          <td />
          <td>
            <KeyDiv id="add" value="+" clickHandler={clickHandler} />
          </td>
        </tr>
        <tr>
          <td>
            <KeyDiv id="four" value="4" clickHandler={clickHandler} />
          </td>
          <td>
            <KeyDiv id="five" value="5" clickHandler={clickHandler} />
          </td>
          <td>
            <KeyDiv id="six" value="6" clickHandler={clickHandler} />
          </td>
          <td />
          <td>
            <KeyDiv id="subtract" value="-" clickHandler={clickHandler} />
          </td>
        </tr>
        <tr>
          <td>
            <KeyDiv id="one" value="1" clickHandler={clickHandler} />
          </td>
          <td>
            <KeyDiv id="two" value="2" clickHandler={clickHandler} />
          </td>
          <td>
            <KeyDiv id="three" value="3" clickHandler={clickHandler} />
          </td>
          <td />
          <td>
            <KeyDiv id="multiply" value="*" clickHandler={clickHandler} />
          </td>
        </tr>
        <tr>
          <td>
            <KeyDiv id="decimal" value="." clickHandler={clickHandler} />
          </td>
          <td>
            <KeyDiv id="zero" value="0" clickHandler={clickHandler} />
          </td>
          <td>
            <KeyDiv id="clear" value="&#9249;" clickHandler={clickHandler} />
          </td>
          <td />
          <td>
            <KeyDiv id="divide" value="/" clickHandler={clickHandler} />
          </td>
        </tr>
        <tr>
          <td colSpan="5">
            <KeyDiv id="equals" value="=" clickHandler={clickHandler} />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
