import React from 'react';

import Li from './Li';
import Button from './Button';

const Nav = (props) => (
  <nav className='nav'>
    <ul>
      <Li id="home" handleClick={props.funcion} text="Home" />
      <Li id= "about" handleClick={props.funcion} text="About" />
      <Li id="error" handleClick={props.funcion} text="Error" />
      <Button id="boton" text="cambiar"/>
    </ul>
  </nav>
)

export default Nav;
