import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from '../../Context/AppContext';

import RelationshipCard from './RelationshipCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
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
  };
  
  ReactDOM.render(
    <BrowserRouter>
      <Provider>
        <RelationshipCard {...props} />
      </Provider>
    </BrowserRouter>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});