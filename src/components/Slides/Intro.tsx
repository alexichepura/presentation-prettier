import * as React from 'react'
const styles = require('./Slides.css')

export class Intro extends React.Component<{}, {}> {
  render() {
    return (
      <div className={'center-x-y ' + styles.slide}>

        <h1 className={'code' + ' ' + styles.intro}>
          <span className={styles.red}>howILearned</span>
          <br />

          &nbsp;&nbsp;
          <span className={styles.purple}>to</span>&nbsp;
          <span className={styles.blue}>stopWorrying</span>()

          <br />
          &nbsp;&nbsp;
          <span className={styles.purple}>and</span>&nbsp;
          <span className={styles.blue}>loveFormatting</span>()
        </h1>
      </div>
    )
  }
}
