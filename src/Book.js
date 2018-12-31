import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
  render() {
    const { change } = this.props;
    const { id, title, authors, shelf } = this.props.book;
    const { smallThumbnail } = this.props.book.imageLinks != null ? this.props.book.imageLinks : '';
    return (
      <div 
        className="book">
        <div className='book-top'>
          <img 
            className="book-cover" 
            src={smallThumbnail != null ? smallThumbnail : ''}
            alt="The cover of the book" />
          <ShelfChanger change={change} bookid={id} defaultValue={shelf != null ? shelf : 'none'} />
        </div>
        <div className='book-title'>{title != null ? title : 'No title found'}</div>
        <div className='book-authors'>
          {authors != null ? authors.map(author => (
            <p key={author}>{author}</p>
          ))
          : 'No authors found'}
        </div>
      </div>
    )
  }
}

export default Book