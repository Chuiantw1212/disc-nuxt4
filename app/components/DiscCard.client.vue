<template>
    <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
        <h4 class="text-2xl font-bold text-gray-800 mb-4 text-center">{{ modelValue.title }}</h4>

        <div class="nature__body">
            <!-- Radar Chart -->
            <div class="nature__body__chart">
                <canvas ref="canvasEl" class="block box-border h-full w-full"></canvas>
            </div>

            <!-- Score Squares -->
            <div class="analysis__traitSquares">
                <div class="trait__square">
                    <h5 class="text-base font-bold text-gray-800">支配型 (D)</h5>
                    <p class="square__value" :style="{ color: colors.D }">{{ modelValue.scores.D }}</p>
                </div>
                <div class="trait__square">
                    <h5 class="text-base font-bold text-gray-800">影響型 (i)</h5>
                    <p class="square__value" :style="{ color: colors.I }">{{ modelValue.scores.I }}</p>
                </div>
                <div class="trait__square primary">
                    <h5 class="text-base font-bold text-gray-800">謹慎型 (C)</h5>
                    <p class="square__value" :style="{ color: colors.C }">{{ modelValue.scores.C }}</p>
                </div>
                <div class="trait__square">
                    <h5 class="text-base font-bold text-gray-800">穩健型 (S)</h5>
                    <p class="square__value" :style="{ color: colors.S }">{{ modelValue.scores.S }}</p>
                </div>
            </div>
        </div>

        <!-- Primary style summary -->
        <div class="text-center p-4 bg-gray-50 rounded-md">
            <p class="text-lg font-semibold">
                主要風格：
                <span :style="{ color: styleColor }">{{ modelValue.traits.name }}</span>
            </p>
            <p class="text-gray-600 mt-2">{{ modelValue.traits.description }}</p>
        </div>

        <!-- Core Traits (slot or default) -->
        <div class="space-y-4 text-left mt-6">
            <h5 class="font-bold text-lg text-gray-700 text-center mb-2">核心特質解析 ({{ modelValue.coreTrait.title }})</h5>
            <div class="trait__details">
                <h5 class="font-bold text-gray-700">描述：</h5>
                <p class="text-gray-600 mt-1">{{ details.description }}</p>
            </div>
            <div class="trait__details">
                <h5 class="font-bold text-gray-700">運用優勢：</h5>
                <p class="text-gray-600 mt-1">{{ details.strengths }}</p>
            </div>
            <div class="trait__details">
                <h5 class="font-bold text-gray-700">過度使用：</h5>
                <p class="text-gray-600 mt-1">{{ details.overuse }}</p>
            </div>
            <div class="trait__details">
                <h5 class="font-bold text-gray-700">陰影：</h5>
                <p class="text-gray-600 mt-1">{{ details.shadow }}</p>
            </div>
            <div class="trait__details">
                <h5 class="font-bold text-gray-700">小建議：</h5>
                <p class="text-gray-600 mt-1">{{ details.suggestion }}</p>
            </div>
        </div>

        <!-- Low Traits (slot or default) -->
        <div class="lowTraits">
            <h5 class="font-bold text-lg text-gray-700 text-center mb-2">潛在的限制與挑戰 (低分特質)</h5>
            <slot name="limits">
                <div class="trait__details">
                    <h5 class="font-bold text-gray-700">i 低（缺乏影響性）</h5>
                    <p class="text-gray-600 mt-1">話不多，社交主動性低，容易被認為冷冷的。</p>
                </div>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
// 若你已在 plugins/chart.client.ts 裡 Chart.register(...registerables)，用下行即可：
import { Chart, type ChartData, type ChartOptions } from 'chart.js'
import type { IDiscCard } from '~/types/discCard';
// 若沒有註冊，改用： import Chart from 'chart.js/auto'

