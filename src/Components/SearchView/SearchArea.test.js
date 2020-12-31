import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from '../../Context/AppContext';

import SearchArea from './SearchArea';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: {
          params: {
              id: 123
          }
    },
    clearSearchResults: () => {},
    searchProfiles: (x,y) => {},
  };

  ReactDOM.render(    
    <Provider>
        <SearchArea {...props} />
    </Provider>, 
    div
);
  ReactDOM.unmountComponentAtNode(div);
});