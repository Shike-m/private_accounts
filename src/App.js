import React, { Component } from 'react';
import PriceList from './components/priceList';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const items = [{
  "id": 1,
  "title": "Travel to abroad",
  "price": 100,
  "date": "2019-03-03",
  "category": {
    "id": 1,
    "name": "trip",
    "type": "outcome"
      }
},{
  "id": 2,
  "title": "Travel to abroad",
  "price": 200,
  "date": "2019-03-03",
  "category": {
    "id": 2,
    "name": "food",
    "type": "outcome"
  }
  }
]
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PriceList
            items={items}
            onModifyItem={item=>console.log(item.id)}
            onDeleteItem={item=>console.log(item.id)}
          />
      </div>
    );
  }
}

export default App;
