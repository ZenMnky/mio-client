import cuid from 'cuid';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ProfileContent extends Component{
    constructor(props){
        super(props)
    }
    
    handleEdit = (e) => {
        e.preventDefault()
        
        this.props.history.push(`/edit/${this.props.match.params.id}`)
    }

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
                        
                        <button onClick={e => this.handleEdit(e) }>Edit</button>
                </section>
            </article >
            
        )
    }
}

export default withRouter(ProfileContent);