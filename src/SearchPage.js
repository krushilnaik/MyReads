import React from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {results: []};
	}

	/**
	 * 
	 * @param {React.ChangeEvent<HTMLInputElement>} event - event caller
	 */
	handleChange(event) {
		if (event.target.value) {
			BooksAPI.search(event.target.value)
				.then(
					data => this.setState({results: data})
				);
		}
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<button className="close-search" onClick={() => {window.location.href = '/'}}>
						Close
					</button>
					<div className="search-books-input-wrapper">
						{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type="text" placeholder="Search by title or author" onChange={(event) => this.handleChange(event)}/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{
							this.state.results.length !== 0
								? this.state.results.map(
									book => <li key={book.id}>
										<Book
											id={book.id}
											title={book.title}
											author={book.hasOwnProperty('authors') ? book.authors[0] : book.publisher}
											cover={book.imageLinks.thumbnail}
										></Book>
									</li>
								) : null
						}
					</ol>
				</div>
			</div>
		);
	}
}

export default SearchPage;
