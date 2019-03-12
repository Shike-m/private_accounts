import React from 'react';
import { Icon } from 'antd';

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                items.map((item) => (
                    < li className='list-group-item 
                        d-flex justify-content-between align-items-center' 
                        key={item.id}>
                        <span className='col-1'>
                            <Icon className='rounded-circle'
                                fontSize='30px'
                                style={{ backgroundColor: "#007bff", padding: '5px' }}
                                color='#000'
                                type={item.category.iconName}
                               
                            />
                            {item.category.name}
                        </span>
                        <span className='col-5'>{item.title}</span>
                        <span className='col-2 font-weight-bold'>{item.category.type === "outcome" ? "-" : "+"}{item.price}</span>
                        <span className='col-2'>{item.date}</span>
                        <a className='col-1'
                            onClick={()=>onModifyItem(item)}
                        >
                            <Icon
                                className='rounded-circle'
                                fontSize='30px'
                                style={{ backgroundColor: "#28a745", padding: '5px' }}
                                color='#000'
                                type='form'
                            />
                            </a>
                        <a className='col-1'
                            onClick={()=>onDeleteItem(item)}
                        >
                            <Icon
                                className='rounded-circle'
                                fontSize='30px'
                                style={{ backgroundColor: '#dc3545', padding: '5px' }}
                                color='#000'
                                type='delete'
                            />
                           </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default PriceList;