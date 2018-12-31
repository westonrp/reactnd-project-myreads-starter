import React from 'react';
import Shelves from './Shelves';
import Search from './Search';
import { Route } from 'react-router-dom';
import './App.css';

class BooksApp extends React.Component {
  render() {
    return (
        <div>
          <Route path='/search' render={({ history }) => (
            <Search />
          )} />
          <Route exact path='/' component={Shelves} />
        </div>
    )
  }
}

export default BooksApp