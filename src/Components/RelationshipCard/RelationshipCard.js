import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import profileImg from '../../profileImg.jpg';

export default class RelationshipCard extends Component {
    render(){
        return(
            <div className="relationshipCard">
                <Link to='/view/:profileId'>
                    <div>
                        <img src={profileImg} alt='profile image'/> 
                        <div className="cardContent">
                            <p>Nickname</p>
                            <p>Fname Lname</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}