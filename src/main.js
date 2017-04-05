import Vue from 'vue'
//import ElementUI from 'element-ui'
import {Slider,TimePicker,TimeSelect,Row, Col} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './moa.css'
import App from './App.vue'
import Time from './Time.vue'
import Layout from './Layout.vue'

Vue.use(Slider)
Vue.use(TimePicker)
Vue.use(Row)
Vue.use(Col)

new Vue({
	el: '#app',
	//render: h => h(App),
	//render: h => h(Time)
	components: {
		'my-app': App,
		'my-time' : Time,
		'my-layout' : Layout
	}
})