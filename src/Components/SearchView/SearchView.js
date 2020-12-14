import React, { Component } from 'react';
import SearchArea from './SearchArea';
import SerchResultsArea from './SerchResultsArea.js'

export default class SearchView extends Component {
    render(){
        return(
            <article id='searchView' class='articleView'>
               <h3>Search Relationships</h3>
                <SearchArea />
                <SerchResultsArea />
            </article>
        )
    }
}
