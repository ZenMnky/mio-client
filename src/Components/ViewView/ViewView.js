import React, { Component } from 'react';
import { AppContext } from '../../Context/AppContext';
import RelationshipCard from '../RelationshipCard/RelationshipCard';

export default class ViewView extends Component {

    // allow access to context via `this.context`
    static contextType = AppContext;

    constructor(props){
        super(props);
        this.state = {
            loading: false,
        };
    };

    render(){

        // get arrays of relationship objects from context
        const { level1, level2, level3, level4, level5 } = this.context;
        
        const generateCards = (profile) => {
            return <RelationshipCard 
                    key={profile.id}
                    id={profile.id}
                    firstName={profile.first_name}
                    lastName={profile.last_name}
                    nickname={profile.nickname}
                    imageUrl={profile.image_url}
                    />
        };

        
        // use the level arrays to generate the level-components
        // populated with a relationship card for each object/profile in the array
        const level1Group = level1.map(profile => generateCards(profile));
        const level2Group = level2.map(profile => generateCards(profile));
        const level3Group = level3.map(profile => generateCards(profile));
        const level4Group = level4.map(profile => generateCards(profile));
        const level5Group = level5.map(profile => generateCards(profile));


        
        let content = (this.context.profiles.length === 0)
        ? <p>Loading relationship groups...</p>
        : (
            <>
                <section id="level1Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 1</h3>
                    {level1Group}
                </section>

                <section id="level2Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 2</h3>
                    {level2Group}
                </section>

                <section id="level3Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 3</h3>
                    {level3Group}
                </section>

                <section id="level4Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 4</h3>
                    {level4Group}
                </section>

                <section id="level5Group" className="relationshipGroup">
                    <h3 className="groupHeader">Level 5</h3>
                    {level5Group}
                </section>           

            </>
        );

        return(
            <article id="viewRelationships" className='viewRelationships articleView'>
               <h2>Relationships</h2>
               {content}
            </article>
        );
    };
};

