// if want to import resource from project, need to config specific path or it will import from node_modules folder
import '@/assets/font/iconfont.css'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import UUID from 'vue-uuid'
// import VueTouch from 'vue-touch'
import App from './App'
import router from './router'
import 'vue2-animate/dist/vue2-animate.min.css'
// import VueResource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClipboard from 'vue-clipboard2'

Vue.use(UUID)
Vue.use(BootstrapVue)
Vue.use(VueClipboard)
Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'api'
// Vue.use(VueResource)
// Vue.use(VueTouch, {name: 'v-touch'})
// VueTouch.config.swipe = {
//   threshold: 100 //手指左右滑动距离
// }
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
    debug: process.env.NODE_ENV !== 'production',
    connection: 'http://146.222.81.139:3000',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
}))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, 
  // 如果组件export的时候声明了name,name可以这样直接注册组件，不需要components:{name:{tempalte: component}}
  components: { App },
  // 会用名字为App的组件替换掉index.html中id为app的元素
  template: '<App/>'
})
