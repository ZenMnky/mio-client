import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from '../App/App';
import config from '../config';

export const AppContext = React.createContext();

export class Provider extends Component {
    constructor(props){
        
        // set up state
        super(props);
        this.state = {
            error: null,
            profiles: []
        }
    }

        // handle state changes

        // set up provider

        // make api calls
        
            // get all
            // post
            // get by id
            // patch by id
            // delete by id

        render(){
            const contextValues = {
                // contextValues: this.contextValu
            }

            return (
                <AppContext.Provider value={contextValues}>
                    {this.props.children}
                </AppContext.Provider>
            );
        };
}

export const { Consumer } = AppContext;

Provider.propTypes = {
    children: PropTypes.element
}