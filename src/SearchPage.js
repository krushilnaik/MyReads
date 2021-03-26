import React from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';


class SearchPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {results: []};
	}

	/**
	 * @param {React.ChangeEvent<HTMLInputElement>} event - event caller
	 */
	handleChange(event) {
		if (event.target.value) {
			BooksAPI.search(event.target.value)
				.then(data => {
					this.setState({results: (Array.isArray(data) ? data : [])})
				})
				.catch(err => console.error(err));
		}
	}

	/**
	 * @param {string} id - id of book you want the shelf of
	 */
	fetchShelf(id) {
		const candidates = this.props.books.filter(book => book.id === id);
		return candidates.length > 0 ? candidates[0].shelf : 'none';
	}

	render() {
		console.log(this.props.books);

		const { results = [] } = this.state;
		console.log("results", results);

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<button className="close-search" onClick={() => {window.location.href = '/'}}>
						Close
					</button>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" onChange={(event) => this.handleChange(event)}/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{
							results.map(
								book => <li key={book.id}>
									<Book
										id={book.id}
										title={book.title}
										author={book.hasOwnProperty('authors') ? book.authors[0] : book.publisher}
										cover={book.hasOwnProperty('imageLinks') ? book.imageLinks.thumbnail : ''}
										shelf={this.fetchShelf(book.id)}
									></Book>
								</li>
							)
						}
					</ol>
				</div>
			</div>
		);
	}
}

export default SearchPage;
