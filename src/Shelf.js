import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
  
  dragOver = (e) => {
      e.preventDefault();
  }
  render() {
    const { books, shelf, drop, dragStart } = this.props;
    return(
        <div className="bookshelf" id={shelf} onDragOver={this.dragOver} onDrop={drop}>
          <h2 className="bookshelf-title">{shelf}</h2>
          <div className="bookshelf-books" >
            <ol className="books-grid" >
              {books.map((book) => (
                <li key={book.title}>
                  <Book book={book} dragStart={dragStart} />
                </li>
              ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default Shelf