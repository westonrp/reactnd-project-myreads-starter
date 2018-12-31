import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

class Shelves extends Component {
  state = {
    books: []
  }
  componentDidMount = () => {
    this.getAllBooks();
  }
  getAllBooks = () => {
    BooksAPI.getAll()
      .then(x => {
        this.setState({
          books: x
        })
      });
  }
  change = (e) => {
    const bookToUpdate = this.state.books.filter(book => book.id === e.target.id);
    const moveTo = e.target.value;
    BooksAPI.update(bookToUpdate[0], moveTo)
      .then(() => { this.getAllBooks() });
  }
  render() {
    return(
      <div className='bookshelves'>
        <Link to='/search'>Search</Link>
        <Shelf books={this.state.books.filter(book => book.shelf === 'currentlyReading')} shelf="currentlyReading" change={this.change} />
        <Shelf books={this.state.books.filter(book => book.shelf === 'wantToRead')} shelf="wantToRead" change={this.change} />
        <Shelf books={this.state.books.filter(book => book.shelf === 'read')} shelf="read" change={this.change} />
      </div>
    )
  }
}

export default Shelves