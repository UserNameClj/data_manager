import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
// import Pubsub from 'pubsub-js';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './mock/mock'




Vue.config.productionTip = process.env.NODE_ENV==='production';
Vue.use(ElementUI);
Vue.use(VueAxios,axios)
new Vue({
  router,
  template: {
    App
  },
  render: h => h(App)
}).$mount("#app");
