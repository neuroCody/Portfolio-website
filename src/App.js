import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.scss';

class App extends Component {
  render() {
    return(
      <div className= "App"
        style={{paddingLeft: 0, paddingRight: 0}}
      >
        <Main />
      </div>
    )
  }
}


export default App;
