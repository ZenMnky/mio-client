import React from 'react';
import ReactDOM from 'react-dom';

import QuoteBlock from './QuoteBlock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(
    <QuoteBlock />, 
    div
);
  ReactDOM.unmountComponentAtNode(div);
});