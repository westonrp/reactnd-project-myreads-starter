import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
  render() {
    const { books, shelf, change } = this.props;
    return(
        <div className="bookshelf" id={shelf}>
          <h2 className="bookshelf-title">{shelf === 'wantToRead' && 'Want To Read'} {shelf === 'currentlyReading' && 'Currently Reading'} {shelf === 'read' && 'Read'}</h2>
          <div className="bookshelf-books" >
            <ol className="books-grid" >
              {books.length > 0 && books.map((book) => (
                <li key={book.title}>
                  <Book book={book} change={change} />
                </li>
              ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default Shelf