import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

import Home from './Home';
import About from './About';
import Error404 from './Error404';
import Nav from './Nav';

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
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route component={Error404}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppRouter;
