import Vue from 'vue'
import App from './App'

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import cuCollapse from './colorui/components/cu-collapse/cu-collapse.vue'
Vue.component('cu-collapse',cuCollapse)

import cuUpdownList from './colorui/components/cu-updownList/cu-updownList.vue'
Vue.component('cu-updownList',cuUpdownList)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



