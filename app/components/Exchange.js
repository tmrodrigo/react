import React from 'react';
import 'whatwg-fetch';

class Exchange extends React.Component {
  constructor() {
    super();
    this.state = {
      monedas: [],
    }

    this.crearListado = this.crearListado.bind(this);
  }

  componentDidMount() {
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = () => {
    //   if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
    //     if (xmlhttp.status === 200) {
    //       const monedas = JSON.parse(xmlhttp.responseText);
    //       // console.log('Monedas: ', monedas);
    //       this.setState({
    //         monedas: monedas
    //       })
    //     } else if (xmlhttp.status === 400) {
    //       console.error('ERROR :(');
    //     } else {
    //       console.error('Unknown error');
    //     }
    //   }
    // }
    //
    // xmlhttp.open("GET", "http://api.fixer.io/latest?base=USD", true);
    // xmlhttp.send();
    fetch('http://api.fixer.io/latest?base=EUR')
    .then(res => {
      return res.json()
    })
    .then(data => this.setState({monedas: data}))

  }

  crearListado() {
    const { rates } = this.state.monedas;
    let newArray = [];
    for (let key in rates){
      // console.log(rates[key])
      newArray.push({pais: key, value: rates[key]})
    }
    // console.log(newArray)
    return newArray;
  }

  render() {
    let lista = [];
    if (this.state.monedas.rates){
      lista = this.crearListado();
    };
    const componentes = lista.map(function(data){
      if (data.value > 1) {
        return <li id={data.pais}>Pais: {data.pais}, Valor: <span className="green">{data.value}</span></li>
      } else {
        return <li id={data.pais}>Pais: {data.pais}, Valor: <span className="red">{data.value}</span></li>
      }

    })
    return (
      <div className="exchange">
        <h1>Exchange Api</h1>
        <ul>
          {componentes}
        </ul>
      </div>
    )
  }
}

export default Exchange;
