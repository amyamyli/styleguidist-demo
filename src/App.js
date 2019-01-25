import React, { Component } from 'react';
import moment from 'moment';
import date from 'date.js'
import miment from 'miment'
import Button from './components/Button/Button'
import logo from './logo.svg';
import './App.css';
import './less/common.less'

//require('moment/locale/ja');
//moment.locale('ja');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button/>
      </div>
    );
  }
}

export default App;
