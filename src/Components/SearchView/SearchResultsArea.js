import React, { Component } from 'react';
import RelationshipCard from '../RelationshipCard/RelationshipCard';

export default class SearchResultsArea extends Component {
  render(){
    let {searchResults} = this.props;

    let results = (searchResults) 
      ? searchResults.map(profile => {
        return <RelationshipCard 
          key={profile.id}
          id={profile.id}
          firstName={profile.first_name}
          lastName={profile.last_name}
          nickname={profile.nickname}
          imageUrl={profile.image_url}
        />;
      }) 
      : '';
        

    return(
      <section id='searchResults'>
             
        <div className='sectionTitle'>
          <h3>Results</h3>                    
        </div>

                
        <div className="relationshipGroup">
          {results}       
        </div>
                
      </section>

    );
  }
}