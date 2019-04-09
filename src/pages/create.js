import React from 'react';
import PriceForm from '../components/priceForm';
import Loader from '../components/loader';
import { TYPE_OUTCOME,TYPE_INCOME } from '../constants';

class Create extends React.Component{
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
        return (
        <div>
            <h2>This it is the create</h2>
                {/* <PriceForm onCancelSubmit={this.onCancelSubmit}
                    onFormSubmit={this.onFormSubmit}
                    item={this.state.item}
                /> */}
        </div>
       )
    }
}

export default Create;