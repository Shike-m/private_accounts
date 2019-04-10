import React from 'react';
import propTypes from 'prop-types';
import { padLeft, range } from '../utility';

class MonthPicker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: false,
            selectedYear: this.props.year,
            selectedMonth:this.props.month
        }
    }
    
   
    toggleDropDown=(ev)=>{
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    selectYear = (event,yearNumber) => {
       
        event.preventDefault();
        this.setState({
            selectedYear: yearNumber
        })
    }

    blurHandler = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: false
        })
    }
    selectedMonth = (event, monthNumber) => {
        
        event.preventDefault();
        this.setState({
            isOpen:false,
            
        })
        this.props.onChange(this.state.selectedYear,monthNumber)
    }
    render(){
        const { year, month } = this.props;
        const{isOpen,selectedYear,selectedMonth}=this.state;
        const monthRange=range(12,1);
        const yearRange = range(9, -4).map(number=>number+year);

        return(
            <div className = "dropdown month-picker-component" style={{margin:'auto 20px'}}>
                <h4>Pick date</h4>
                <button className="btn btn-secondary dropdown-toggle" 
                    onClick={this.toggleDropDown}
                    // onBlur={this.blurHandler}
                >
                    {`${year}--${padLeft(month)}`}
                </button>
                {
                    isOpen&&
                    <div className='dropdown-menu' style={{display: 'block'}}>
                        <div className='row'>
                            <div className='col border-right'>
                                {yearRange.map((yearNumber, index) =>
                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    <a key={index}
                                        href="#"
                                        onClick={(event) => {this.selectYear(event,yearNumber)}}
                                        className={(yearNumber === selectedYear) ? "years-range dropdown-item active" : "years-range dropdown-item "}>
                                        {yearNumber}
                                    </a>
                                )}
                            </div>
                            <div className='col border-right'>
                               { monthRange.map((monthNumber,index)=>
                                   // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                   <a key={index} href="#"
                                       onClick = {(ev)=>{this.selectedMonth(ev,monthNumber)}}
                                       className={(monthNumber===selectedMonth)?"months-range dropdown-item active":"months-range dropdown-item"}>
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
    year: propTypes.number.isRequired,
    month: propTypes.number.isRequired,
    changeDate: propTypes.func.isRequired
}

export default MonthPicker;