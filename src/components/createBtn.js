import React from 'react';
import { Icon } from 'antd';
const CreateBtn = ({ createItem }) => {
    return (
        <button type='button' className='btn btn-primary btn-lg btn-block'
            onClick={()=>createItem()}
        >
            <Icon type = 'plus-circle'/>
            <span>Add A New Item</span>
        </button>
    )
}

export default CreateBtn;