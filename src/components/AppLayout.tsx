import * as React from 'react'
import { observer, inject } from 'mobx-react'
// import { Routes } from './Routes'

import { Slider, Slide } from './Slider'
const styles = require('./App.css')

@observer
export class AppLayout extends React.Component<{}, {}> {
  render() {
    return (
      <main className={styles.main}>
        <Slider>
          <Slide>
            1fjkl akl jk fdk afdhjk
          </Slide>
          <Slide>
            2 fds afd
          </Slide>
        </Slider>
      </main>
    )
  }
}
