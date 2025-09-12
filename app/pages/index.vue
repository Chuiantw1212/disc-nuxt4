<template>
    <div class="container mx-auto p-4 sm:p-6 md:p-8 max-w-4xl min-h-screen flex flex-col justify-center">
        <div id="intro-screen" class="screen active-screen bg-white p-6 sm:p-8 rounded-xl shadow-lg text-left">
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 text-left">DiSC 行為風格測驗 (鬼滅角色版) by忘形</h1>
            <div class="text-gray-600 mt-4 text-left space-y-4">
                <p>DiSC是一套全球廣泛應用於企業、人才發展與個人成長的評測。藉由統計與評估行為，能夠應用於人際關係、溝通協調，提案銷售、組織發展與團隊領導。</p>
                <p>這一版蹭一下鬼滅的人氣，加入最像你的鬼滅之刃角色，希望能更有趣一些。但即便你沒看過，也可以看看你的風格是什麼。</p>
                <p>測驗的原理是透過生活中的不同情境，把我們可能選擇的行為記錄下來。在測驗前，請先閱讀以下三點說明事項。</p>
            </div>
            <div class="mt-8 space-y-4 text-gray-700">
                <div class="p-4 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg">
                    <h2 class="font-bold text-lg">1. 真實選擇</h2>
                    <p>這份測驗中，沒有好壞對錯，請依據您平常的行為來選擇，而非您認為理想的行為，或是想成為的模樣。</p>
                </div>
                <div class="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                    <h2 class="font-bold text-lg">2. 定位而非定義</h2>
                    <p>測驗是幫您定位當下的狀態，而不是定義您是誰。人是會隨著時間，情境，對應的人而改變的。</p>
                </div>
                <div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                    <h2 class="font-bold text-lg">3. 簡易版本</h2>
                    <p>此免費測驗為簡易版，主要是讓您快速辨別，若需要更高信效度的標準化測驗請洽忘形。</p>
                </div>
            </div>
            <div class="mt-8">
                <label for="name-input" class="block text-center text-gray-700 font-bold mb-2">請輸入您的姓名或暱稱</label>
                <input v-model="userForm.name" type="text" id="name-input"
                    class="w-full max-w-sm mx-auto block p-3 border border-gray-300 rounded-lg text-center"
                    placeholder="您的姓名">
                <!-- <label for="name-input" class="block text-center text-gray-700 font-bold mb-2 mt-4">請輸入您的Email</label>
                <input v-model="userForm.name" type="text" id="name-input"
                    class="w-full max-w-sm mx-auto block p-3 border border-gray-300 rounded-lg text-center"
                    placeholder="您的Email"> -->
            </div>
            <div class="mt-8 text-center">
                <button id="start-btn"
                    class="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-12 rounded-lg transition duration-300 shadow-md text-lg"
                    @click="starQuiz()">開始測驗</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { IUser } from '~/types/user'

const userStore = useUserStore()
const userForm = ref<IUser>({
    name: '',
    email: ''
})

function starQuiz() {
    userStore.setUser(userForm.value)
    navigateTo({
        name: 'quiz-1'
    })
}
// Use a static import for server-side compatibility
// import '~/assets/first.css'
</script>