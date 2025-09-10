// plugins/chart.client.ts
import { defineNuxtPlugin } from '#app'
import { Chart, registerables } from 'chart.js'

export default defineNuxtPlugin(() => {
  // 註冊 Chart.js 內建的所有 elements / controllers / scales
  Chart.register(...registerables)

  // 如果你有自製 plugin，也在這裡註冊
  // Chart.register(MyCustomPlugin)
})