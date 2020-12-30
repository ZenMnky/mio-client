import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from '../../Context/AppContext'

import ProfileContent from './ProfileContent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
      history: {
          push: () => {},
      },
      match: {
          params: {
              id: 123
          }
      },
      first_name: "test",
      last_name: "test",
      nickname: "test",
      image_url: "https://www.test.com",
      notes: "test",
      relationship_level: 1,
      admirable_qualities: "test",
  }
  ReactDOM.render(
    <BrowserRouter>
        <Provider>
            <ProfileContent {...props} />
        </Provider>
    </BrowserRouter>, 
    div
);
  ReactDOM.unmountComponentAtNode(div);
});