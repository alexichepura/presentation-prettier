import * as React from 'react'
import { Provider } from 'mobx-react'
import { Router } from 'react-router-dom'

import { AppStore } from '../AppStore'
import { AppLayout } from './AppLayout'

export class App extends React.Component<{}, {}> {
  app = new AppStore()

  render() {
    return (
      <Provider app={this.app} {...this.app.provide()}>
        <Router history={this.app.history}>
          <AppLayout />
        </Router>
      </Provider>
    )
  }
}
