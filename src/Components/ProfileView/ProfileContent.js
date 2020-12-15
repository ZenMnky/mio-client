import cuid from 'cuid';
import React, { Component } from 'react';

class ProfileContent extends Component{
    render(){
        let {
            first_name,
            last_name,
            nickname,
            image_url,
            notes,
            relationship_level,
            admirable_qualities
            } = this.props;

        
        return(
            <article key={cuid()} id='profileContent'>
                <section id='profileImgArea'>
                    <img 
                        className="profileImg"
                        src={image_url}
                        alt='profile'
                    />
                </section>
                <section id="profileContent">
                        <p><em>Name:</em> {first_name} {last_name}</p>
                        <p><em>Nickname:</em> {nickname}</p>
                        <p><em>Relationship level:</em> Zone {relationship_level}</p>
                        <div>
                            <p><em>Admirable Qaulities:</em></p>
                            <p> {admirable_qualities}</p>
                        </div>
                        <div>
                            <p><em>Notes</em></p>
                            <p>{notes}</p>
                        </div>         
                        
                        <button>Edit</button>
                </section>
            </article >
            
        )
    }
}

export default ProfileContent;