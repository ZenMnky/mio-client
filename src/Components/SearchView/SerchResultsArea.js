import React, { Component } from 'react';
import RelationshipCard from '../RelationshipCard/RelationshipCard';

export default class SearchResultsArea extends Component {
    render(){
        return(
            <section id='searchResults'>
                <div className='sectionTitle'>
                    <h3>Results</h3>
                </div>
                
                <div className="relationshipGroup">
                    <RelationshipCard />
                    <RelationshipCard />
                    <RelationshipCard />       
                </div>
                
            </section>

        )
    }
}