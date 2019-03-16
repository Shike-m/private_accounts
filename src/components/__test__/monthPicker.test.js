import React from 'react';
import { mount } from 'enzyme';
import MonthPicker from '../monthPicker';

const props = {
    year: 2018,
    month: 3,
    onChange: jest.fn()
}

let wraper;

describe('test component MonthPicker', () => {
    beforeEach(() => {
        wraper=mount(<MonthPicker {...props}/>);
    })
    it('should render component to match the snapshot', () => {
        expect(wraper).toMatchSnapshot();
    });
    it('show correct dropdown year and month', () => {
        const text = wraper.find('.dropdown-toggle').first().text();
        expect(text).toEqual('2018--03');
        expect(wraper.find('.dropdown-menu').length).toEqual(0);
        expect(wraper.state('isOpen')).toEqual(false);
        expect(wraper.state('selectedYear')).toEqual(props.year);
        
    });
    it('after click, dropdown list ', () => {
        wraper.find('.dropdown-toggle').simulate('click');
        expect(wraper.state('isOpen')).toEqual(true);
        expect(wraper.find('.dropdown-menu').length).toEqual(1);
        expect(wraper.find('.years-range').length).toEqual(9);
        expect(wraper.find('.months-range').length).toEqual(12);
        expect(wraper.find('.years-range.dropdown-item.active').text()).toEqual('2018');
    });
    it('select year and month', () => {
        wraper.find('.dropdown-toggle').simulate('click');
        wraper.find('.years-range.dropdown-item').first().simulate('click');
        expect(wraper.find('.years-range.dropdown-item').first().hasClass('active')).toEqual(true);
        expect(wraper.state('selectedYear')).toEqual(2014);
        wraper.find('.months-range.dropdown-item').first().simulate('click');
        expect(wraper.state('isOpen')).toEqual(false);
        expect(props.onChange).toHaveBeenCalledWith(2014, 1);
    });
})