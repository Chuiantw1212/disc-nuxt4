<template>
    <div id="quiz-screen" class="screen bg-white p-6 sm:p-8 rounded-xl shadow-lg active-screen">
        <div id="quiz-header" class="text-center mb-8">
            <h2 id="quiz-title" class="text-3xl font-bold text-gray-800">Part 1: 你的真實風格</h2>
            <p id="quiz-description" class="text-gray-600 mt-2">
                想像一個完全放鬆的週末午後，或跟三五好友膩在一起的時候。不需要扮演任何角色，也不用在意他人眼光。此刻的您，是最舒服自在、最接近核心本質的模樣。</p>
            <p id="quiz-instruction" class="text-teal-700 font-medium mt-4">🏠 真我篇：在這種最放鬆的狀態下，請憑直覺，評估以下描述有多符合您「內心真正的自己」。
            </p>
            <div class="progress-bar-bg w-full h-2.5 rounded-full mt-6">
                <div id="progress-bar" class="progress-bar-fill h-2.5 rounded-full" style="width: 50%;"></div>
            </div>
        </div>
        <form id="disc-form">
            <div id="questions-container" class="space-y-4">
                <div v-for="(quiz, index) in shuffledArray" :key="index" class="form__question">
                    <h4 class="question__text">{{ quiz.text }}</h4>
                    <div class="question__options">
                        <label class="options__label">
                            <input v-model="quiz.value" type="radio" value="0" class="sr-only option__input">
                            <span class="rating-label">非常<br>不像我</span>
                        </label>
                        <label class="options__label">
                            <input v-model="quiz.value" type="radio" value="2" class="sr-only option__input">
                            <span class="rating-label">不像我</span>
                        </label>
                        <label class="options__label">
                            <input v-model="quiz.value" type="radio" value="3" class="sr-only option__input">
                            <span class="rating-label">普通</span>
                        </label>
                        <label class="options__label">
                            <input v-model="quiz.value" type="radio" value="7" class="sr-only option__input"><span
                                class="rating-label">像我</span>
                        </label>
                        <label class="options__label">
                            <input v-model="quiz.value" type="radio" value="9" class="sr-only option__input"><span
                                class="rating-label">非常<br>像我</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="mt-12 flex justify-between items-center">
                <button id="next-btn" type="button"
                    class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                    @click="setQuizData()">下一頁</button>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import type { MessagePlacement, MessageType } from 'element-plus'
const router = useRouter()
const discStore = useDiscStore()
const dialogVisible = ref<boolean>(false)
const quizData = [{
    text: "在生活中，我還是很講求效率",
    trait: "D"
}, {
    text: "我是個有自信的人",
    trait: "D"
}, {
    text: "我講話比較直接",
    trait: "D"
}, {
    text: "大家常說我會冒險",
    trait: "D"
}, {
    text: "我是個熱情的人",
    trait: "I"
}, {
    text: "與人互動時，我喜歡幽默對待",
    trait: "I"
}, {
    text: "我通常是那個開話題的人",
    trait: "I"
}, {
    text: "大家都說我是開朗的人",
    trait: "I"
}, {
    text: "我是個溫和的人",
    trait: "S"
}, {
    text: "我很有耐心",
    trait: "S"
}, {
    text: "支持朋友對我而言很重要",
    trait: "S"
}, {
    text: "大家都說我是可以說心事的朋友",
    trait: "S"
}, {
    text: "即便放鬆，我還是蠻謹慎的",
    trait: "C"
}, {
    text: "我很重視生活中的規矩",
    trait: "C"
}, {
    text: "我是個看重細節的人",
    trait: "C"
}, {
    text: "大家都說我很會分析",
    trait: "C"
}]

const shuffledArray = ref<any>([])

onMounted(() => {
    shuffledArray.value = shuffleArray(quizData)
    shuffledArray.value.forEach((obj: any) => {
        obj.value = null
    });
})

function setQuizData() {
    const hasSomeEmpty: boolean = shuffledArray.value.some((q: any) => !q.value)
    const emptyIndex: number = Array.from(shuffledArray.value).findIndex((q: any) => !q.value)
    if (emptyIndex !== -1) {
        const emptyQ = shuffledArray.value[emptyIndex]
        ElMessage({
            message: `請評估${emptyQ.text}`,
            type: 'info',
            placement: 'bottom',
        })
        return
    }
    discStore.setQuizData1(shuffledArray.value)
}

function shuffleArray(array: Array<any>) {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

</script>
<style lang="scss" scoped>
.form__question {
    text-align: center;
    border-bottom: 1px lightgrey solid;
    padding: 16px 0;


    .question__text {
        font-weight: 600;
        font-size: 18px;
        padding: 0px;
    }

    .question__options {
        display: flex;
        justify-content: center;
        gap: 0.5rem;

        .options__label {
            line-height: 0px;
        }
    }

    .option__input {
        visibility: hidden;
    }
}
</style>