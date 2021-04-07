import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import utils from './utils'
import router from './router'
Vue.use(ElementUI);

Vue.prototype.$utils=utils
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  render: h => h(App),
}).$mount('#app')
