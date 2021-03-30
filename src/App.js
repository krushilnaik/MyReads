import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import SearchPage from './SearchPage';
import HomePage from './HomePage';

class BooksApp extends React.Component {
	render() {
		return (
			<div className="app">
				<Route exact path='/' render={() => <HomePage books={this.props.data} />} />
				<Route exact path='/search' render={({ history }) => <SearchPage books={this.props.data} nagivateBack={() => history.push('/')}/>}></Route>
			</div>
		);
	}
}

export default BooksApp;
