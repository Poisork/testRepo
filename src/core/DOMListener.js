import {capitalize} from './utils'

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root element provided for DomListener')
    }
    this.listeners = listeners
    this.$root = $root
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(capitalize(listener))
      if (!this[method]) throw new Error('No method in class container')

      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(capitalize(listener))
      this.$root.onRemove(listener, this[method])
    })
  }
}

const getMethodName = eventName => `on${eventName}`
