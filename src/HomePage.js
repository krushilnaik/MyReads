import React from 'react';
import Bookshelf from './Bookshelf';

class HomePage extends React.Component {
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Bookshelf shelf='Currently Reading' books={this.props.books.filter(book => book.shelf === 'currentlyReading')}></Bookshelf>
						<Bookshelf shelf='Want to Read' books={this.props.books.filter(book => book.shelf === 'wantToRead')}></Bookshelf>
						<Bookshelf shelf='Read' books={this.props.books.filter(book => book.shelf === 'read')}></Bookshelf>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
