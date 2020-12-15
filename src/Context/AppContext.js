import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from '../App/App';
import config from '../config';

const API_BASE = config.API_BABSE_ENDPOINT;

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

        componentDidMount() {
            this.handleGetAllProfiles()
            console.log('Context mounted')
        }

        // handle state changes
            // code here

        // make api calls
        
            // get all
            handleGetAllProfiles = () => {
                return fetch(`${API_BASE}/profiles`, {
                    method: 'GET',
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(res.status)
                    }
                    return res.json();
                })
                .then( results => {
                    this.setState({
                        profiles: results
                    })
                })
                .catch(error => this.setState({ error }))
            }
            
            // post
            handleInsertProfile = (newProfile) => {
                // validate. is proifle json object?
                
                // fetch
                return fetch(`${API_BASE}/profiles`, {
                    method: 'POST',
                    body: JSON.stringify(newProfile)
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(res.status)
                    }
                    return res.json();
                })
                .catch(error => this.setState({ error }))
                
            }

            // get by id
            // given an id, return the matching profile
            handleGetById = (id) => {
                
                // fetch
                return fetch(`${API_BASE}/profiles/${id}`, {
                    method: 'GET',
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(res.status)
                    }
                    return res.json();
                })
                .catch(error => this.setState({ error }))
                
            }

            // patch by id
            handleUpdateProfile = (id, updatedContent) => {
                
                // fetch
                return fetch(`${API_BASE}/profiles/${id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(updatedContent)
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(res.status)
                    }
                    return res.json();
                })
                .catch(error => this.setState({ error }))
            }

            // delete by id
            handleDeleteProfile = (id) => {
                // fetch
                return fetch(`${API_BASE}/profiles/${id}`, {
                    method: 'DELETE',
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(res.status)
                    }
                    return res.json();
                })
                .catch(error => this.setState({ error }))
            }

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