import React, { Component } from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Example from './pages/example';
import Create from './pages/create';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className='routers'>
          <Link to='/'>Home</Link>
          <Link to='/exam'>Example</Link>
          <Link to='/create/:id'>Create</Link>
        </div>
        <Route path='/' exact component={Home} />
        <Route path='/exam' exact component={Example} />
        <Route path='/create' exact component={Create} />
        <Route path='/create/:id' exact component={Create} />
      </Router>
      
    );
  }
}

export default App;
