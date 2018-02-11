import React from 'react'
import './App.css'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class MoreInfo extends React.Component {
    render() {
        const { book } = this.props,
            actions = [
                <FlatButton label="Close" onClick={this.props.handleClose}/>
            ]
        return (
            <div>
            <MuiThemeProvider>
                <Dialog
                    title={book.title}
                    actions={actions}
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    autoScrollBodyContent={true}
                >
                    <div style={{ height: '250px', width: '100%', display: 'flex' }}>
                        <div style={{ width: 128, height: 193, backgroundImage: 'url(' + (book.imageLinks && book.imageLinks.smallThumbnail ? book.imageLinks.thumbnail : '')  + ')' }}> </div>
                        <div style={{ width: '60%', fontSize: '12px', marginLeft: '10px' }}> {book.description} </div>
                        
                    </div>
                    {/* <div style={{ width: '100%', display: 'block', float: 'right'}}> */}
                        
                </Dialog>
            </MuiThemeProvider>
            </div>
        )
    }
}

export default MoreInfo