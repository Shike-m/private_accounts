import React from 'react';
import AppContext from '../AppContext';


export const withContext = (Component) => {
    return (props) => {
        return (

            < AppContext.Consumer >
                {
                    ({ state }) => {
                        return (
                            <Component {...props} data={state} />
                        )
                    }}
            </AppContext.Consumer >

        )
    }
}
