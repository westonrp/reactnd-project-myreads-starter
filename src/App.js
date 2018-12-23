import React from 'react'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }
  componentDidMount = () => {
    this.getAllBooks();
  }
  getAllBooks = () => {
    BooksAPI.getAll()
      .then(x => {
        console.log(x);
        this.setState({
          books: x
        })
      });
  }
  dragStart = (e) => {
    e.dataTransfer.setData('book', e.target.id);
    console.log(e.dataTransfer.getData('book'));
  }
  drop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('book');
    const bookToUpdate = this.state.books.filter(book => book.id === id);
    const wantToRead = document.getElementById('wantToRead');
    const currentlyReading = document.getElementById('currentlyReading');
    const read = document.getElementById('read');
    if (wantToRead === e.target || wantToRead.contains(e.target)) {
      BooksAPI.update(bookToUpdate[0], 'wantToRead');
    } else if (currentlyReading === e.target || currentlyReading.contains(e.target)) {
      BooksAPI.update(bookToUpdate[0], 'currentlyReading');
    } else if (read === e.target || read.contains(e.target)) {
      BooksAPI.update(bookToUpdate[0], 'read');
    }
    this.getAllBooks();
  }
  render() {
    return (
        <div>
          <Shelf books={this.state.books.filter(book => book.shelf === 'currentlyReading')} shelf="currentlyReading" dragStart={this.dragStart} drop={this.drop} />
          <Shelf books={this.state.books.filter(book => book.shelf === 'wantToRead')} shelf="wantToRead" dragStart={this.dragStart} drop={this.drop} />
          <Shelf books={this.state.books.filter(book => book.shelf === 'read')} shelf="read" dragStart={this.dragStart} drop={this.drop} />
        </div>
    )
  }
}

export default BooksApp