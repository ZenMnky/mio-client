import React, { Component } from 'react';
import RelationshipCard from '../RelationshipCard/RelationshipCard'

export default class HomeBanner extends Component {
    render(){
        return(
            <article id="viewRelationshiops" className='viewRelationships articleView'>
               <h2>Relationships</h2>
                <section id="level1Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 1</h3>
                    <RelationshipCard />
                    <RelationshipCard />
                </section>

                <section id="level2Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 2</h3>
                    <RelationshipCard />
                    <RelationshipCard />
                </section>

                <section id="level3Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 3</h3>
                    <RelationshipCard />
                </section>

                <section id="level4Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 4</h3>

                    <RelationshipCard />
                    <RelationshipCard />
                    <RelationshipCard />
                    <RelationshipCard />

                </section>

                <section id="level5Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 5</h3>

                        <RelationshipCard />
                        <RelationshipCard />
                        <RelationshipCard />
                        <RelationshipCard />
                        <RelationshipCard />
                        <RelationshipCard />
                        <RelationshipCard />
                        <RelationshipCard />
                        <RelationshipCard />
                        <RelationshipCard />

                </section>           
       </article>
        )
    }
}

