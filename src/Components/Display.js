import React from 'react';

function Machine(props) {
  return (
    <div>
      <p id="text">{props.state.newQuote}</p>
      <p id="author">-{props.state.newAuthor}</p>
    </div>
  );
}

export default Machine;


