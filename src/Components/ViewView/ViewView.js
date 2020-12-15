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
        const generateCards = (profile) => {
            return <RelationshipCard 
                    key={profile.id}
                    id={profile.id}
                    firstName={profile.first_name}
                    lastName={profile.last_name}
                    nickname={profile.nickname}
                    imageUrl={profile.image_url}
                    />
        }
        const level01Group = level01.map(profile => generateCards(profile))
        const level02Group = level02.map(profile => generateCards(profile))
        const level03Group = level03.map(profile => generateCards(profile))
        const level04Group = level04.map(profile => generateCards(profile))
        const level05Group = level05.map(profile => generateCards(profile))
        // use the level arrays to generate the level-components
        // populated with a relationnship card for each object/profile in the array



        return(
            <article id="viewRelationshiops" className='viewRelationships articleView'>
               <h2>Relationships</h2>
                <section id="level1Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 1</h3>
                    {level01Group}
                </section>

                <section id="level2Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 2</h3>
                    {level02Group}
                </section>

                <section id="level3Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 3</h3>
                    {level03Group}
                </section>

                <section id="level4Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 4</h3>
                    {level04Group}
                </section>

                <section id="level5Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 5</h3>
                    {level05Group}
                </section>           
       </article>
        )
    }
}

