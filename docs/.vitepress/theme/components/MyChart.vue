<template>
  <div ref="chartContainer" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

// 定义组件 Props
const props = defineProps({
  option: { type: Object, required: true }, // ECharts 配置项
  width: { type: String, default: '100%' }, // 容器宽度
  height: { type: String, default: '400px' } // 容器高度
})

const chartContainer = ref(null)
let chartInstance = null

// 初始化图表
const initChart = async () => {
  if (!chartContainer.value) return

  // 动态导入 ECharts
  const echarts = await import('echarts')
  chartInstance = echarts.init(chartContainer.value)
  chartInstance.setOption(props.option)
}

// 响应式更新图表
watch(() => props.option, (newOption) => {
  if (chartInstance) {
    chartInstance.setOption(newOption)
  }
})

onMounted(() => {
  initChart()
  // 可选：响应窗口 resize 事件
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.dispose() // 清理实例
  }
  window.removeEventListener('resize', handleResize) // 移除事件监听
})

const handleResize = () => {
  if (chartInstance) {
    chartInstance.resize() // 调整图表大小
  }
}
</script>