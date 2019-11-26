import React from 'react';

const KeyDiv = props => {
    return (
      <button className="blankKey" id={props.id} onClick={props.clickHandler}>
        {props.value}
      </button>
    );
  };
  
export default KeyDiv;
