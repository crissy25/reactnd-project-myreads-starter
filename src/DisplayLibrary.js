import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import DisplayBook from './DisplayBook';

class DisplayLibrary extends React.Component {
    render() {
        const { shelfTypes, books } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div className="bookshelf">
                        {shelfTypes.map((shelfType, shelfIndex) => {
                            return (
                            <div key={shelfIndex} >
                                <h2 className="bookshelf-title">{shelfType.shelfName}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {books.filter( book => book.shelf === shelfType.shelfFlag ).map((book, bookIndex) => {
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
                        })}
                    </div>
                </div>
                <div className="open-search">
                    <Link className="open-search" to='/search'></Link>
                </div>
            </div>
                   
        )
    }
}

export default DisplayLibrary