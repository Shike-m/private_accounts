import React from 'react';
// import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon'

class CategorySelect extends React.Component{

    render(){
        const {categories}=this.props;
        return (
            <div className="category-select-component">
                <div className='row'>
            {
                categories.map((category,index)=>{
                    return (
                        <div className="category-item" key={index}>
                            <Icon>{category.iconName}</Icon>
                        </div>
                    )
                })
            }
                </div>
            </div>
        )
    }
}

CategorySelect.propType={

}
export default CategorySelect;