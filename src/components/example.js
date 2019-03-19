import React from 'react';


const Example = ({ match }) => {
    return (
        <h2>THis is an { match.params.name } of router.</h2>
    )
}

export default Example;