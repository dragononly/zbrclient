import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import { Lazyload } from 'vant';
import { DatePicker } from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

import Vant from 'vant';
import 'vant/lib/index.css';


let g = {}
let m = 2
if (m == "1") {
  Vue.prototype.src = "http://127.0.0.1:2000";
} else {
  Vue.prototype.src = "https://bt.moono.vip:2222";
}






Vue.use(DatePicker);
Vue.use(Lazyload);
Vue.use(Vant);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
