import React from 'react';
import propTypes from 'prop-types';
import { padLeft, range } from '../utility';

class MonthPicker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: false
        }
    }
    toggleDropDown=(ev)=>{
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        const{year,month}=this.props;
        const{isOpen}=this.state;
        const monthRange=range(12,1);
        const yearRange = range(9, -4).map(number=>number+year);

        return(
            <div className = "dropdown month-picker-component" style={{margin:'auto 20px'}}>
                <h4>Pick date</h4>
                <button class="btn btn-secondary dropdown-toggle" 
                    onClick={this.toggleDropDown}
                >
                    {`${year}--${padLeft(month)}`}
                </button>
                {
                    isOpen&&
                    <div className='dropdown-menu' style={{display: 'block'}}>
                        <div className='row'>
                            <div className='col border-right'>
                               { yearRange.map((yearNumber,index)=>
                                    <a key={index} className='dropdown-item'>
                                            {yearNumber}
                                    </a>
                                )}
                            </div>
                            <div className='col border-right'>
                               { monthRange.map((monthNumber,index)=>
                                    <a key={index} className='dropdown-item'>
                                            {padLeft(monthNumber)}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
MonthPicker.propTypes = {
    
}

export default MonthPicker;