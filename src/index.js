import { Thing, UIThing, UIRender, UIToolbar } from './components'

export * from './components'

export default {
  install (Vue) {
    Vue.component('LibThing', Thing)
    Vue.component('LibUiThing', UIThing)
    Vue.component('LibUiRender', UIRender)
    Vue.component('LibUiToolbar', UIToolbar)
  }
}
