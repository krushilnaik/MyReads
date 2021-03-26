import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';

import SearchPage from './SearchPage';
import HomePage from './HomePage';

class BooksApp extends React.Component {
	render() {
		return (
			<div className="app">
				{window.location.href.endsWith('/search') ? <SearchPage/> : <HomePage books={this.props.data}/>}
			</div>
		);
	}
}

export default BooksApp;
