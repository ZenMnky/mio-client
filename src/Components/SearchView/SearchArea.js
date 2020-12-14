import React, { Component } from 'react';


export default class SearchArea extends Component {
    render(){
        return(
            
            <section id="searchRelationship" className='searchRelationship'>
                <form action="">
                    <div>
                        <label for="search_terms">Search Terms</label>
                        <input id="search_terms" type="text" placeholder="by name or nickname" />
                    </div>   
                
                    
                    <div>
                        <label for="selectRelationshipZone">
                            Filter by Zone:
                        </label>
                        <select 
                            name="relationshipZone" 
                            id="selectRelationshipZone"
                            >
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