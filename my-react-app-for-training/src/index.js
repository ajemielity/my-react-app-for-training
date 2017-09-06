import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router
} from 'react-router-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import './index.css'

/*import store from './store'*/

import App from './App'


ReactDOM.render(
    <Provider>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
)

