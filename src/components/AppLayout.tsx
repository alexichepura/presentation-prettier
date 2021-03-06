import * as React from 'react'
import { observer, inject } from 'mobx-react'

import { AppStore } from '../AppStore'
import { Slider, Slide } from './Slider'
const styles = require('./App.css')

import {
  Intro,
  Split,
  Formatted,
  Consistency,
  Consistency2,
  Problem,
  Goal,
  ESLint,
  JSBeautify,
  Prettier,
  Waaat,
  Refactor,
  Support,
  Options,
  Outro,
  HypeTrain,
  PrettierIntro,
  PrettierIntro2,
  Precommit,
} from './Slides/Media'

@observer
export class AppLayout extends React.Component<{}, {}> {
  render() {
    return (
      <main className={styles.main}>
        <Slider>
          <Slide component={Intro} />
          <Slide component={Split} />
          <Slide component={Consistency} />
          <Slide component={Consistency2} />

          <Slide component={Problem} />
          {/*<Slide component={Goal} />*/}
          <Slide component={ESLint} />
          <Slide component={JSBeautify} />
          <Slide component={Prettier} />

          <Slide component={PrettierIntro} />
          <Slide component={PrettierIntro2} />
          <Slide component={Options} />
          <Slide component={Support} />
          <Slide component={HypeTrain} />
          {/*<Slide component={Formatted} />*/}
          {/*<Slide component={Waaat} />*/}
          <Slide component={Precommit} />
          <Slide component={Outro} />
          <Slide component={Refactor} />
        </Slider>
        <Counter />
      </main>
    )
  }
}

interface SliderProps {
  app?: AppStore
}

@inject('app')
@observer
export class Counter extends React.Component<SliderProps, {}> {
  render() {
    return (
      <div className={styles.counter}>
        {this.props.app.i + 1}/{this.props.app.n}
      </div>
    )
  }
}
