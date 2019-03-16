import React from 'react';
import propTypes from 'prop-types';

export const TotalPrice = ({income,outcome})=>{
    return(
        <div className="container">
            <div className="row" style={{background: 'black',color: 'white',height:'100px'}}>
                <div className="col">
                    <h5 className="income">Income:<span>{income}</span></h5></div>
                <div className="col">
                    <h5 className="outcome">Outcome:<span>{outcome}</span></h5></div>
            </div>
        </div>
    )
}
TotalPrice.propTypes={
    income:propTypes.number.isRequired,
    outcome: propTypes.number.isRequired
}

export default TotalPrice;
