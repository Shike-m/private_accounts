import React from 'react';
// import PriceForm from '../components/priceForm';
// import Loader from '../components/loader';
import { TYPE_OUTCOME, TYPE_INCOME } from '../constants';
import { Tab, Tabs } from "../components/tabs";
import CategorySelect from '../components/categorySelect';
import { testCategories } from '../testData';
// import  AppContext  from '../AppContext';
import { withContext } from '../HOC/withContext';
class Create extends React.Component {
    state = {
        selectedTab: TYPE_OUTCOME,
        selectedCategory: null,
        validatePassed: true

    }
    componentDidMount() {
        const { id } = this.props.match.params;
    }

    onCancelSubmit = () => {
        console.log();
    }
    onFormSubmit = () => {

    }
    render() {
        const filterCategories = testCategories.filter((category) => category.type === TYPE_INCOME);
        const { data } = this.props;
        console.log(data);
        return (
            <div style={{ background: '#fff' }} className="create-page py-3 px-3 rounded mt-3">
                <h2>This it is the create</h2>
                <Tabs activeIndex={0} ontabChange={() => { }}>
                    <Tab>Income</Tab>
                    <Tab>Outcome</Tab>
                </Tabs>
                <CategorySelect categories={filterCategories} onSelectCategory={() => { }}></CategorySelect>

                {/* <PriceForm onCancelSubmit={()=>{}}
                        onFormSubmit={() => { }}
                        item={this.state.item}
                    /> */}
            </div>

        )
    }
}

export default withContext(Create);