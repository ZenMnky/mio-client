import {React, Component} from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <nav role="navigation">
          <div className='nav_logo'>
            <h1>
              <Link to='/'>
                        Mio
              </Link>
            </h1>
          </div>
              
          <ul className="nav_links">
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/view'>View</NavLink>
            </li>
            <li>
              <NavLink to='/add'>Add</NavLink>
            </li>
            <li>
              <NavLink to='/search'>Search</NavLink>
            </li>
          </ul>    
        </nav>
      </header>
    );
  }
}