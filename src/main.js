import Vue from 'vue'
import './plugins/vuetify'
import TestLib from './'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(TestLib)

new Vue({
  render: h => h(App)
}).$mount('#app')
