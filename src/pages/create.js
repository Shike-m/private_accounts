import React from 'react';

const Create = ({ match }) => {
    return (<h2>This it is the create page {match.params.id}</h2>)
}

export default Create;