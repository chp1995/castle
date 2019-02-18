import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import { BrowserRouter, Route,Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
          <p>
            Welcome to Query Restaurant Information
          </p>
          <p>
            sss
          </p>
          
          <BrowserRouter>
            <div>
              <br/>
              <Link to="abc"> 家</Link>
              <br/>
              <Route path="/abc" component={Home}/>
            </div>
              
          </BrowserRouter>
        </header>
        
      </div>
    );
  }
}

export default App;
