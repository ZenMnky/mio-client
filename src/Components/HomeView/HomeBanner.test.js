import React from 'react';
import ReactDOM from 'react-dom';

import HomeBanner from './HomeBanner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(    
    <HomeBanner />, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});