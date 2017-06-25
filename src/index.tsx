require('./styles/index.css')

import * as React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'

const appNode = document.getElementById('app')

render(<App />, appNode)
