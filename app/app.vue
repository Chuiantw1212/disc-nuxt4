<template>
  <div>
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
          <input type="text" id="name-input"
            class="w-full max-w-sm mx-auto block p-3 border border-gray-300 rounded-lg text-center" placeholder="您的姓名">
        </div>
        <div class="mt-8 text-center">
          <button id="start-btn"
            class="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-12 rounded-lg transition duration-300 shadow-md text-lg">開始測驗</button>
        </div>
      </div>

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

      <div id="result-screen" class="screen bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <div class="text-center">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-gray-800"><span id="result-name"></span>的測驗結果</h2>
          <p class="text-gray-600 mb-8">以下是您在「真實風格」與「外顯模樣」兩種情境下的 DiSC 特質分析。</p>
        </div>

        <div id="summary-analysis-container" class="mb-8"></div>

        <div class="my-8 text-center text-gray-500 text-sm p-4 bg-gray-50 rounded-lg">
          <p>此測驗是用vibe coding完成的陽春版，目前忘形還沒學會分享，所以歡迎你截圖分享XD</p>
        </div>

        <div id="detailed-analysis-container">
          <h3 class="text-2xl font-bold text-center mb-6 text-gray-700 border-t pt-10">兩大風格下的你</h3>
          <div id="detailed-analysis" class="space-y-12 mt-6"></div>
        </div>
        <div id="growth-suggestion-container" class="mt-12"></div>
        <div id="character-match-container" class="mt-12"></div>

        <div class="mt-10 border-t pt-8">
          <div class="max-w-2xl mx-auto space-y-4">
            <a href="https://reurl.cc/DOj6lN" target="_blank"
              class="block w-full bg-teal-500 hover:bg-teal-600 text-white font-bold text-center py-4 px-6 rounded-lg transition duration-300 shadow-lg text-xl">
              <div>想更了解你自己？</div>
              <div class="text-base font-medium mt-1">0913下午的四師講座在台北，帶你更好的探索自己</div>
            </a>
            <a href="https://www.pressplay.cc/project/08F1A8E56FFBD1641A4EC29E3DB7735A" target="_blank"
              class="block w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-center py-4 px-6 rounded-lg transition duration-300 shadow-lg text-xl">
              <div>DiSC人心洞悉術線上課</div>
              <div class="text-base font-medium mt-1">7小時帶你完整解析溝通，輸入200DISC再折200</div>
            </a>
            <a href="https://reurl.cc/74mQdD" target="_blank"
              class="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-center py-4 px-6 rounded-lg transition duration-300 shadow-lg text-xl">
              <div>想一起討論或看其他測驗？</div>
              <div class="text-base font-medium mt-1">歡迎加入人類行為研究社 (密碼: 22345678)</div>
            </a>
          </div>
        </div>

        <div class="mt-12 text-center border-t pt-10">
          <button id="retake-btn"
            class="w-full sm:w-auto bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-12 rounded-lg transition duration-300 shadow-md text-lg">再測一次</button>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
// Use a static import for server-side compatibility
// import '~/assets/first.css'
</script>