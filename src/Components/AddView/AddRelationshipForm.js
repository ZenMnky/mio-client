import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import profileImg from '../../profileImg.jpg';
import setInputHeight from '../../HelperModules/setInputHeight';

class AddRelationshipForm extends Component {
    static contextType = AppContext;

    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            nickname: '',
            image_url: '',
            relationship_level: 1,
            admirable_qualities: '',
            notes: '',
            redirectLoading: false,
        };
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
        
    // !TODO: add form validation functions


    
    /*=============================================
    =            Button Handlers            =
    =============================================*/
        
    /**
     * handleSubmit
     * on submit: POST to API, update state, redirect to newly created profile
     */
    handleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({
            redirectLoading: true
        });

        const { 
            first_name,
            last_name,
            nickname,
            image_url,
            relationship_level,
            admirable_qualities,
            notes
        } = this.state;

        this.resetState();

        const newProfile = {
            first_name,
            last_name,
            nickname,
            image_url,
            relationship_level,
            admirable_qualities,
            notes
        };

        // POST to API
        this.context.handleInsertProfile(newProfile)
            .then((res) => {
                // update state
                this.context.addProfile(res);
                // redirect to newly created profile
                this.props.history.push(`/view/${res.id}`);
            });
    };

    handleReset = (e) => {
        e.preventDefault();
        this.resetState();
    };
    
    /*=====  End of Button Handlers  ======*/

    render(){

        let avatar = (this.state.image_url)
         ? this.state.image_url
         : profileImg;

        const form = (this.state.redirectLoading) 
            ? <p>Loading ... </p> 
            : (
                <>
                    <div>
                        <img 
                            className="profileImg"
                            src={avatar}
                            alt={`${this.state.first_name} ${this.state.last_name} profile`} 
                        />
                    </div>

                    <div>
                        <input 
                            id="first_name" 
                            type="text" 
                            placeholder="first name"
                            value={this.state.first_name}
                            onChange={e => this.firstNameChanged(e.target.value)}
                        />
                        <label htmlFor="first_name"></label>
                    </div>
                        
                    <div>
                        <input 
                            id="last_name" 
                            type="text" 
                            placeholder="last name" 
                            value={this.state.last_name}
                            onChange={e => this.lastNameChanged(e.target.value)}
                        />
                        <label htmlFor="last_name"></label>
                    </div>
                    
                                    
                    <div>
                        <input 
                            id="nickname" 
                            type="text" 
                            placeholder="nickname"
                            value={this.state.nickname}
                            onChange={e => this.nicknameChanged(e.target.value)}
                        />
                        <label htmlFor="nickname"></label>
                    </div>
                    
                    <div>
                        <input 
                            name="image url" 
                            type="text" 
                            placeholder='image url' 
                            value={this.state.image_url}
                            onChange={e => this.imageUrlChanged(e.target.value)}
                        />
                        <label htmlFor="image url"></label>
                    </div>
                    
                    <div>
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
                    </div>
                    <div>
                        <textarea 
                            name="admirable_qualities" 
                            placeholder="admirable qualities"
                            value={this.state.admirable_qualities}
                            onChange={e => {
                                this.admirableQualitiesChanged(e.target.value);
                                setInputHeight(e, '100px');
                            }}
                        / >
                        <label htmlFor='admirable_qualities'></label>
                    </div>
                    
                    <div>
                        <textarea 
                            name="notes" 
                            placeholder="initial relationship notes" 
                            value={this.state.notes}
                            onChange={e => {
                                this.notesChanged(e.target.value);
                                setInputHeight(e, '150px');
                            }}
                        />
                        <label htmlFor='notes'></label>
                    </div>
                    

                    <button
                        type="submit"
                        onClick={event => this.handleSubmit(event)}
                    >
                            Add
                    </button>
                    <button
                        type="reset"
                        onClick={e => this.handleReset(e)}
                    >
                        Cancel
                    </button>
                </>
            );

        return(
            <form id="addRelationshipForm">
                    {form}
            </form>
        );
    };
};

export default withRouter(AddRelationshipForm);