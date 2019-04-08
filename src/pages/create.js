import React from 'react';
import PriceForm from '../components/priceForm';

const Create = ({ match }) => {
    return (
        <div>
            <h2>This it is the create page {match.params.id}</h2>
            {/* <PriceForm /> */}
        </div>
       )
}

export default Create;