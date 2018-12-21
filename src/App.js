import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron';
import ClickGame from './components/ClickGame';
import KevinBacon from './images/bacon-me-crazy-logo.png';
import './App.css';

const imgStyle = {
  margin: 'auto',
  display: 'block'
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container-fluid heading">
          <Jumbotron>
            <div className="container">
              <div className="row">
                <div className="col-md-9 order-2 order-md-1">
                  <header className="App-header">
                    <div className="display-1 mb-4">Bacon Me Crazy!</div>
                    <h1 className="w-75 font-weight-light font-italic">Click on the bacons (Kevin or regular) without repeating yourself</h1>
                  </header>
                </div>
                <div className="col-md-3 order-1 order-md-2">
                  <img src={KevinBacon} alt="Kevin Bacon Logo" className="img-fluid" style={imgStyle}></img>
                </div>
              </div>
            </div>
          </Jumbotron>
        </div>
        <ClickGame />
      </div>
    );
  }
}

export default App;
