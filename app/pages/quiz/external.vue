<template>
    <div :key="route.fullPath" class="screen bg-white p-6 sm:p-8 rounded-xl shadow-lg active-screen">
        <div class="text-center mb-8">
            <h2 class="quiz__title">Part 2: 你的外顯模樣</h2>
            <p class="text-gray-600 mt-2">
                現在，場景切換到職場、社交場合，或任何需要您「拿出專業表現」的時候。在這裡，您可能會為了達成目標、維持和諧或展現能力，而自然地做出一些行為上的調整。</p>
            <p class="text-teal-700 font-medium mt-4">🎭
                形象篇：在這些需要應對進退的場合中，請評估以下描述，有多符合您「公開展示」出來的樣子。
            </p>
            <div class="progress-bar-bg w-full h-2.5 rounded-full mt-6">
                <div id="progress-bar" class="progress-bar-fill h-2.5 rounded-full" style="width: 100%;"></div>
            </div>
        </div>
        <form>
            <div class="space-y-4">
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
                <button id="prev-btn" @click="backToQ1()" type="button"
                    class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-6 rounded-lg transition duration-300"
                    style="display: inline-block;">上一頁</button>
                <button id="next-btn" @click="setQuizData()" type="button"
                    class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">查看結果</button>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import type { MessagePlacement, MessageType } from 'element-plus'
const route = useRoute()
const router = useRouter()
const discStore = useDiscStore()
const dialogVisible = ref<boolean>(false)
const quizData = [{
    text: "有更高的權力或實力，才能做更多事",
    trait: "D"
}, {
    text: "我希望能掌握工作中的一切",
    trait: "D"
}, {
    text: "改變或開創帶給我很多能量",
    trait: "D"
}, {
    text: "比起風險，我更看重收益",
    trait: "D"
}, {
    text: "工作中我喜歡認識新朋友",
    trait: "I"
}, {
    text: "我熱愛鼓舞他人，創造好的氛圍",
    trait: "I"
}, {
    text: "我很有創意，常想出新點子",
    trait: "I"
}, {
    text: "我善於用表達或說話來影響別人",
    trait: "I"
}, {
    text: "工作時我喜歡團隊合作",
    trait: "S"
}, {
    text: "我很樂意配合別人一起共事",
    trait: "S"
}, {
    text: "有固定SOP的工作讓我感覺安全",
    trait: "S"
}, {
    text: "遇到問題時，我會先嘗試問別人意見",
    trait: "S"
}, {
    text: "工作中的我很嚴謹，重視規則",
    trait: "C"
}, {
    text: "我善於規劃或創造流程",
    trait: "C"
}, {
    text: "有完整的系統或是資訊很重要",
    trait: "C"
}, {
    text: "我認為具體與邏輯是工作最重要的事",
    trait: "C"
}]

const shuffledArray = ref<any>([])

onMounted(() => {
    shuffledArray.value = shuffleArray(quizData)
    shuffledArray.value.forEach((obj: any) => {
        obj.value = null
    });
})

async function backToQ1() {
    // reloadNuxtApp({ path: '/quiz/internal', force: true })
    // await navigateTo({
    //     name: 'quiz-internal'
    // })
    router.push({
        name: 'quiz-internal'
    })
}

function setQuizData() {
    const emptyIndex: number = Array.from(shuffledArray.value).findIndex((q: any) => {
        return !q.value && Number(q.value) !== 0
    })
    if (emptyIndex !== -1) {
        const emptyQ = shuffledArray.value[emptyIndex]
        ElMessage({
            message: `請評估${emptyQ.text}`,
            type: 'info',
            placement: 'bottom',
        })
        return
    }
    // discStore.setQuizData1(shuffledArray.value)
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
.quiz__title {
    font-weight: 800;
    font-size: 30px;
}

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
        position: absolute;
    }
}

@media screen and (min-width:992px) {
    .form__question {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .question__text {
            font-weight: 600;
            font-size: 18px;
            padding: 0px;
        }

        .question__options {
            gap: 0.75rem;

            .options__label {
                line-height: 0px;
            }
        }

        .option__input {
            visibility: hidden;
        }
    }
}
</style>