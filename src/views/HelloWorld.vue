<template>
    <svgIcon v-if="props.icon" :name="props.icon" />
    <span v-if="props.title" slot='title'>{{ props.title }}</span>
  <div>
    <h1>
      "这个项目是用来复刻小兔鲜"
    </h1>
    <my-chart></my-chart>
    <el-button @click="showAxios">点击发送请求</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import svgIcon from '../components/SvgIcon/index.vue'

const showAxios = () => {
  axios.get('/user/userinfo').then(res => {
  }).catch(err => {
  })
}
const props = defineProps({
    icon: {
        type: String,
        default: 'example'
    },
    title: {
        type: String,
        default: '示例'
    }
})
</script>

<style scoped>
</style>