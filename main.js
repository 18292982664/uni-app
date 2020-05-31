import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import divider from '@/components/common/divider.vue'
import card from'@/components/common/card.vue'
Vue.component('divider',divider)
Vue.component('card',card)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
