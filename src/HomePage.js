import React from 'react';
import Bookshelf from './Bookshelf';

class HomePage extends React.Component {

	constructor(props) {
		super(props);

		this.updateHomePage = this.updateHomePage.bind(this);
	}

	updateHomePage() {
		window.location.reload();
	}

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Bookshelf callback={this.updateHomePage} shelf='Currently Reading' books={this.props.books.filter(book => book.shelf === 'currentlyReading')}></Bookshelf>
						<Bookshelf callback={this.updateHomePage} shelf='Want to Read' books={this.props.books.filter(book => book.shelf === 'wantToRead')}></Bookshelf>
						<Bookshelf callback={this.updateHomePage} shelf='Read' books={this.props.books.filter(book => book.shelf === 'read')}></Bookshelf>
					</div>
				</div>
				<div className="open-search">
					<button onClick={() => {window.location.replace('/search')}}>Add a book</button>
				</div>
			</div>
		);
	}
}

export default HomePage;
