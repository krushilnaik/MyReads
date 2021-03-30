import React from 'react';
// import * as BooksAPI from './BooksAPI'
import { Route } from "react-router-dom";
import './App.css';

import SearchPage from './SearchPage';
import HomePage from './HomePage';

class BooksApp extends React.Component {
	render() {
		return (
			<div className="app">
				<Route exact path='/' render={() => <HomePage books={this.props.data} />} />
				<Route exact path='/search' render={() => <SearchPage books={this.props.data}/>}></Route>
				{/* {window.location.href.endsWith('/search') ? <SearchPage books={this.props.data}/> : <HomePage books={this.props.data}/>} */}
			</div>
		);
	}
}

export default BooksApp;
