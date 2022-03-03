import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import { Lazyload } from 'vant';
import { DatePicker } from 'ant-design-vue';

import SocketIO from "socket.io-client"
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

import Vant from 'vant';
import 'vant/lib/index.css';
import VueSocketIO from 'vue-socket.io'
const socketOptions = {
  autoConnect: true,       // 自动连接     这里为我项目需求  需要在指定情况下才连接socket
}
Vue.use(
  new VueSocketIO({
    debug: false ,   // debug调试，生产建议关闭
    connection: SocketIO("http://127.0.0.1:9000", socketOptions),
  })
)


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
   // 这里为全局监听socket事件消息，监听函数这里只写了一点，其实很有很多事件。
   sockets: {
    connecting() {
      console.log('正在连接')
    },
    disconnect() {
      console.log("Socket 断开");
    },
    connect_failed() {
      console.log('连接失败')
    },
    connect() {
      console.log('socket connected')
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
