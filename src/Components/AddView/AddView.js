import React, { Component } from 'react';
import AddRelationshiopForm from './AddRelationshipForm';

export default class AddView extends Component {
    
    render(){
        return(
            <article id="addRelationship" className='addRelationship articleView'>
                <h2>Add Relationship</h2>
                <AddRelationshiopForm />   
            </article>
        );
    };
};