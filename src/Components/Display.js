import React from 'react';

function Machine(props) {
  return (
    <div>
      <p className="text" id="text">{props.state.newQuote}</p>
      <p className="author" id="author">-{props.state.newAuthor}</p>
    </div>
  );
}

export default Machine;


