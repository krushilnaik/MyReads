import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Bookshelf extends React.Component {
	static propTypes = {
		shelf: PropTypes.string.isRequired,
		books: PropTypes.array
	};

	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.shelf}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{
							this.props.books.map(
								book => <li key={book.id}>
									<Book
										id={book.id}
										title={book.title}
										author={book.authors[0]}
										cover={book.imageLinks.thumbnail}
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

export default Bookshelf;
