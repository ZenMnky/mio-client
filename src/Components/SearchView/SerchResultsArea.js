import React, { Component } from 'react';
import RelationshipCard from '../RelationshipCard/RelationshipCard';

export default class SearchResultsArea extends Component {
    render(){
        return(
            <section id='searchResults'>
                <div class='sectionTitle'>
                    <h3>Results</h3>
                </div>
                
                <div class="relationshipGroup">
                    <RelationshipCard />
                    <RelationshipCard />
                    <RelationshipCard />       
                </div>
                
            </section>

        )
    }
}