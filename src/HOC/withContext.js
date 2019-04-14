import React from 'react';
import AppContext from '../AppContext';


export const withContext = (Component) => {
    return (props) => {
        return (

            < AppContext.Consumer >
                {
                    ({ state,actions }) => {
                        return (
                            <Component {...props} data={state} actions={actions}/>
                        )
                    }}
            </AppContext.Consumer >

        )
    }
}
