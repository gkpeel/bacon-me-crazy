import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import ClickGame from './components/ClickGame';
import './App.css';

class App extends Component {
  state = {
    score: 0,
    topScore: 0
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Jumbotron>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <header className="App-header">
                    <div className="display-1">Bacon Me Crazy!</div>
                    <h1>Click on the bacons (Kevin or regular) without repeating yourself</h1>
                  </header>
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
