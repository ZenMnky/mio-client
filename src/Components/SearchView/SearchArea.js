import React, { Component } from 'react';
import { AppContext } from '../../Context/AppContext';


export default class SearchArea extends Component {
    static contextType = AppContext;
    
    constructor(props){
        super(props);
        this.state = {
            searchTerms: '',
            relationshipZone: 0
        }
    }

    relationshipZoneChanged = (relationshipZone) => {
        this.setState({
            relationshipZone
        })
    }

    handleSearchTermsChanged = (searchTerms) => {
        this.setState({
            searchTerms
        })
    }

    render(){
        return(
            
            <section id="searchRelationship" className='searchRelationship'>
                <form action="">
                    <div>
                        <label htmlFor="search_terms">Search Terms</label>
                        <input 
                            id="search_terms" 
                            type="text" 
                            placeholder="by name or nickname"
                            value={this.state.searchTerms}
                            onChange={e => this.handleSearchTermsChanged(e.target.value)}
                        />
                    </div>   
                
                    
                    <div>
                        <label htmlFor="selectRelationshipZone">
                            Filter by Zone:
                        </label>
                        <select 
                            name="relationshipZone" 
                            id="selectRelationshipZone"
                            value={this.state.relationshipZone}
                            onChange={e => this.relationshipZoneChanged(e.target.value)}
                            >
                            <option value="0">Any</option>
                            <option value="1">Zone 1</option>
                            <option value="2">Zone 2</option>
                            <option value="3">Zone 3</option>
                            <option value="4">Zone 4</option>
                            <option value="5">Zone 5</option>
                        </select>
                    </div>

                    <div>
                        <button>Search</button>
                        <button>Reset</button>
                    </div> 
                
                </form>
            </section>
    
        )
    }
}