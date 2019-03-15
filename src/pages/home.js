import React, { Component,Fragment } from 'react';
import PriceList from '../components/priceList';
import ViewTab from '../components/viewTab';
import TotalPrice from '../components/totalPrice';
import MonthPicker from '../components/monthPicker';
import CreateBtn from '../components/createBtn';
import { LIST_VIEW, CHART_VIEW, TOTAL_INCOME,TOTAL_OUTCOME } from '../constants';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../logo.svg';
import '../App.css';



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
class Home extends Component {
    render() {
        let totalIncome = 0, totalOutcome = 0;
        items.map((item) => {
            if (item.category.type === TOTAL_INCOME) {
                totalIncome += item.price;
            }
            if (item.category.type === TOTAL_OUTCOME) {
                totalOutcome += item.price;
            }
        })
        return (
            <Fragment>
                <header className='app-header'>
                    <div className='row mb-5'>
                        <img src={logo} className='app-logo' alt='logo'/>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <MonthPicker
                                year={2019}
                                month={3}
                                onChange={()=>{}}
                            />
                        </div>
                        <div className='col'>
                            <TotalPrice
                                income={totalIncome}
                                outcome={totalOutcome}
                            />
                        </div>
                    </div>
                </header>
                <div className='content-area py-3 px-3'>
                    <ViewTab activeTab={LIST_VIEW} onTabChange={() => { }} />
                    <CreateBtn onClick={() => { }} />
                    <PriceList
                        items={items}
                        onModifyItem={() => { }}
                        onDeleteItem={() => { }}
                    />
                </div>
            </Fragment>
        )
    }
}

export default Home;