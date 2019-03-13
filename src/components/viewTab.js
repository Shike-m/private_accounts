import React from 'react';
import { Icon } from 'antd';
import propTypes from 'prop-types';
import { LIST_VIEW, CHART_VIEW } from '../constants';

const generateLinkClass = (current, view) => {
    return (current === view) ? "nav-link active" : "nav-link";
}
const ViewTab = ({ activeTab, onTabChange }) => {
    return (
        <ul class="nav nav-tabs nav-fill my-4">
            <li className="nav-item">
                <a
                    class={generateLinkClass(activeTab, LIST_VIEW)}
                    href="#"
                    onClick={(ev) => { ev.preventDefault(); onTabChange(LIST_VIEW) }}
                >
                    <Icon type="file"
                        className="rounded-circle mr-2"
                        fontSize='25px'
                        color="#00dfbb"
                    />
                    Lists of Price</a>
            </li>
            <li class="nav-item">
            <a
                    className={generateLinkClass(activeTab, CHART_VIEW)}
                    href="#"
                    onClick={(ev) => { ev.preventDefault(); onTabChange(CHART_VIEW) }}
            >
                    <Icon type='pie-chart'
                        className="rounded-circle mr-2"
                        fontSize='25px'
                        color="#00dfbb"
                    />
                    Lists of Charts</a>
            </li>
        </ul>
    )
}

ViewTab.propTypes = {
    activeTab: propTypes.string.isRequired,
    onTabChange: propTypes.func.isRequired
}
export default ViewTab;