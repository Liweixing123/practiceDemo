/**
 * @description 封装echarts组件
 */

import { defineComponent, onMounted, ref } from "vue";
import * as echarts from "echarts";
type EChartsOption = echarts.EChartsOption

const PropTypes = {
    // 图表类名
    className: {
        type: String,
        default: 'charts',
    },
    // 图表宽度
    width:{
        type: String,
        require: true
    },
    // 图标高度
    height: {
        type: String,
        required: true,
    },
    // 图表数据项
    options: {
        type: Object,
        default: () => ({})
    }   
}

const index = defineComponent({
    name: 'my-charts',
    props: PropTypes,
    setup(props){
        const myChart = ref<HTMLElement>()
        const myCharts = ref();
        /**
         * 
         * @param data 数据项，设置默认值或者是传值
         * @param clearCaching 清理缓存
         */
        const initChart = (data?:EChartsOption, clearCaching = false) => {
            if (data || props.options) {
                myCharts.value.setOption(data || props.options, clearCaching);
            }
        }

        onMounted(() => {
            myCharts.value = echarts.init(myChart.value!)
            initChart()
        })

        /**
         * @description 箭头函数得到的是html标签
         */
        return () => (<div
            ref={myChart}
            class={props.className}
            style={{width:props.width, height:props.height}}
        ></div>)
}
})

export default index