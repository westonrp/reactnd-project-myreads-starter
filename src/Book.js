import React, { Component } from 'react';

class Book extends Component {
  divStyle ={
      backgroundImage: 'url(' + this.props.book.imageLinks + ')'
  };
  render() {
    return (
      <div 
        className="book" 
        draggable="true" 
        onDragStart={this.props.dragStart}
        id={this.props.book.id}>
        <div 
          className="book-cover" 
          style={this.divStyle}></div>
        <p className='book-title'>{this.props.book.title}</p>
        {this.props.book.authors.map(author => (
            <p key={author}>{author}</p>
        ))}
      </div>
    )
  }
}

export default Book