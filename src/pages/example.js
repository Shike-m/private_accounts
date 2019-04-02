import React from 'react';

const Example = ({ match }) => {

    return (
        <div>
            <h2>THis is an {match.params.name} of routers.</h2>
            <h1>For videos</h1>
            <video src='youtube.com/0011001' style={{width:'300px',height:"400px",margin:'30px'}} controls='controls'></video>
        </div>
       
        
    )
}

export default Example;