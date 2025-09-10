<template>
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
</template>
<script setup lang="ts">
const discStore = useDiscStore()
const props = defineProps({
    demonSlayerCharacters: {
        type: Array,
        default: []
    }
})
const quizNatural = ref<any[]>([])
const quizWork = ref<any[]>([])
interface IQuizOption {
    text: string,
    trait: 'D' | 'I' | 'S' | 'C',
    value: string
}
interface IScore {
    D: number,
    I: number,
    S: number,
    C: number
}
onMounted(() => {
    // quizNatural.value = discStore.quizData1
    // quizWork.value = discStore.quizData2
    // totalParts.value = [...quizData1, ...quizData2]
    const quizData = [
        {
            text: "在生活中，我還是很講求效率",
            trait: "D",
            value: "2",
        },
        {
            text: "在生活中，我還是很講求效率",
            trait: "I",
            value: "3",
        },
        {
            text: "在生活中，我還是很講求效率",
            trait: "S",
            value: "1",
        },
    ]
    quizNatural.value = quizData
    quizWork.value = quizData
    const naturalScore = calculateScore(quizNatural.value)
    const workScore = calculateScore(quizWork.value)
    findCharacterMatch(naturalScore, workScore)
})

function calculateScore(quizData: IQuizOption[]) {
    const score: IScore = {
        D: 0,
        I: 0,
        S: 0,
        C: 0
    }
    quizData.forEach((q: IQuizOption) => {
        score[q.trait] += Number(q.value)
    })
    return score
}

function sortTraits(score: IScore): [string, number][] {
    return Object.entries(score).sort(([, a], [, b]) => {
        return b - a
    });
}

function findCharacterMatch(naturalScore: IScore, workScore: IScore) {
    const allScoresNatural = Object.values(naturalScore);

    // // 平均整合者
    // const maxScoreNatural = Math.max(...allScoresNatural)
    // const minScoreNatural = Math.min(...allScoresNatural)
    // if (maxScoreNatural - minScoreNatural <= 7) {
    //     const murata = props.demonSlayerCharacters.find((c: any) => c.isEasterEgg);
    //     if (murata)
    //         return [murata];
    // }

    const natualTraits = sortTraits(naturalScore) as any
    const primaryNatural = natualTraits[0][0]
    const secondaryNatual = natualTraits[1][0]

    const workTraits = sortTraits(workScore) as any
    const primaryWork = workTraits[0][0]
    const secondaryWork = workTraits[1][0]

    const nonEasterEggeCharacters = props.demonSlayerCharacters.filter((c: any) => !c.isEasterEgg)
    const primaryNaturalChar = primaryNatural.toUpperCase();
    const primaryWorkChar = primaryWork.toUpperCase();
    
    // --- 規則一：如果使用者內外風格一致，則排除掉「完美對角」的角色 ---
    let remainingCharacters = []
    if (primaryNaturalChar === primaryWorkChar) {
        const perfectlyOppositeCharacters = ["胡蝶忍", "童磨", "猗窩座", "半天狗", "不死川實彌", "竈門禰豆子"];
        remainingCharacters = nonEasterEggeCharacters.filter((c: any) => {
            return !perfectlyOppositeCharacters.includes(c.name)
        })
    } else {
        remainingCharacters = nonEasterEggeCharacters
    }
    remainingCharacters.map(c => {

    })
}

// function findCharacterMatch(scoresNatural, scoresWork) {
//     const sortedNatural = getTraitsSorted(scoresNatural)
//         , sortedWork = getTraitsSorted(scoresWork);
//     if (!sortedNatural.length || !sortedWork.length)
//         return [demonSlayerCharacters.find(c => c.name === "村田")];

//     const allScoresNatural = Object.values(scoresNatural);
//     const maxScoreNatural = Math.max(...allScoresNatural)
//         , minScoreNatural = Math.min(...allScoresNatural);
//     if (maxScoreNatural - minScoreNatural <= 7) {
//         const murata = demonSlayerCharacters.find(c => c.isEasterEgg);
//         if (murata)
//             return [murata];
//     }

//     const primaryNatural = sortedNatural[0][0]
//         , secondaryNatural = sortedNatural[1][0];
//     const primaryWork = sortedWork[0][0]
//         , secondaryWork = sortedWork[1][0];

//     const scoredCharacters = demonSlayerCharacters.filter(c => !c.isEasterEgg).map(c => {
//         let prerequisiteMet = true;

//         // --- 規則一：如果使用者內外風格一致，則排除掉「完美對角」的角色 ---
//         const primaryNaturalChar = primaryNatural.toUpperCase();
//         const primaryWorkChar = primaryWork.toUpperCase();

//         if (primaryNaturalChar === primaryWorkChar) {
//             const perfectlyOppositeCharacters = ["胡蝶忍", "童磨", "猗窩座", "半天狗", "不死川實彌", "竈門禰豆子"];

//             if (perfectlyOppositeCharacters.includes(c.name)) {
//                 prerequisiteMet = false;
//             }
//         }

//         if (c.lowTrait) {
//             // --- 規則二：調整無慘的出現條件 ---
//             if (c.name === "鬼舞辻無慘") {
//                 if (scoresWork['S'] >= 10 || scoresNatural['S'] >= 10) {
//                     prerequisiteMet = false;
//                 }
//             } else if (c.lowTraitContext === 'outer' && scoresWork[c.lowTrait] >= 12) {
//                 prerequisiteMet = false;
//             } else if (c.lowTraitContext === 'inner' && scoresNatural[c.lowTrait] >= 12) {
//                 prerequisiteMet = false;
//             }
//         }

//         if (!prerequisiteMet)
//             return {
//                 ...c,
//                 score: 0
//             };

//         // --- 計算基礎分數 ---
//         let score = 0;
//         const outer = c.outer.toUpperCase()
//             , inner = c.inner.toUpperCase();
//         if (outer.includes(primaryWork))
//             score += 2;
//         if (inner.includes(primaryNatural))
//             score += 2;
//         if (outer.includes(secondaryWork))
//             score += 1;
//         if (inner.includes(secondaryNatural))
//             score += 1;
//         if (outer.includes(primaryNatural))
//             score += 0.5;
//         if (inner.includes(primaryWork))
//             score += 0.5;
//         if (c.role.includes('柱'))
//             score += 1;

//         // --- 規則三：手動調整角色權重 ---

//         // 調低權重
//         if (c.name === "半天狗" || c.name === "玉壺") {
//             score -= 2;
//         }

//         // 調高權重
//         if (c.name === "我妻善逸" || c.name === "竈門禰豆子" || c.name === "嘴平伊之助") {
//             score += 1;
//         }
//         if (c.name === "猗窩座") {
//             score += 1;
//         }

//         return {
//             ...c,
//             score
//         };
//     }
//     );
//     scoredCharacters.sort((a, b) => b.score - a.score);
//     const bestMatches = scoredCharacters.filter(c => c.score > 0);
//     return bestMatches.length > 0 ? bestMatches.slice(0, 2) : [demonSlayerCharacters.find(c => c.name === "竈門炭治郎")];
// }
</script>