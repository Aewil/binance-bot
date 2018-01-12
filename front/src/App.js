import React, { Component } from 'react';
import './App.css';
import fetchival from 'fetchival';

class App extends Component {
  
  constructor(props) {
    super(props);
    setInterval(() =>  {
      this.trx();
    }, 1000);
    this.state = {
      toto: 0,
      now: 0,
      lastMinute: 0,
      purcentOne: 0,
      oneMinute: 0,
      FiveMinute: 0,
      TenMinute: 0,
    }
  }

  trx() {
    fetchival('http://api.binance.openpornbar.com/')
    .get()
    .then(res => {
      if (this.state.lastMinute + 1 === this.state.now || this.state.lastMinute === 0) {
        this.setState ({
          oneMinute: res.value,
          lastMinute: new Date().getMinutes()
        })
      }
      this.setState ({
        toto: res.value,
      })
    });
  }
  
  render() {
    return (
      <html>
        <title>{this.state.toto}</title>
        <div>Cours : {this.state.toto}</div>
        <div>% Last Minute : {((((this.state.oneMinute * 100) / Number(this.state.toto)) - 100)*-1).toFixed(2)} ( {this.state.oneMinute} )</div>
      </html>
    );
  }

}

export default App;
