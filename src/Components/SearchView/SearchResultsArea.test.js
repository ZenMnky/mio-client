import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import SearchResultsArea from './SearchResultsArea';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    searchResults: [
        {
            id: 123,
            first_name: 'test',
            last_name: 'test',
            nickname: 'test',
            image_url: 'https//www.test.com/img.jpg'
        }
    ]
  };

  ReactDOM.render(    
    <BrowserRouter>
        <SearchResultsArea {...props} />
    </BrowserRouter>,
    div
);
  ReactDOM.unmountComponentAtNode(div);
});