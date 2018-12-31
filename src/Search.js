import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';

class Search extends Component {
  state = {
    books: [],
    query: ''
  }
  search = (query) => {
    if (query !== '' && query != null) { 
      BooksAPI.search(query)
        .then((books) => (
          this.setState((currState) => ({
            books: books != null ? books : []
          }))
        ));
      } else {
        this.setState((currState) => ({
          books: []
        }))
      }
  }
  queryChange = (e) => {
    var value = e.target.value;
    this.search(value);
  }
  change = (e) => {
    var { id, value } = e.target;
    const bookToUpdate = this.state.books.filter(book => book.id === id);
    const moveTo = value;
    BooksAPI.update(bookToUpdate[0], moveTo);
  }
  render() {
    return(
      <div>
        <Link to='/'>Dashboard</Link>
        <br />
        <label>Search for a book: 
          <input className='book-search' onChange={this.queryChange} />
        </label>
        <Shelf books={this.state.books} change={this.change} />
      </div>
    )
  }
}

export default Search