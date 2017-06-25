// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// Vue.config.productionTip = false

// eslint-disable no-new 跳过规则校验，不需要将实例化赋值给一个变量
/* eslint-disable no-new */
new Vue({
  el: 'body',
  template: '<App/>',
  components: { App }
});
