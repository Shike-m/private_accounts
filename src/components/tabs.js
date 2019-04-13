/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/aria-role */
import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: props.activeIndex
        }
    }
    onTabChange = (event, index) => {
        event.preventDefault();
        this.setState({
            activeIndex: index
        })
        // this.props.onTabChange(index);
    }
    render() {
        const { children } = this.props;
        return (
            <ul className="nav nav-tabs nav-fill my-4">
                {React.Children.map(children,(child,index)=>{
                    const activeClassName=(this.state.activeIndex===index)?'nav-link active':'nav-link';
                    return (
                        <li className="nav-item">
                             <a
                               className={activeClassName}
                                role='buttion'
                                // onTabChange={() => { }}
                                >{child}</a>
                        </li>
                        )
                    })
               }
            
            </ul>
        )
    }

}
// Tabs.propTypes={
//     activeIndex: PropTypes.number.isRequired,
//     onTabChange: PropTypes.func.isRequired
// }

const Tab=({children})=>{
    return (<Fragment>{children}</Fragment>)
}
export { Tabs,Tab };