import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import profileImg from '../../profileImg.jpg';
import setInputHeight from '../../HelperModules/setInputHeight';

class EditRelationshipForm extends Component {
    static contextType = AppContext;

    constructor(props){
        super(props);
        this.state = {
            id: '',
            first_name: '',
            last_name: '',
            nickname: '',
            image_url: '',
            relationship_level: 1,
            admirable_qualities: '',
            notes: '',
            stateLoading: true,
            redirectLoading: false
        };
    };

    componentDidMount(){
        //based on the profile id, update state
        let {id} = this.props.match.params;
        
        this.context.simpleGetById(id)
            .then(profile => {
                this.setState({
                    id: profile.id,
                    first_name: profile.first_name,
                    last_name: profile.last_name,
                    nickname: profile.nickname,
                    image_url: profile.image_url,
                    relationship_level: profile.relationship_level,
                    admirable_qualities: profile.admirable_qualities,
                    notes: profile.notes,
                    stateLoading: false
                });
            });
    };
    
    componentWillUnmount(){
        this.setState({
            id: '',
            first_name: '',
            last_name: '',
            nickname: '',
            image_url: '',
            relationship_level: 1,
            admirable_qualities: '',
            notes: '',
            stateLoading: true,
            redirectLoading: false
        });
    };

    
    /*=============================================
    =            State Modifiers            =
    =============================================*/
    
    firstNameChanged = (first_name) => {
        this.setState({
            first_name
        });
    };

    lastNameChanged = (last_name) => {
        this.setState({
            last_name
        });
    };

    nicknameChanged = (nickname) => {
        this.setState({
            nickname
        });
    };

    imageUrlChanged = (image_url) => {
        this.setState({
            image_url
        });
    };

    relationshipLevelChanged = (relationship_level) => {
        this.setState({
            relationship_level
        });
    };

    admirableQualitiesChanged = (admirable_qualities) => {
        this.setState({
            admirable_qualities
        });
    };

    notesChanged = (notes) => {
        this.setState({
            notes
        });
    };

    resetState = () => {
        this.setState({
            first_name: '',
            last_name: '',
            nickname: '',
            image_url: '',
            relationship_level: 1,
            admirable_qualities: '',
            notes: ''
        });
    };
    
    /*=====  End of State Modifiers  ======*/
    
    // !TODO: Add form vaildation functions

    /*=============================================
    =            Button handlers            =
    =============================================*/    
    
    /**
     * handleSave
     * on submit: PATCH to API, update state, redirect to updated created profile
     */
    handleSave = (event) => {
        event.preventDefault();
        
        this.setState(
            {
                stateLoading: true,
            }
        );
        
        const { 
            id,
            first_name,
            last_name,
            nickname,
            image_url,
            relationship_level,
            admirable_qualities,
            notes
        } = this.state;

        this.resetState();

        const updatedProfile = {
            first_name,
            last_name,
            nickname,
            image_url,
            relationship_level,
            admirable_qualities,
            notes
        };

        // PATCH to API
        this.context.handleUpdateProfile(id, updatedProfile)
            .then((res) => {
                this.setState({
                    redirectLoading: true
                });
                // update state
                this.context.handleGetAllProfiles()
                    .then((res) => {
                        this.context.handleSortRelationships()
                    })
                    .then((res) => {
                        // redirect to updated profile view
                        this.props.history.push(`/view/${id}`)
                    });                
            });
    };

    /**
     * handleCancel
     * clear componenet state
     * reroute to profile view
     */
    handleCancel = (e) => {
        e.preventDefault();
        this.props.history.push(`/view/${this.state.id}`);
    };

    handleDelete = (e) => {
        e.preventDefault();
        let result = window.confirm('Are you sure you want to perminatley delete this profile? This action can not be undone.');
        if(result){
            // delete profile - api
            this.context.handleDeleteProfile(this.state.id)
            .then(() => {
                // refresh state - (get & sort)
                this.context.getAllAndSort();
            });
            // redirect to home page
            this.props.history.push('/');
        };
    };
    
    /*=====  End of Button handlers  ======*/
    
    render(){

        let avatar = (this.state.image_url) ? this.state.image_url : profileImg;
        
        let content = '';

        if(this.state.stateLoading){
            content = <p>Loding information...</p>;
        } else if (this.state.redirectLoading){
            content = <p>Updating...</p>;
        } else {
            content = (
                <>
                    <div>
                        <img 
                            className="profileImg"
                            src={avatar}
                            alt={`${this.state.first_name} ${this.state.last_name} profile`}
                        />
                        
    
                    </div>

                    <label htmlFor="first_name"></label>
                        <input 
                            id="first_name" 
                            type="text" 
                            placeholder="first name"
                            value={this.state.first_name}
                            onChange={e => this.firstNameChanged(e.target.value)}
                        />
                        
                    <label htmlFor="last_name"></label>
                    <input 
                        id="last_name" 
                        type="text" 
                        placeholder="last name" 
                        value={this.state.last_name}
                        onChange={e => this.lastNameChanged(e.target.value)}
                    />
                    
                    <label htmlFor="nickname"></label>
                    <input 
                        id="nickname" 
                        type="text" 
                        placeholder="nickname"
                        value={this.state.nickname}
                        onChange={e => this.nicknameChanged(e.target.value)}
                    />
                    
                    <label htmlFor="image url"></label>
                    <input 
                        name="image url" 
                        type="text" 
                        placeholder='image url' 
                        value={this.state.image_url}
                        onChange={e => this.imageUrlChanged(e.target.value)}
                    />
                    
                    <select 
                        name="relationshipZone" 
                        id="selectRelationshipZone"
                        value={this.state.relationship_level}
                        onChange={e => this.relationshipLevelChanged(e.target.value)}
                    >
                        <option value="1">Zone 1</option>
                        <option value="2">Zone 2</option>
                        <option value="3">Zone 3</option>
                        <option value="4">Zone 4</option>
                        <option value="5">Zone 5</option>
                    </select>

                    <textarea 
                        name="admirable_qualities" 
                        placeholder="admirable qualities"
                        value={this.state.admirable_qualities}
                        onChange={e => {
                            this.admirableQualitiesChanged(e.target.value);
                        }}
                    / >
            
                    <textarea 
                        name="notes" 
                        placeholder="initial relationship notes" 
                        value={this.state.notes}
                        onChange={e => {
                            this.notesChanged(e.target.value);
                        }}
                    />

                    <button
                        type="submit"
                        onClick={event => this.handleSave(event)}
                        disabled={this.state.redirectLoading}
                    >
                            Save
                    </button>
                    <button
                        type="button"
                        onClick={e => this.handleCancel(e)}
                        disabled={this.state.redirectLoading}
                    >
                        Cancel
                    </button>
                    <button
                        type='button'
                        onClick={e => this.handleDelete(e)}
                        disabled={this.state.redirectLoading}
                    >
                        Delete Profile
                    </button>
                </>
            );
        };
        

        return(
            <form id="editRelationshipForm">
                   {content} 
            </form>
        );
    };
};

export default withRouter(EditRelationshipForm);