import React from 'react'
import './App.css'
import MoreInfo from './MoreInfo'

class DisplayBook extends React.Component {
    state = {
        open: false
    }
    handleOpen() {
        this.setState({
            open: true
        })
    }
    handleClose() {
        this.setState({
            open: false
        })
    }
    render() {
        const { book, bookIndex } = this.props
        return (
            <li key={bookIndex}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" onClick={this.handleOpen.bind(this)} style={{ width: 128, height: 193, backgroundImage: 'url(' + (book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : '')  + ')' }}></div>
                            <div className="book-shelf-changer">
                                <select onChange={(event) => this.props.updateShelf(event, book)} value={ book.shelf ? book.shelf : this.props.updateValue(book)}>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                    </div>
                    <div className="book-title">{ book.title }</div>
                    {book.authors && book.authors !== [] && book.authors.length !== 0 && book.authors.map((author, authorIndex) => {
                        return (
                        <div key={authorIndex} className="book-authors">{ author }</div>)
                    })}

                    { this.state.open && <MoreInfo open={this.state.open} handleClose={this.handleClose.bind(this)} book={book}/>}
                </div>
            </li>
        )
    }
}

export default DisplayBook