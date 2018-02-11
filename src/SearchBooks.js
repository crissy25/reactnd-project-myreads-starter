import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import DisplayBook from './DisplayBook';

class SearchBooks extends React.Component {
    componentDidMount() {
        this.props.clearSearchedBooks()
    }
    handleChange = (e) => {
        e.target.value !== '' && this.props.searchBooks(e.target.value)
    }
    render() {
        const { searchedBooks } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.handleChange(event)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchedBooks && searchedBooks !== [] && searchedBooks.length !== 0 && searchedBooks.map((book, bookIndex) => {
                            return (
                                <DisplayBook 
                                    key={bookIndex}
                                    book={book}
                                    bookIndex={bookIndex}
                                    updateValue={this.props.updateValue}
                                    updateShelf={this.props.updateShelf}
                                />
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks