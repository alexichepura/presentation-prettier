import * as React from 'react'
const styles = require('./Slides.css')

export class Split extends React.Component<{}, {}> {
  render() {
    return (
      <div className={'center-x-y ' + styles.slide}>
        <video
          style={{ marginTop: '-50px', marginLeft: '50px' }}
          autoPlay
          loop
          src="media/split.mp4"
          className={styles.media}
        />
        <span style={{ left: '20%', top: '70%' }} className={styles.absolute}>
          2 spaces
        </span>
        <span style={{ left: '42%', top: '84%' }} className={styles.absolute}>
          Tabs
        </span>
        <span style={{ left: '67%', top: '86%' }} className={styles.absolute}>
          4 spaces
        </span>

      </div>
    )
  }
}

export const Refactor = () =>
  <div className={'center-x-y ' + styles.slide}>
    <video autoPlay loop src="media/refactor.mp4" />
  </div>

export const Formatted = () =>
  <div className={'center-x-y ' + styles.slide}>
    <video autoPlay loop src="media/formatted.mp4" />
  </div>

export const Waaat = () =>
  <div className={'center-x-y ' + styles.slide}>
    <video autoPlay loop src="media/waaat.mp4" />
  </div>

export const Support = () =>
  <div className={'center-x-y ' + styles.slide}>
    <ul style={{ fontSize: '42px' }}>
      <li>JavaScript, including ES2017</li>
      <li>JSX</li>
      <li>Flow</li>
      <li>TypeScript</li>
      <li>CSS, LESS, and SCSS</li>
    </ul>
  </div>

export const Options = () =>
  <div className={'center-x-y ' + styles.slide}>
    <ul style={{ fontSize: '42px' }}>
      <li>Print Width</li>
      <li>Tab Width</li>
      <li>Tabs</li>
      <li>Semicolons</li>
      <li>Quotes</li>
      <li>Trailing Commas</li>
      <li>Bracket Spacing</li>
      <li>JSX Brackets</li>
    </ul>
  </div>

export const Consistency = () =>
  <div className={'center-x-y ' + styles.slide}>
    <ul style={{ fontSize: '42px' }}>
      <li>consistency<br /><br /></li>
      <li>no nitpicking and no commits to fix formatting<br /><br /></li>
      <li>code to look good<br /><br /></li>
    </ul>
  </div>

export const Consistency2 = () =>
  <div className={'center-x-y ' + styles.slide}>
    <ul style={{ fontSize: '42px' }}>
      <li>
        consistency <br />&nbsp;- formatters: jsbeautifier, prettydiff, eslint
        --fix <br />
        <br />
      </li>
      <li>
        no nitpicking and no commits to fix formatting
        <br />&nbsp;- format on save or precommit hook<br /><br />
      </li>
      <li>
        code to be pretty
        <br />&nbsp;- ?<br /><br />
      </li>
    </ul>
  </div>

export const Problem = () =>
  <div className={styles.slideVerticalCenter}>
    <h1>Problem</h1>
    <img src="media/orig.jpg" style={{ maxWidth: '90%', maxHeight: '90%' }} />
  </div>

export const Goal = () =>
  <div className={styles.slideVerticalCenter}>
    <h1>Goal</h1>
    <img
      src="media/prettier-result.jpg"
      style={{ maxWidth: '90%', maxHeight: '90%' }}
    />
  </div>

export const ESLint = () =>
  <div className={styles.slideVerticalCenter}>
    <h1>ESLint</h1>
    <img
      src="media/eslint-ui-error.jpg"
      style={{ maxWidth: '90%', maxHeight: '60%' }}
    />
    <img
      src="media/eslint-terminal-error.jpg"
      style={{ maxWidth: '90%', maxHeight: '30%' }}
    />
  </div>

export const JSBeautify = () =>
  <div className={styles.slideVerticalCenter}>
    <h1>JS Beautify</h1>
    <img
      src="media/js-beautify.jpg"
      style={{ maxWidth: '90%', maxHeight: '90%' }}
    />
  </div>

export const Prettier = () =>
  <div className={styles.slideVerticalCenter}>
    <h1>Prettier</h1>
    <img
      src="media/prettier-result.jpg"
      style={{ maxWidth: '90%', maxHeight: '90%' }}
    />
  </div>

export const Outro = () =>
  <div className={styles.slideVerticalCenter}>
    <h1>Thank you</h1>
  </div>
