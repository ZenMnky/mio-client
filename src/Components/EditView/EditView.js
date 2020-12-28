import React, { Component } from 'react';
import EditRelationshipForm from './EditRelationshipForm';

export default class EditView extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <article id="editRelationship" className='editRelationship articleView'>
                <h3>Edit Relationship</h3>
                <EditRelationshipForm />   
            </article>
        )
    }
}