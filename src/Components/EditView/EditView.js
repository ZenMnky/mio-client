import React, { Component } from 'react';
import EditRelationshipForm from './EditRelationshipForm';

export default class EditView extends Component {
        
    render(){
        return(
            <article id="editRelationship" className='editRelationship articleView'>
                <h2>Edit Relationship</h2>
                <EditRelationshipForm />   
            </article>
        )
    }
}