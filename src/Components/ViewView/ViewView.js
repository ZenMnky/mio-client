import React, { Component } from 'react';
import { AppContext } from '../../Context/AppContext';
import RelationshipCard from '../RelationshipCard/RelationshipCard'

export default class HomeBanner extends Component {

    // allow access to context via `this.context`
    static contextType = AppContext;

    constructor(props) {
        super(props)
        this.state = {
            level01: [],
            level02: [],
            level03: [],
            level04: [],
            level05: []
        }
    }

    componentDidMount() {
        // this.handleSortRelationships()
        console.log('viewview mounted')
    }

    handleSortRelationships = () => {
        console.log('handleSortRelationships fired!')
        let relationships = this.context.profiles;
        let level01 = [];
        let level02 = [];
        let level03 = [];
        let level04 = [];
        let level05 = [];
        
        // sort
        relationships.forEach(relationship => {
            // based on the level, assign to state
            switch (relationship.relationship_level) {
                case 1:
                    level01.push(relationship)
                    break;
                case 2:
                    level02.push(relationship)
                    break;
                case 3:
                    level03.push(relationship)
                    break;
                case 4:
                    level04.push(relationship)
                    break;
                case 5:
                    level05.push(relationship)
                    console.log(`${relationship.nickname} added to level05`)
                    break;
                default:
                    console.log(`no matching case for ${relationship.nickname}`)
            }
        })

        // update state
        this.setState({
            level01: level01,
            level02: level02,
            level03: level03,
            level04: level04,
            level05: level05
        })


    }

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

