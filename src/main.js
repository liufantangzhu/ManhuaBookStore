import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import 'bootstrap'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false;
AOS.init(
	{
		 disable: 'mobile',
	});
var localhost ='localhost/xiaoxianyu';
Vue.prototype.doc_img_url = 'http://'+localhost+'/image/doc_img/doc';
Vue.prototype.goods_img_url = 'http://'+localhost+'/image/shop_face/';
Vue.prototype.canvas_backgroup_url = 'http://'+localhost+'/image/backgroup/image/';
Vue.prototype.user_face = 'http://'+localhost+'/image/user_head/';


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
