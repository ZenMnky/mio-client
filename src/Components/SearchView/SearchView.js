import React, { Component } from 'react';
import SearchArea from './SearchArea';
import SearchResultsArea from './SearchResultsArea';

export default class SearchView extends Component {
    constructor(props){
        super(props);
        this.state = {
            // * dummy search results. delete after search function implemented
            searchResults: [ 
                {
                    "id": 4,
                    "first_name": "Berenice",
                    "last_name": "Schmitt",
                    "nickname": "flexibility",
                    "image_url": "http://placeimg.com/640/480",
                    "relationship_level": 2,
                    "admirable_qualities": "Nulla voluptatum non. Aperiam assumenda maxime in sed veritatis. Et pariatur omnis. Eaque quaerat aut quasi qui tenetur minus eum. Nisi ut eaque et non omnis nam. Earum quo quis sit quaerat consequatur qui.",
                    "notes": "Molestiae nihil quos quo rerum in consequatur. Repellendus est in porro dolorum mollitia. Est voluptatum veniam provident odio.        \r\nEa quo porro vel neque sit. Quisquam adipisci eveniet deleniti. Et nam qui rerum et fugiat cumque sed nostrum. Rerum doloribus a est excepturi. Voluptate voluptas harum est. Qui dolores quaerat ut est.\r\nEt nemo rerum ad eveniet animi mollitia aut temporibus alias. Qui odit nobis aut enim et voluptas dolores. Et nesciunt ut consectetur."
                }
            ]
        }


    }
    render(){
        return(
            <article id='searchView' className='articleView'>
               <h3>Search Relationships</h3>
                <SearchArea />
                <SearchResultsArea searchResults={this.state.searchResults} />
            </article>
        )
    }
}
