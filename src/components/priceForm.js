import React from 'react';
import { isValidate } from '../utility';

class PriceForm extends React.Component {
  state = {
    validatePass: true,
    errorMessage:''
  }

  submitForm = (event) => {
    const { item, onFormSubmit } = this.props
    const editMode = !!item.id
    const price = this.priceInput.value.trim() * 1
    const date = this.dateInput.value.trim()
    const title = this.titleInput.value.trim();
    if (price && date && title) {
      if (price < 0) {
        this.setState({
          validatePass: false,
          errorMessage: 'The price must bigger than 0'
        })
      } else if (!isValidate(date)) {
        this.setState({
          validatePass: false,
          errorMessage: 'Please enter right date format'
        })
      } else {
        this.setState({
          validatePass: true,
          errorMessage: ''
        })
      }
      if (editMode) {
        onFormSubmit({ ...item, title, price, date }, editMode)
      } else {
        onFormSubmit({ title, price, date }, editMode)
      }
    }
   else {
      this.setState({
        validatePass: false,
        errorMessage: 'Please enter must filled'
      })
     
      }
       event.preventDefault()
  }

  render() {
    const { price,date } = this.props.item;
        return (
            <div>
              <form onSubmit={event=>{this.submitForm(event)}} noValidate>
              <div className="form-group">
                  <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title"
                  placeholder="Enter title" 
                  ref={input=>{this.titleInput=input}}
                />
                </div>
                <div className="form-group">
                <label htmlFor="price">price *</label>
                <span>￥</span>
                <input type="number"
                  className="form-control" id="price" placeholder="Enter price"
                  defaultValue={price}
                  ref={input=>{this.priceInput=input}}
                />
                </div>
              <div className="form-group">
                 <label htmlFor="date">Date *</label>
                <input type="date" clasName="form-control" id="date"
                  placeholder="Enter date" defaultValue={date}
                  ref={input=>{this.dateInput=input}}
                />
                 
                </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button className="btn btn-secondary" onClick={this.props.onCancelSubmit}>Cancel</button>
              {
                !this.state.validatePass && <div className="alert alert-danger mt-5" role="alert">
                  {this.state.errorMessage}
                </div>
              }
              </form>
            </div>

        )
    }
}

export default PriceForm;
