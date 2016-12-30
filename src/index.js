import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {render} from 'react-dom'
import reducer from './reducers'
import App from './components/app'

const store = createStore(reducer)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)