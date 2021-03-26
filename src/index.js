import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import * as BooksAPI from './BooksAPI';

BooksAPI.getAll()
	.then(data => {
		ReactDOM.render(<App data={data}/>, document.getElementById('root'))
	});
