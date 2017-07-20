import React from 'react';
import 'whatwg-fetch';

//Traer provincias

// http://pilote.techo.org/?do=api.getRegiones?idPais=1

class Paises extends React.Component {
  constructor() {
    super();
    this.state = {
      clima: [],
    }

    this.crearListado = this.crearListado.bind(this);
  }

  componentDidMount() {
    fetch('http://pilote.techo.org/?do=api.getPaises')
      .then(res => {

        return res.json()
      })
      .then(data => {
        console.log(data);
        this.setState({
          paises: data.contenido
        })
      })
      .catch(err => this.setState({ error: 'Intente más tarde'}))

  }

  crearListado() {
    const { rates } = this.state.contenido;
    let newArray = [];
    for (let key in rates){
      console.log(rates[key])
      newArray.push({pais: key, value: rates[key]})
    }
    console.log(newArray)
    return newArray;

  }

  render() {
    // console.log(this.state.clima)
    return (
      <div>
        <h1>Clima Api</h1>
        <ul>

        </ul>
      </div>
    )
  }
}

export default Paises;
