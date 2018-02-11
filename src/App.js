import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks';
import DisplayLibrary from './DisplayLibrary';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
    shelfTypes: [ 
      { 
        shelfName: "Currently Reading", 
        shelfFlag: "currentlyReading" 
      },
      { 
        shelfName: "Want To Read", 
        shelfFlag: "wantToRead" 
      },
      { 
        shelfName: "Read", 
        shelfFlag: "read" 
      }
    ],
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  updateShelf( event, book ) {
    const { books } = this.state
    let  newBooks = books.filter((b) => b.id !== book.id),
      updatedBook = {...book};
    updatedBook[ 'shelf' ] = event.target.value
    newBooks.push(updatedBook)
    this.setState({ books: newBooks })
    BooksAPI.update( book, event.target.value )
  }
  searchBooks( query ) {
    BooksAPI.search(query).then((searchedBooks) => {
      this.setState(state => ({
        searchedBooks: searchedBooks && searchedBooks.error ? [] : searchedBooks
      }))
    })
  }
  updateValue( book ) {
    const { books } = this.state
    let status = books.some((b) => {
        return (b.id === book.id);
      });
    if ( status ) {
        let filteredBook = books.filter((b) => b.id === book.id)
        return filteredBook[ 0 ].shelf
    } else {
        return "none"
    }
}
  clearSearchedBooks() {
    this.setState(state => ({
      searchedBooks: []
    }))
  }
  render() {
    return (
      <div className="app">
        <Route path='/search' render={()=> (
          <SearchBooks
            searchedBooks={this.state.searchedBooks}
            searchBooks={this.searchBooks.bind(this)}
            updateShelf={this.updateShelf.bind(this)}
            books={this.state.books}
            clearSearchedBooks={this.clearSearchedBooks.bind(this)}
            updateValue={this.updateValue.bind(this)}
          />
        )}/>
        <Route exact path='/' render={() => (    
          <DisplayLibrary
            shelfTypes={this.state.shelfTypes}
            books={this.state.books}
            updateShelf={this.updateShelf.bind(this)}
            updateValue={this.updateValue.bind(this)}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
