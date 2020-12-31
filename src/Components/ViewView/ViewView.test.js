import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from '../../Context/AppContext';

import ViewView from './ViewView';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
        <Provider>
            <ViewView />
        </Provider>
    </BrowserRouter>, 
    div
);
  ReactDOM.unmountComponentAtNode(div);
});