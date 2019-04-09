import React from 'react';
// import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';

const Loader=()=>{
    return(
        <div>
            <h3>I am loading...</h3>
            <LinearProgress variant="determinate"/>
        </div>
    )
}

export default Loader;