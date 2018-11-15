import { Thing, UIThing } from './components'

export * from './components'

export default {
  install (Vue) {
    Vue.component('LibThing', Thing)
    Vue.component('LibUiThing', UIThing)
  }
}
