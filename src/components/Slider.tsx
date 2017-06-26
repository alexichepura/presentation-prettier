import * as React from 'react'
import { observer, inject } from 'mobx-react'
// import { Routes } from './Routes'
const styles = require('./App.css')
import { AppStore } from '../AppStore'

interface SliderProps {
  app?: AppStore
}

@inject('app')
@observer
export class Slider extends React.Component<SliderProps, {}> {
  constructor(props) {
    super(props)
    this.props.app.setSlidesNumber(React.Children.count(this.props.children))
  }

  render() {
    return (
      <div
        className={styles.slides}
        style={{
          transform: `translateX(${-this.props.app.i * 100}%)`,
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

interface SlideProps {
  component?: any
}
@observer
export class Slide extends React.Component<SlideProps, {}> {
  render() {
    return (
      <div className={styles.slide}>
        {this.props.component
          ? React.createElement(this.props.component)
          : this.props.children}
      </div>
    )
  }
}
