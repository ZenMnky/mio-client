import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AboutView extends Component{
    render(){
        return(
            <article id='aboutView' className='articleView'>
                <h1>About <Link to='/'>Mio</Link></h1>
                <section>
                    <p>
                        Mio is a relationship management tool built to help organize and care for personal relationships. 
                    </p>

                    <p>
                        Mio allows users to add relationships, store, and update important information about the person, as well as journal entries about the relationship.
                    </p>

                    <p>
                        Log notes about important events in their lives that they've shared with you, about striking experiences that you've shared together, and your personal reflections.
                    </p>                
                </section>
                <section>
                    <h2>To get started</h2>
                    <p>
                        The experience starts at the <Link to='/'>home page</Link>.
                    </p>
                    <p>
                        From there, 
                        <br></br>
                        <Link to='/add'>Add</Link> a new profile. <br></br>
                        <Link to='/view'>View all</Link> existing profiles.
                        <br></br>
                        <Link to='/search'>Search</Link> for a specific profile.
                        <br></br>
                        <Link to='/search'>Filter</Link> all profiles by relationship zone
                    </p>
                        
                </section>
                <section>
                    <h2>Intended Updates</h2>
                    <p>
                        Next release will add ability to create user accounts and handle authentication.
                    </p>
                </section>
                
            </article>
            
        )
    }
}