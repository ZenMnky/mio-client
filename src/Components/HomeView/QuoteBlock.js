import React, { Component } from 'react';


export default class QuoteBlock extends Component {
  render(){
    return(
      <div className='quoteBox'>
        <h3 className='quote'>“Ponder for a long time whether you shall admit a given person to your friendship; but when you have decided to admit him, welcome him with all your heart and soul.”</h3>
        <p className='quote_source'>-Seneca</p>
      </div>
    );
  }
}

