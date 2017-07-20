import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

import Home from './Home';
import About from './About';
import Error404 from './Error404';
import Exchange from './Exchange';
import Paises from './Paises';

class AppRouter extends React.Component {
  constructor() {
    super();

  }

render() {
    return (
      <Router>
        <div>
          <nav className='nav'>
            <ul>
              <NavLink exact activeClassName='active' to='/'>Home</NavLink>
              <NavLink activeClassName='active' to='/about'>About</NavLink>
              <NavLink activeClassName='active' to='/exchange'>Exchange</NavLink>
              <NavLink activeClassName='active' to='/paises'>Paises</NavLink>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/exchange' component={Exchange}/>
            <Route exact path='/paises' component={Paises}/>
            <Route component={Error404}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppRouter;
