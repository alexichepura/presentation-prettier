import createHistory from 'history/createBrowserHistory'
import { observable } from 'mobx'
const Gamepad = require('./Gamepad')

export class AppStore {
  history = createHistory()
  slideLeft: () => void
  slideRight: () => void

  @observable i = 0
  n = 0

  gamepad: any

  constructor() {
    this.slideLeft = this.shift.bind(this, -1)
    this.slideRight = this.shift.bind(this, 1)
    // document.addEventListener('keydown', this.handleKeyboardEvent, false)

    this.gamepad = new Gamepad()
    this.gamepad.on('press', 'd_pad_left', e => {
      this.slideLeft()
    })
    this.gamepad.on('press', 'd_pad_right', e => {
      this.slideRight()
    })
  }

  setSlidesNumber(n: number) {
    this.n = n
  }

  shift(shift) {
    let i = this.i + shift
    if (i < 0 || i > this.n - 1) {
      return
    }

    this.i = i
  }

  provide() {
    return this
  }

  handleKeyboardEvent = e => {
    var keycode = e.keyCode || e.which
    switch (keycode) {
      case KEYS.LEFT:
        this.slideLeft()
        break
      case KEYS.RIGHT:
        this.slideRight()
        break
      default:
        break
    }
  }
}

const KEYS = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
}
