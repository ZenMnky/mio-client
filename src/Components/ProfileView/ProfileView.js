import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import profileImg from '../../profileImg.jpg'
import { AppContext } from '../../Context/AppContext';

class ProfileView extends Component{
    static contextType = AppContext;

    render(){
        const { handleGetById } = this.context;

        
        // get id
        const { id } = this.props.match.params;
        handleGetById(id)



        // check if id is valid
        // if(!profile) {
        //     // if !valid, redirect to pageNotFound component
        //     this.props.history.push(`/notFound`)
        // }
        

        return(
            <article id="profileView" className='articleView profileView' >
                <h3>Relationship Profile</h3>
                <h2>Relationship id is {id}</h2>
                <div>
                    <img 
                        className="profileImg"
                        src={profileImg}
                        alt='profile'
                    />
                </div>
                <section id="profileContent">
                        <p><em>Name:</em> Fname Lname</p>
                        <p><em>Nickname:</em> lorum ipsum</p>
                        <p><em>Relationship level:</em> Zone #</p>
                        <div>
                            <p><em>Admirable Qaulities:</em></p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies nisl vel sagittis semper. Cras vitae egestas est.</p>
                        </div>
                        <div>
                            <p><em>Notes</em></p>
                            <p>Suspendisse neque dolor, viverra convallis sollicitudin id, sagittis et nibh. Aenean ac diam dignissim, cursus orci id, egestas lacus. </p>
                        </div>         
                        
                        <button>Edit</button>
                </section>
                
        
            </article>
        )
    }
}

export default withRouter(ProfileView);