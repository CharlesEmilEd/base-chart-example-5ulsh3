import React, { Component } from 'react';
import { render } from 'react-dom';
import MyChart from './MyChart';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MyChart />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
