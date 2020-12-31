import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from '../../Context/AppContext';

import EditRelationshipForm from './EditRelationshipForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(
    <BrowserRouter>
      <Provider>
        <EditRelationshipForm />
      </Provider>
    </BrowserRouter>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});