type Scores = { D: number; I: number; C: number; S: number }
type ColorMap = { D: string; I: string; C: string; S: string, [key: string]: string }
const styleColor = ref<string>('')
const props = withDefaults(defineProps<{
    modelValue: IDiscCard,
    colors?: ColorMap
    details?: {
        description: string;
        strengths: string;
        overuse: string;
        shadow: string;
        suggestion: string;
    }
}>(), {
    colors: () => ({
        D: 'rgb(34,197,94)',   // green-500
        I: 'rgb(236,72,153)',  // pink-500
        C: 'rgb(234,179,8)',   // amber-400
        S: 'rgb(59,130,246)'   // blue-500
    }),
    details: () => ({
        description: "在日常生活中，您是一位天生的決策者。您喜歡掌握方向，並享受事情快速推進的感覺。",
        strengths: "您能為生活注入活力與方向感。朋友和家人常依賴您的果斷，來讓事情動起來。",
        overuse: "有時可能會因為太有效率，而忽略了身邊人悠閒放鬆的需求，顯得有些強勢。",
        shadow: "您內心可能不喜歡混亂或失控的感覺，希望能一切盡在掌握。",
        suggestion: "練習享受「沒有計畫」的時光，把主導權交給別人，感受隨遇而安的樂趣。"
    })
})

onMounted(() => {
    setStyleColor()
    drawChart()
})

function setStyleColor() {
    const coreTrait = props.modelValue.coreTrait.key
    if (coreTrait) {
        const selectedColor = props.colors[coreTrait]
        if (selectedColor) {
            styleColor.value = selectedColor
        }
    }
}

const canvasEl = ref<HTMLCanvasElement | null>(null)
let chart: Chart | null = null

const buildData = (): ChartData<'radar'> => {
    const { D, I, C, S } = props.modelValue.scores
    return {
        labels: ['D', 'I', 'C', 'S'],
        datasets: [
            {
                label: 'Natural',
                data: [D, I, C, S],
                // 背景/邊框色用主要色（C）的半透明系
                backgroundColor: 'rgba(234, 179, 8, 0.15)',
                borderColor: props.colors.C,
                pointBackgroundColor: props.colors.C
            }
        ]
    }
}

const options: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
        // 你若有自製 plugin（ex: watermark），可在此加上：
        // watermark: { text: '海德堡隱士居', opacity: 0.06 }
    },
    scales: {
        r: {
            beginAtZero: true,
            suggestedMax: 40,         // 視你的量表可調
            angleLines: { color: '#e5e7eb' },
            grid: { color: '#e5e7eb' },
            pointLabels: { color: '#374151', font: { size: 12 } },
            ticks: { display: false }
        }
    }
}

function drawChart() {
    if (!canvasEl.value) return
    const { scores } = props.modelValue
    chart = new Chart(canvasEl.value, {
        type: 'radar',
        data: {
            labels: ['D', 'I', 'S', 'C'],
            datasets: [{
                label: '分數',
                data: [scores.D, scores.I, scores.S, scores.C],
                backgroundColor: `rgba(20, 184, 166, 0.2)`,
                borderColor: `rgba(13, 148, 136, 1)`,
                pointBackgroundColor: `rgba(13, 148, 136, 1)`,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(13, 148, 136)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 36,
                    ticks: {
                        stepSize: 9
                    },
                    pointLabels: {
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    startAngle: -45
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    })
}

onBeforeUnmount(() => {
    chart?.destroy()
    chart = null
})

watch(() => props.modelValue.scores, (next) => {
    if (!chart) return
    chart.data = buildData()
    chart.update()
}, { deep: true })
</script>

<style lang="scss" scoped>
.nature__body {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    .nature__body__chart {
        width: 100%;
    }

    .analysis__traitSquares {
        width: 100%;
        display: grid;
        grid-template-columns: auto auto;
        gap: 1rem;

        .trait__square {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            border-radius: 0.75rem;
            border: 1px solid #e5e7eb;
            transition: all 0.3s ease;
            text-align: center;
            height: 100%;

            .square__value {
                font-weight: 700;
                font-size: 2.25rem;
                line-height: 2.5rem;
                margin-top: 0.25rem;
                margin-bottom: 0.25rem;
            }
        }
    }
}


.trait__details {
    padding: 1rem;
    background-color: rgb(249 250 251 / 0.5);
    border-width: 1px;
    border-radius: 0.375rem;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: #e5e7eb;
}

.lowTraits {
    margin-top: 1.5rem;
}

@media screen and (min-width:992px) {
    .nature__body {
        display: flex;

        .nature__body__chart {
            width: 50%;
        }

        .analysis__traitSquares {
            width: 50%;

            .trait__square {

                .square__value {
                    font-size: 48px;
                }
            }
        }
    }

}
</style>
