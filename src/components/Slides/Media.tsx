import * as React from 'react'
const styles = require('./Slides.css')

export const Intro = () =>
  <div className={styles.slideVerticalCenter}>
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
    <Author />
  </div>

export const Split = () =>
  <div className={'center-x-y ' + styles.slide}>
    <video
      style={{ marginTop: '-50px', marginLeft: '50px' }}
      autoPlay
      loop
      src="media/split.mp4"
      className={styles.media}
    />
    <span
      style={{ left: '20%', top: '70%', fontSize: '56px' }}
      className={styles.absolute}
    >
      2 spaces
    </span>
    <span
      style={{ left: '42%', top: '84%', fontSize: '56px' }}
      className={styles.absolute}
    >
      Tabs
    </span>
    <span
      style={{ left: '67%', top: '86%', fontSize: '56px' }}
      className={styles.absolute}
    >
      4 spaces
    </span>
  </div>

export const Refactor = () =>
  <div className={styles.slideVerticalCenter}>
    <video autoPlay loop src="media/refactor.mp4" />
  </div>

export const Formatted = () =>
  <div className={styles.slideVerticalCenter}>
    <video autoPlay loop src="media/formatted.mp4" />
  </div>

export const Waaat = () =>
  <div className={styles.slideVerticalCenter}>
    <video autoPlay loop src="media/waaat.mp4" />
  </div>

export const Support = () =>
  <div className={styles.slideVerticalCenter}>
    <ul style={{ fontSize: '42px' }}>
      <li>JavaScript, including ES2017</li>
      <li>JSX</li>
      <li>Flow</li>
      <li>TypeScript</li>
      <li>CSS, LESS, SCSS and... CSS-in-JS!</li>
      <li>JSON</li>
      <li>GraphQL</li>
    </ul>
  </div>

export const Options = () =>
  <div className={styles.slideVerticalCenter}>
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
  <div className={styles.slideVerticalCenter}>
    <ul style={{ fontSize: '56px' }}>
      <li>consistency<br /><br /></li>
      <li>code readable by humans<br /><br /></li>
    </ul>
  </div>

export const Consistency2 = () =>
  <div className={styles.slideVerticalCenter}>
    <ul style={{ fontSize: '56px' }}>
      <li>
        consistency
        <br />&nbsp;- formatters: jsbeautifier, prettydiff, eslint --fix
        <br />&nbsp;- format on save or precommit hook
        <br />
        <br />
      </li>
      <li>
        code readable by humans
        <br />&nbsp;- ?<br /><br />
      </li>
    </ul>
  </div>

export const Problem = () =>
  <div className={styles.slideVerticalCenter}>
    <h1>Problem</h1>
    <img
      src="media/orig-vs.jpg"
      style={{ maxWidth: '90%', maxHeight: '90%' }}
    />
  </div>

export const Goal = () =>
  <div className={styles.slideVerticalCenter}>
    <h1>Goal</h1>
    <img
      src="media/goal-vs.jpg"
      style={{ maxWidth: '90%', maxHeight: '90%' }}
    />
  </div>

export const ESLint = () =>
  <div className={styles.slideVerticalCenter}>
    <h1>ESLint - linting, not formatting</h1>
    <img
      src="media/eslint-vs.jpg"
      style={{ maxWidth: '90%', maxHeight: '60%' }}
    />
    <img
      src="media/eslint-terminal.jpg"
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

export const PrettierIntro = () =>
  <div className={styles.slideVerticalCenter}>
    <img
      src="media/prettier.png"
      style={{ maxWidth: '90%', maxHeight: '90%' }}
    />
  </div>

export const Prettier = () =>
  <div className={styles.slideVerticalCenter}>
    <h1>Prettier</h1>
    <img
      src="media/goal-vs.jpg"
      style={{ maxWidth: '90%', maxHeight: '90%' }}
    />
  </div>

export const HypeTrain = () =>
  <div className={styles.slideVerticalCenter}>
    <h2 style={{ fontSize: '42px' }}>Who uses prettier</h2>
    <div>
      <div className={styles.tilesContainer}>
        <div className={styles.trainTile}>
          <img src="media/babel-200x100.png" className={styles.trainImg} />
        </div>
        <div className={styles.trainTile}>
          <img
            src="media/jest.svg"
            className={styles.trainImg}
            style={{ marginLeft: '10px' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '25px',
              left: '100px',
              fontSize: '36px',
            }}
          >
            Jest
          </div>
        </div>
        <div className={styles.trainTile}>
          <img src="media/react-200x100.png" className={styles.trainImg} />
        </div>
        <div className={styles.trainTile}>
          <img src="media/webpack.svg" className={styles.trainImg} />
        </div>
        <div className={styles.trainTile}>
          <img src="media/yarn-200x100.png" className={styles.trainImg} />
        </div>
        <div className={styles.trainTile}>
          <img src="media/zeit.svg" className={styles.trainImg} />
        </div>
      </div>
    </div>
  </div>

export const Outro = () =>
  <div className={styles.slideVerticalCenter}>
    <h1 style={{ fontSize: '42px' }}>Thank you</h1>
    <Author />
  </div>

export const Author = () =>
  <div style={{ position: 'absolute', top: '70%', left: '50%' }}>
    <div style={{ fontSize: '42px' }}>Alexi Chepura</div>
    <img src="media/fh-white.svg" style={{ width: '458px' }} />
  </div>
