import React, { Component, Fragment } from 'react';
import PriceList from '../components/priceList';
// import ViewTab from '../components/viewTab';
import TotalPrice from '../components/totalPrice';
import MonthPicker from '../components/monthPicker';
import CreateBtn from '../components/createBtn';
import { Tabs, Tab } from '../components/tabs';
// import Loader from '../components/loader';
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME } from '../constants';
import { parseToYearAndMonth, padLeft } from '../utility';
// import AppContext from '../AppContext';
import { withContext } from '../HOC/withContext';
import { withRouter } from 'react-router-dom';
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

const tabsText = [LIST_VIEW, CHART_VIEW];

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
            tabView: tabsText[view]
        })
    }

    changeDate = (year, month) => {
        this.setState({
            currentDate: { year, month }
        })
    }

    modifyItem = (item) => {
        this.props.history.push(`/create/${item.id}`)
        // const modifiedItems = this.state.items.map(item => {
        //     if (item.id === modifiedItem.id) {
        //         return { ...item, title: "updated" }
        //     } else {
        //         return item;
        //     }
        // });
        // this.setState({
        //     items: modifiedItems
        // })
    }

    createItem = () => {
        this.props.history.push('/create');
    }

    deleteItem = (item) => {
        this.props.actions.deleteItem(item);
        // const filterItems = this.state.items.filter(item => item.id !== deleteItem.id);
        // this.setState({
        //     items: filterItems
        // })
    }

    render() {
        const { data } = this.props;
        // console.log(data);
        const { items, currentDate, tabView } = this.state;
        // const { data } = this.props;
        // const { isLoading } = data;
        const tabIndex = tabsText.findIndex(tabText => tabText === tabView)
        const itemsWithCategory = items.map(item => {
            item.category = categories[item.cid];
            return item;
        }).filter(item => {
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
        })
        let totalIncome = 0, totalOutcome = 0;
        itemsWithCategory.map((item) => {
            if (item.type === TYPE_INCOME) {
                totalIncome += item.price;
            }
            if (item.type === TYPE_OUTCOME) {
                totalOutcome += item.price;
            }
        })
        return (

            <Fragment>
                <header className='app-header'>
                    <div className='row md-5 logo-position'>
                        <img src={logo} className='App-logo' alt='logo' />
                    </div>
                    <div className='row' >
                        <div className='col' >
                            <MonthPicker
                                year={currentDate.year}
                                month={currentDate.month}
                                onChange={this.changeDate}
                            />
                        </div>
                        <div className='col' style={{ height: '60px' }}>
                            <TotalPrice
                                income={totalIncome}
                                outcome={totalOutcome}
                            />
                        </div>
                    </div>
                </header>
                <div className='content-area py-3 px-3'>
                    {/* {isLoading && <Loader />} */}
                    {<React.Fragment>
                        <Tabs activeIndex={tabIndex} onTabChange={this.changeView}>
                            <Tab>List view</Tab>
                            <Tab>Chart View</Tab>
                            <Tab>test</Tab>
                        </Tabs>
                    </React.Fragment>}
                    {/* <ViewTab activeTab={tabView} onTabChange={this.changeView} /> */}
                    <CreateBtn createItem={this.createItem} />
                    {tabView === LIST_VIEW &&
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

export default withRouter(withContext(Home));