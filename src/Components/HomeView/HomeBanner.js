import React, { Component } from 'react';
import QuoteBlock from './QuoteBlock';

export default class HomeBanner extends Component {
  render(){
    return(
      <div role="banner" className="main-banner">
        <h1>Mio</h1>          
        <QuoteBlock />
      </div>
    );
  }
}

