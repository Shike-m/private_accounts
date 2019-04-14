import React, { Component } from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Example from './pages/example';
import Create from './pages/create';
import AppContext from './AppContext';
import './App.css';
import { parseToYearAndMonth } from './utility';
import 'bootstrap/dist/css/bootstrap.min.css';
import { testcategories,testItems, testCategories} from './testData';
import { flatterArr } from './utility';


console.log(flatterArr(testItems));
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      items: flatterArr(testItems),
      categories: flatterArr(testCategories),
      // isLoading: false,
      // currentDate: parseToYearAndMonth()
    }
    this.actions = {
      deleteItem: (item) => {
        delete this.state.items[item.id];
        this.setState({
          items: this.state.items
        })
      }
    }
  }
  
  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        actions: this.actions
      }}> 
        <Router>
        <div className='routers'>
          <Link to='/'><span className="nav-link">Home</span></Link>
          <Link to='/create'><span className="nav-link">Create</span></Link>
          <Link to='/create/:id'><span className="nav-link">Create with id</span></Link>
        </div>
        <Route path='/' exact component={Home} />
        <Route path='/create' exact component={Create} />
        <Route path='/create/:id' exact component={Create} />
      </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
