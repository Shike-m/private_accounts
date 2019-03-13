import React, { Component } from 'react';
import PriceList from './components/priceList';
import ViewTab from './components/viewTab';
import { LIST_VIEW, CHART_VIEW } from './constants';
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
    "type": "outcome",
    "iconName": 'car'
      }
},{
  "id": 2,
  "title": "Travel to abroad",
  "price": 200,
  "date": "2019-03-03",
  "category": {
    "id": 2,
    "name": "food",
    "type": "outcome",
    "iconName": 'coffee'
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
        <ViewTab activeTab={LIST_VIEW}
          onTabChange={(view)=>{console.log(view)}}
        />
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
