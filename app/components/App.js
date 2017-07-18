import React from 'react';

import Home from './Home';
import About from './About';
import Error404 from './Error404';
import Nav from './Nav';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      section: 'home'
    }
    this.changeSection = this.changeSection.bind(this);
  }
  changeSection(e){
    this.setState({
      section:e.target.id
    })
  }

  render() {
    let component;
    const nombre = 'Facundo'
    switch (this.state.section) {
      case 'home':
        component = <Home />
        break;
      case 'about':
        component = <About />
        break;
      case 'error':
        component = <Error404 />
        break;
      default:
        component = <Error404 />
    }
    return (
      <div>
        <Nav funcion={this.changeSection}/>
        {component}
      </div>
    )
  }
}

export default App;
