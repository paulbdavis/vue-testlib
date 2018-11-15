import { Thing } from './components'

export * from './components'

export default {
  install (Vue) {
    Vue.component('LibThing', Thing)
  }
}
