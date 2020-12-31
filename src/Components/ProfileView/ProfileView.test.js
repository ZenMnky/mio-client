import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from '../../Context/AppContext';

import ProfileView from './ProfileView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: {
      params: {
        id: 123
      }
    }
  };
  ReactDOM.render(
    <BrowserRouter>
      <Provider>
        <ProfileView {...props} />
      </Provider>
    </BrowserRouter>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});