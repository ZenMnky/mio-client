import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import AboutView from './AboutView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(
    <BrowserRouter>
      <AboutView />
    </BrowserRouter>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});