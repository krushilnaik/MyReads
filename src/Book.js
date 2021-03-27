import React from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends React.Component {
	/**
	 * Move this book to a new shelf
	 * @param {React.ChangeEvent<HTMLSelectElement>} event - must be either "wantToRead", "currentlyReading", or "read"
	 */
	moveToShelf(event) {
		event.target.selectedIndex = Array.from(event.target.options).map(element => element.value).indexOf(event.target.value);
		BooksAPI.update({id: this.props.id}, event.target.value)
			// .then(_ => window.location.reload());
			.then(() => {this.props.callback();});
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
						<select defaultValue={this.props.shelf} onChange={(event) => {this.moveToShelf(event);}}>
							<option value="move" disabled>Move to...</option>
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
