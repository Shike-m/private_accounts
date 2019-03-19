import React, { Component } from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Example from './components/example';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/exam'>Example</Link>
        </div>
        <Route path='/' exact component={Home} />
        <Route path='/exam' exact component={Example} />
        <Route path='/exam/:name' exact component={Example} />
      </Router>
      
    );
  }
}

export default App;
