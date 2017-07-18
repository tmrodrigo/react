import React from 'react';

const Li = (props) => (
  <li id={props.id} onClick={props.handleClick}>{props.text}</li>
)

export default Li;
