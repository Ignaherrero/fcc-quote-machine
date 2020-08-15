import React from 'react';

function Machine(props) {
  return (
    <div>
      <cite className="text" id="text">{props.state.newQuote}</cite>
      <p className="author" id="author">- {props.state.newAuthor}</p>
    </div>
  );
}

export default Machine;


