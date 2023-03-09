import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'virtual:svg-icons-register'
import svgIcon from "./components/SvgIcon/index.vue";

import type { DefineComponent } from 'vue'
import ECharts from './components/echarts/index'

// vue自定义插件的方法
const coms: any = {
    install(app: DefineComponent) {
        app.component('my-chart', ECharts)
    }
}

createApp(App).use(ElementPlus).use(coms).component('svg-icon', svgIcon).mount('#app')
