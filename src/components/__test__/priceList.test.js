import React from 'react';
import { shallow } from 'enzyme';
import PriceList from '../priceList';
import { items, categories } from '../../pages/home';
import { Icon } from 'antd';

const itemsWithCategory = items.map(item => {
    item.category = categories[item.cid];
    return item;
});

const props = {
    items: itemsWithCategory,
    onModifyItem: jest.fn(),
    onDeleteItem: jest.fn(),
}

let wraper;
describe('test PriceList component', () => {
    beforeEach(() => {
        wraper = shallow(<PriceList {...props} />)
    });
    it('should render the component to match the snapshot', () => {
        expect(wraper).toMatchSnapshot();
    });
    it('should render correct price items length', () => {
        expect(wraper.find('.list-group-item').length).toEqual(itemsWithCategory.length);
    });
    it('should render correct icon and price for each item', () => {
        const iconList = wraper.find('.list-group-item').first().find(Icon)
        expect(iconList.length).toEqual(3);
        expect(iconList.first().props().type).toEqual(itemsWithCategory[0].category.iconName);
    });
    it('should triger the correct function callback', () => {
        const firstItem = wraper.find('.list-group-item').first();
        firstItem.find('a').first().simulate('click');
        expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCategory[0]);
        firstItem.find('a').last().simulate('click');
        expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCategory[0]);
    })
})