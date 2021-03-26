import React from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends React.Component {
	/**
	 * Move this book to a new shelf
	 * @param {string} newShelf - must be either "wantToRead", "currentlyReading", or "read"
	 */
	moveToShelf(newShelf) {
		BooksAPI.update({id: this.props.id}, newShelf);
	}

	render() {
		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{ width: 128, height: 193, backgroundImage: `url(${this.props.cover})` }}
					/>
					<div className="book-shelf-changer">
						<select onChange={(event) => {this.moveToShelf(event.target.value);}}>
							<option value="move" disabled>
								Move to...
							</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{this.props.title}</div>
				<div className="book-authors">{this.props.author}</div>
			</div>
		);
	}
}

export default Book;
