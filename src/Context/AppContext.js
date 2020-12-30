import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from '../config';

const API_BASE = config.API_BASE_ENDPOINT;

export const AppContext = React.createContext();

export class Provider extends Component {
    constructor(props){
        
        // set up state
        super(props);
        this.state = {
            error: null,
            profiles: [],
            level1: [],
            level2: [],
            level3: [],
            level4: [],
            level5: [],
            selectedProfile: null
        }
    }

        componentDidMount() {
            this.getAllAndSort()
            
        }

        
        /*=============================================
        =            STATE FUNCTIONS            =
        =============================================*/
        
        getAllAndSort = () => {
            this.handleGetAllProfiles()
            .then(() => this.handleSortRelationships())
        }
        
        
        handleSortRelationships = () => {
            let relationships = this.state.profiles;
            let level1 = [];
            let level2 = [];
            let level3 = [];
            let level4 = [];
            let level5 = [];
            
            // sort
            relationships.forEach(relationship => {
                
                // based on the level, assign to state
                switch (relationship.relationship_level) {
                    case 1:
                        level1.push(relationship)
                        break;
                    case 2:
                        level2.push(relationship)
                        break;
                    case 3:
                        level3.push(relationship)
                        break;
                    case 4:
                        level4.push(relationship)
                        break;
                    case 5:
                        level5.push(relationship)
                        break;
                    default:
                        console.log(`no matching case for ${relationship.nickname}`)
                }
            })
    
            // update state
            this.setState({
                level1: level1,
                level2: level2,
                level3: level3,
                level4: level4,
                level5: level5
            })
    
    
        }

        clearSelectedProfile = () => {
            this.setState({
                selectedProfile: null
            })
        }

        getProfileById = (id) => {
            let profile = this.state.profiles.find(profile => profile.id === id)

            return profile;
        }

        /*=====  End of STATE FUNCTIONS  ======*/
        
        
        
        
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

        simpleGetById = (id) => {
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
        }

        // patch by id
        handleUpdateProfile = (id, updatedContent) => {
            
            // fetch
            return fetch(`${API_BASE}/profiles/${id}`, {
                method: 'PATCH',
                headers:{
                    'Content-Type' : 'application/json'
                },
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
               getAllAndSort: this.getAllAndSort,
               handleGetAllProfiles: this.handleGetAllProfiles,
               handleSortRelationships: this.handleSortRelationships,
               handleGetById: this.handleGetById,
               handleInsertProfile: this.handleInsertProfile,
               handleUpdateProfile: this.handleUpdateProfile,
               handleDeleteProfile: this.handleDeleteProfile,
               clearSelectedProfile: this.clearSelectedProfile,
               getProfileById: this.getProfileById,
               simpleGetById: this.simpleGetById,
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