import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'virtual:svg-icons-register'
import svgIcon from "./components/SvgIcon/index.vue";

createApp(App).use(ElementPlus).component('svg-icon', svgIcon).mount('#app')
