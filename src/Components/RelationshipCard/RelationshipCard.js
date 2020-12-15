import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import cuid from 'cuid';
import profileImg from '../../profileImg.jpg';

export default class RelationshipCard extends Component {
    render(){

        const {firstName, lastName, nickname, imageUrl, id} = this.props;
        let profilePath = `/view/${id}`;
        let name = `${firstName} ${lastName}`;

        let image = imageUrl ? imageUrl : profileImg

        return(
            <div className="relationshipCard">
                <Link to={profilePath}>
                    <div key={cuid()}>
                        <img src={image} alt='profile'/> 
                        <div className="cardContent">
                            <p>{nickname}</p>
                            <p>{name}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}