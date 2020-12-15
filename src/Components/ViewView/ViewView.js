import React, { Component } from 'react';
import { AppContext } from '../../Context/AppContext';
import RelationshipCard from '../RelationshipCard/RelationshipCard'

export default class HomeBanner extends Component {

    // allow access to context via `this.context`
    static contextType = AppContext;

    componentDidMount() {
        console.log('viewview mounted')
    }


    render(){

        // get arrays of relationship objects from context
        const { level01, level02, level03, level04, level05 } = this.context;
        
        const level01Group = level01.map(profile => {
            return <RelationshipCard 
                    key={profile.id}
                    id={profile.id}
                    firstName={profile.first_name}
                    lastName={profile.last_name}
                    nickname={profile.nickname}
                    imageUrl={profile.image_url}
                    />
        })
        // use the level arrays to generate the level-components
        // populated with a relationnship card for each object/profile in the array



        return(
            <article id="viewRelationshiops" className='viewRelationships articleView'>
               <h2>Relationships</h2>
                <section id="level1Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 1</h3>
                    <p>dynamically generated:</p>
                    {level01Group}
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

