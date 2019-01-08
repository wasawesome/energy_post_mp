import Vue from 'vue'
import App from './App'
import _ from 'lodash';

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype._ = _;

const app = new Vue(App)
app.$mount()

import './assets/css/commons.scss';