import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import profileImg from '../../profileImg.jpg'
import { AppContext } from '../../Context/AppContext';
import cuid from 'cuid'
import ProfileContent from './ProfileContent';

class ProfileView extends Component{
    static contextType = AppContext;

    componentDidMount() {
        const { id } = this.props.match.params;
        this.context.handleGetById(id)
    }

    componentWillUnmount(){
        // clear selectedProfile
        this.context.clearSelectedProfile()
    }


    render(){
        
        const { selectedProfile } = this.context;
        
        let content;

        if(selectedProfile){
            let {
                first_name,
                last_name,
                nickname,
                image_url,
                notes,
                relationship_level,
                admirable_qualities
            } = selectedProfile;
            
            let image = (image_url) ? image_url : profileImg;


           content = <ProfileContent 
                first_name = {first_name}
                last_name = {last_name}
                nickname = {nickname}
                image_url = {image}
                notes = {notes}
                relationship_level = {relationship_level}
                admirable_qualities = {admirable_qualities}
                 /> 
        } else {
            content = `loading... `
        };
        
    

        return(
            <article key={cuid()} id="profileView" className='articleView profileView' >
                <h2>Relationship Profile</h2>
                {content}
            </article>
        );
    };
};

export default withRouter(ProfileView);