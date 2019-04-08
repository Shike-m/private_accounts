import React, { Component, Fragment } from 'react';
import PriceList from '../components/priceList';
import ViewTab from '../components/viewTab';
import TotalPrice from '../components/totalPrice';
import MonthPicker from '../components/monthPicker';
import CreateBtn from '../components/createBtn';
import { LIST_VIEW, CHART_VIEW, TOTAL_INCOME, TOTAL_OUTCOME } from '../constants';
import { parseToYearAndMonth ,padLeft} from '../utility';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../logo.svg';
import '../App.css';

export const categories = {
    "1": {
        "id": 1,
        "name": "trip",
        "type": "outcome",
        "iconName": 'car'
    },
    "2": {
        "id": 2,
        "name": "investment",
        "type": "income",
        "iconName": 'coffee'
    }
}

export const items = [{
    "id": 1,
    "title": "Travel to abroad",
    "price": 100,
    "date": "2019-04-03",
    "cid": 1
}, {
    "id": 2,
    "title": "Travel to abroad",
    "price": 200,
    "date": "2019-04-03",
    "cid": 1
}
]
const newItem = {
    "id": 3,
    "title": "sales",
    "price": 200,
    "date": "2019-04-06",
    "cid": 2
}
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items,
            currentDate: parseToYearAndMonth(),
            tabView: LIST_VIEW
        }
    }

    changeView = (view) => { 
        this.setState({
            tabView: view
        })
    }
    
    changeDate = (year, month) => { 
        this.setState({
            currentDate:{year,month}
        })
    }
    
    modifyItem = (modifiedItem) => {
       const modifiedItems=this.state.items.map(item => {
            if (item.id === modifiedItem.id) {
                return { ...item, title: "updated" }
            } else {
                return item;
            }
        });
        this.setState({
            items:modifiedItems
        })
     }
    
    createItem = () => { 
        this.setState({
            items: [newItem,...this.state.items]
        })
    }
    
    deleteItem = (deleteItem) => {
        const filterItems = this.state.items.filter(item => item.id !== deleteItem.id);
        this.setState({
            items:filterItems
        })
     }
    
    render() {
        const { items, currentDate, tabView } = this.state;
        const itemsWithCategory = items.map(item => {
            item.category = categories[item.cid];
            return item;
        }).filter(item => {
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
        })
        let totalIncome = 0, totalOutcome = 0;
        itemsWithCategory.map((item) => {
            if (item.type === TOTAL_INCOME) {
                totalIncome += item.price;
            }
            if (item.type === TOTAL_OUTCOME) {
                totalOutcome += item.price;
            }
        })
        return (
            <Fragment>
                <header className='app-header routers'>
                    <div className='row mb-5'>
                        <img src={logo} className='app-logo' alt='logo' />
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <MonthPicker
                                year={currentDate.year}
                                month={currentDate.month}
                                onChange={this.changeDate}
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
                    <ViewTab activeTab={tabView} onTabChange={this.changeView} />
                    <CreateBtn createItem={this.createItem} />
                    {   tabView===LIST_VIEW &&
                         <PriceList
                        items={itemsWithCategory}
                        onModifyItem={this.modifyItem}
                        onDeleteItem={this.deleteItem}
                    />
                    }
                    {
                        tabView === CHART_VIEW &&
                        <h1>This area for charts</h1>
                    }
                   
                </div>
            </Fragment>
        )
    }
}

export default Home;