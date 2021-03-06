import React, { Component } from 'react';
import { AppContext } from '../../Context/AppContext';
import SearchArea from './SearchArea';
import SearchResultsArea from './SearchResultsArea';

export default class SearchView extends Component {
    static contextType = AppContext;
    
    constructor(props){
        super(props);
        this.state = {
            searchResults: [],
            searchPerformed: false,
        };
    };

    searchProfiles = (zone, terms) => {    
        let filteredResults = [];
        let level = `level${zone}`;
        terms = terms.toLowerCase();

        const filterProfiles = (profile) => {
            let {first_name, last_name, nickname } = profile;
            first_name = first_name.toLowerCase();
            last_name = last_name.toLowerCase();
            nickname = nickname.toLowerCase();
    
            if (first_name.includes(terms)
                || last_name.includes(terms)
                || nickname.includes(terms)
                ){
                    return true
                };
        };


        if(zone === 0){
            // filter all profiles by term
            filteredResults = this.context.profiles.filter(filterProfiles);

            this.setState({
                searchResults: filteredResults
            });
        };

        if(zone > 0) {    
            let profileLevel = this.context[level] ;
            filteredResults = profileLevel.filter(filterProfiles);
            
            this.setState({
                searchResults: filteredResults
            });
        };
    };

    clearSearchResults = () => {
        this.setState({
            searchResults: [],
            searchPerformed: false,
        });
    };

    updateSearchPerformed = (condition) => {
        this.setState({
            searchPerformed: condition
        });
    };

    render(){

        let results = '';

        if(!this.state.searchPerformed){
            results = '';
        } else if (this.state.searchPerformed && this.state.searchResults.length === 0){
            results = <p>No results found.</p>
        } else {
            results = (
                <>
                    <SearchResultsArea 
                        searchResults={this.state.searchResults} 
                    />
                </>
            )
        };

        return(
            <article id='searchView' className='articleView'>
               <h3>Search Relationships</h3>
                <SearchArea 
                    searchProfiles={this.searchProfiles} 
                    clearSearchResults={this.clearSearchResults} 
                    updateSearchPerformed={this.updateSearchPerformed}
                />
                {results}
            </article>
        )
    };
};
