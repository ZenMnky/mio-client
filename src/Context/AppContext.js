import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from '../config';

const API_BASE = config.API_BABSE_ENDPOINT;

export const AppContext = React.createContext();

export class Provider extends Component {
    constructor(props){
        
        // set up state
        super(props);
        this.state = {
            error: null,
            profiles: [],
            level01: [],
            level02: [],
            level03: [],
            level04: [],
            level05: [],
            selectedProfile: null
        }
    }

        componentDidMount() {
            this.handleGetAllProfiles()
            .then(() => this.handleSortRelationships())
            console.log('Context mounted')
        }

        
        /*=============================================
        =            STATE FUNCTIONS            =
        =============================================*/
        
        
        
        
        handleSortRelationships = () => {
            console.log('handleSortRelationships fired!')
            let relationships = this.state.profiles;
            let level01 = [];
            let level02 = [];
            let level03 = [];
            let level04 = [];
            let level05 = [];
            
            // sort
            relationships.forEach(relationship => {
                
                // based on the level, assign to state
                switch (relationship.relationship_level) {
                    case 1:
                        level01.push(relationship)
                        break;
                    case 2:
                        level02.push(relationship)
                        break;
                    case 3:
                        level03.push(relationship)
                        break;
                    case 4:
                        level04.push(relationship)
                        break;
                    case 5:
                        level05.push(relationship)
                        break;
                    default:
                        console.log(`no matching case for ${relationship.nickname}`)
                }
            })
    
            // update state
            this.setState({
                level01: level01,
                level02: level02,
                level03: level03,
                level04: level04,
                level05: level05
            })
    
    
        }

        // findById = (id) => {
        //     let profile = this.state.profiles.find(profile => profile.id === id);
        //     console.log('found this profile: ', profile)
        // }
        
        /*=====  End of STATE FUNCTIONS  ======*/
        
        clearSelectedProfile = () => {
            this.setState({
                selectedProfile: null
            })
        }
        
        
        /*=============================================
        =            API FUNCTIONS            =
        =============================================*/
    
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
            const url = `${API_BASE}/profiles`;

            // fetch
            return fetch(url, {
                method: 'POST',
                body: JSON.stringify(newProfile),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                console.log('posted. response okay')
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
            .then(results => {
                this.setState({
                    selectedProfile: results
                })
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
        
        /*=====  End of API FUNCTIONS  ======*/
        
        

        render(){
            const contextValues = {
               ...this.state,
               handleGetById: this.handleGetById,
               handleInsertProfile: this.handleInsertProfile,
               clearSelectedProfile: this.clearSelectedProfile

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