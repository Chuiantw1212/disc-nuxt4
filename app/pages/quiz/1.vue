<template>
    <div id="quiz-screen" class="screen bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <div id="quiz-header" class="text-center mb-8">
            <h2 id="quiz-title" class="text-3xl font-bold text-gray-800"></h2>
            <p id="quiz-description" class="text-gray-600 mt-2"></p>
            <p id="quiz-instruction" class="text-teal-700 font-medium mt-4"></p>
            <div class="progress-bar-bg w-full h-2.5 rounded-full mt-6">
                <div id="progress-bar" class="progress-bar-fill h-2.5 rounded-full" style="width: 0%"></div>
            </div>
        </div>
        <form id="disc-form">
            <div id="questions-container" class="space-y-4"></div>
            <div class="mt-12 flex justify-between items-center">
                <button id="prev-btn" type="button"
                    class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-6 rounded-lg transition duration-300">上一頁</button>
                <button id="next-btn" type="button"
                    class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">下一頁</button>
            </div>
        </form>
    </div>
</template>