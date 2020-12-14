import React, { Component } from 'react';
import profileImg from '../../profileImg.jpg'

export default class ProfileView extends Component{
    render(){
        return(
            <article id="profileView" className='articleView profileView' >
                <h3>Relationship Profile</h3>
                <div>
                    <img 
                        className="profileImg"
                        src={profileImg}
                        alt='profile image'
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