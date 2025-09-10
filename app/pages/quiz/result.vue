<template>
    <div id="result-screen" class="screen bg-white p-6 sm:p-8 rounded-xl shadow-lg active-screen">
        <div class="text-center">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-gray-800"><span id="result-name">EN Chu</span>的測驗結果</h2>
            <p class="text-gray-600 mb-8">以下是您在「真實風格」與「外顯模樣」兩種情境下的 DiSC 特質分析。</p>
        </div>

        <div id="summary-analysis-container" class="mb-8">
            <div class="bg-teal-50 p-6 rounded-lg border border-teal-200 space-y-4 text-gray-700">
                <h3 class="text-2xl font-bold text-center mb-4 text-gray-700">總結分析：真實風格 vs. 外顯模樣</h3>
                <p>您是一位 <strong>「表裡如一」</strong> 的人。您的真實風格與外顯模樣高度一致，主要都展現出 <strong>謹慎型 (C)</strong> 的特質。</p>
                <p class="mt-2">這代表您在公開場合中，能夠自在地做自己，不需要耗費太多心力去「扮演」另一個角色。這種真實性與一致性，是您建立信任感與個人魅力的重要基礎。</p>
            </div>
        </div>

        <div class="my-8 text-center text-gray-500 text-sm p-4 bg-gray-50 rounded-lg">
            <p>此測驗是用vibe coding完成的陽春版，目前忘形還沒學會分享，所以歡迎你截圖分享XD</p>
        </div>

        <div id="detailed-analysis-container">
            <h3 class="text-2xl font-bold text-center mb-6 text-gray-700 border-t pt-10">兩大風格下的你</h3>
            <div id="detailed-analysis" class="space-y-12 mt-6">
                <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 class="text-2xl font-bold text-gray-800 mb-4 text-center">1. 你的真實風格 (核心自我)</h4>
                    <div class="nature__body">
                        <div class="h-64 sm:h-80"><canvas id="chart-natural"
                                style="display: block; box-sizing: border-box; height: 320px; width: 347px;"
                                height="640" width="694"></canvas></div>
                        <div class="analysis__traitSquares">
                            <div class="trait__square ">
                                <h5 class="text-base font-bold text-gray-800">支配型 (D)</h5>
                                <p class="square__value" style="color: rgb(34, 197, 94);">24</p>
                            </div>
                            <div class="trait__square ">
                                <h5 class="text-base font-bold text-gray-800">影響型 (i)</h5>
                                <p class="square__value" style="color: rgb(236, 72, 153);">9</p>
                            </div>
                            <div class="trait__square primary">
                                <h5 class="text-base font-bold text-gray-800">謹慎型 (C)</h5>
                                <p class="square__value" style="color: rgb(234, 179, 8);">30</p>
                            </div>
                            <div class="trait__square ">
                                <h5 class="text-base font-bold text-gray-800">穩健型 (S)</h5>
                                <p class="square__value" style="color: rgb(59, 130, 246);">15</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center p-4 bg-gray-50 rounded-md">
                        <p class="text-lg font-semibold">主要風格：<span style="color: rgb(234, 179, 8);">Cd 風格
                                (謹慎型/支配型)</span></p>
                        <p class="text-gray-600 mt-2">您是「權威的專家」。擁有 C 的分析能力與 D 的主導性，是追求標準與真相的權威。</p>
                    </div>
                    <div class="space-y-4 text-left mt-6">
                        <h5 class="font-bold text-lg text-gray-700 text-center mb-2">核心特質解析 (謹慎型 (C))</h5>
                        <div class="p-4 bg-gray-50/50 rounded-md border">
                            <h5 class="font-bold text-gray-700">描述：</h5>
                            <p class="text-gray-600 mt-1">在日常生活中，您是一位標準的「細節控」。您享受把事情做得精確、有條理。</p>
                        </div>
                        <div class="p-4 bg-gray-50/50 rounded-md border">
                            <h5 class="font-bold text-gray-700">運用優勢：</h5>
                            <p class="text-gray-600 mt-1">您的謹慎與細心，讓您在處理生活大小事時總能井井有條，避免麻煩。</p>
                        </div>
                        <div class="p-4 bg-gray-50/50 rounded-md border">
                            <h5 class="font-bold text-gray-700">過度使用：</h5>
                            <p class="text-gray-600 mt-1">有時可能會因為過於專注細節，而顯得有些猶豫不決或僵化。</p>
                        </div>
                        <div class="p-4 bg-gray-50/50 rounded-md border">
                            <h5 class="font-bold text-gray-700">陰影：</h5>
                            <p class="text-gray-600 mt-1">您內心可能害怕犯錯或事情不完美。這種追求完美的傾向，是您細心背後的驅動力。</p>
                        </div>
                        <div class="p-4 bg-gray-50/50 rounded-md border">
                            <h5 class="font-bold text-gray-700">小建議：</h5>
                            <p class="text-gray-600 mt-1">試著給自己一些「犯小錯」的空間。有時候，完成比完美更重要。</p>
                        </div>
                    </div>
                    <div class="space-y-4 text-left mt-8 pt-6 border-t">
                        <h5 class="font-bold text-lg text-gray-700 text-center mb-2">潛在的限制與挑戰 (低分特質)</h5>
                        <div class="p-4 bg-gray-50/50 rounded-md border">
                            <h5 class="font-bold text-gray-700">i 低（缺乏影響性）</h5>
                            <p class="text-gray-600 mt-1">話不多，社交主動性低，容易被認為冷冷的。</p>
                        </div>
                    </div>
                </div>
                <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
                    <h4 class="text-2xl font-bold text-gray-800 mb-4 text-center">2. 你的外顯模樣 (公開形象)</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-6">
                        <div class="h-64 sm:h-80"><canvas id="chart-work"
                                style="display: block; box-sizing: border-box; height: 320px; width: 347px;"
                                height="640" width="694"></canvas></div>
                        <div class="grid grid-cols-2 gap-4 h-64 sm:h-80">
                            <div class="trait__square ">
                                <h5 class="text-base font-bold text-gray-800">支配型 (D)</h5>
                                <p class="text-4xl sm:text-5xl font-bold my-1" style="color: rgb(34, 197, 94);">24</p>
                            </div>
                            <div class="trait__square ">
                                <h5 class="text-base font-bold text-gray-800">影響型 (i)</h5>
                                <p class="text-4xl sm:text-5xl font-bold my-1" style="color: rgb(236, 72, 153);">12</p>
                            </div>
                            <div class="trait__square primary">
                                <h5 class="text-base font-bold text-gray-800">謹慎型 (C)</h5>
                                <p class="text-4xl sm:text-5xl font-bold my-1" style="color: rgb(234, 179, 8);">36</p>
                            </div>
                            <div class="trait__square ">
                                <h5 class="text-base font-bold text-gray-800">穩健型 (S)</h5>
                                <p class="text-4xl sm:text-5xl font-bold my-1" style="color: rgb(59, 130, 246);">11</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center p-4 bg-gray-50 rounded-md">
                        <p class="text-lg font-semibold">主要風格：<span style="color: rgb(234, 179, 8);">謹慎型 (C)</span></p>
                    </div>
                    <div class="space-y-4 text-left mt-6">
                        <h5 class="font-bold text-lg text-gray-700 text-center mb-2">核心特質解析 (謹慎型 (C))</h5>
                        <div class="p-4 bg-gray-50/50 rounded-md border">
                            <h5 class="font-bold text-gray-700">描述：</h5>
                            <p class="text-gray-600 mt-1">您是團隊的品質守門員。您注重細節、有條理且追求準確性。</p>
                        </div>
                        <div class="p-4 bg-gray-50/50 rounded-md border">
                            <h5 class="font-bold text-gray-700">運用優勢：</h5>
                            <p class="text-gray-600 mt-1">將您的嚴謹用於品質控管、流程優化和風險評估，是不可或缺的角色。</p>
                        </div>
                        <div class="p-4 bg-gray-50/50 rounded-md border">
                            <h5 class="font-bold text-gray-700">過度使用：</h5>
                            <p class="text-gray-600 mt-1">可能陷入「分析癱瘓」，過度專注於細節而延誤進度，或對他人吹毛求疵。</p>
                        </div>
                        <div class="p-4 bg-gray-50/50 rounded-md border">
                            <h5 class="font-bold text-gray-700">陰影：</h5>
                            <p class="text-gray-600 mt-1">陰影層面是害怕犯錯或受到批評，這可能使您過於保守，不願冒險。</p>
                        </div>
                        <div class="p-4 bg-gray-50/50 rounded-md border">
                            <h5 class="font-bold text-gray-700">小建議：</h5>
                            <p class="text-gray-600 mt-1">學會區分「完美」與「足夠好」，設定合理的完成時限，並練習在資訊不完全時做決策。</p>
                        </div>
                    </div>
                    <div class="space-y-4 text-left mt-8 pt-6 border-t">
                        <h5 class="font-bold text-lg text-gray-700 text-center mb-2">潛在的限制與挑戰 (低分特質)</h5>
                        <div class="p-4 bg-gray-50/50 rounded-md border">
                            <h5 class="font-bold text-gray-700">S 低（缺乏穩定性）</h5>
                            <p class="text-gray-600 mt-1">缺少耐心與持續力，團隊可能覺得不被關心。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="growth-suggestion-container" class="mt-12" style="display: block;">
            <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 class="text-2xl font-bold text-center mb-4 text-gray-700">個人化成長建議</h3>
                <div class="p-4 bg-blue-50/50 rounded-md border border-blue-200 text-gray-700">
                    <p>您對品質要求極高(高C)，請記得團隊合作也需要溫度與同理心(低S)，適時給予支持。</p>
                </div>
            </div>
        </div>
        <div id="character-match-container" class="mt-12">
            <div class="border-t pt-10">
                <h3 class="text-2xl font-bold text-center mb-6 text-gray-700">最接近你的鬼滅之刃角色</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col">
                        <div class="text-center">
                            <p class="text-gray-500 text-sm">蟲柱繼子</p>
                            <h4 class="text-2xl font-bold text-gray-800">栗花落香奈乎</h4>
                        </div>
                        <div class="text-sm my-4 text-center space-y-1">
                            <p><strong>外在風格:</strong> <span class="font-bold"
                                    style="color: rgb(234, 179, 8);">謹慎型</span></p>
                            <p><strong>內在風格:</strong> <span class="font-bold"
                                    style="color: rgb(59, 130, 246);">穩健型</span> / <span class="font-bold"
                                    style="color: rgb(234, 179, 8);">謹慎型</span></p>
                        </div>
                        <p class="text-gray-600 text-center flex-grow">
                            外在表現得極度沉默、被動，只遵循命令，給人一種空洞的感覺。但她的內心，其實是「聽從心的聲音」的渴望與對夥伴的深厚情感，以及為此而進行嚴格修煉的堅韌。是從純粹的服從，蛻變為溫柔守護者的代表。
                        </p>
                    </div>
                    <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col">
                        <div class="text-center">
                            <p class="text-gray-500 text-sm">盜帳號駭客 / 純愛畫家</p>
                            <h4 class="text-2xl font-bold text-gray-800">愈史郎</h4>
                        </div>
                        <div class="text-sm my-4 text-center space-y-1">
                            <p><strong>外在風格:</strong> <span class="font-bold"
                                    style="color: rgb(234, 179, 8);">謹慎型</span> / <span class="font-bold"
                                    style="color: rgb(34, 197, 94);">支配型</span></p>
                            <p><strong>內在風格:</strong> <span class="font-bold"
                                    style="color: rgb(59, 130, 246);">穩健型</span> / <span class="font-bold"
                                    style="color: rgb(234, 179, 8);">謹慎型</span></p>
                        </div>
                        <p class="text-gray-600 text-center flex-grow">
                            外在冷漠挑剔，只在守護珠世時展現攻擊性。其內心，是對珠世絕對的忠誠與依賴，並透過極致的專注與細心來體現這份守護。他的溫柔，是深思熟慮且完美主義的。</p>
                    </div>
                </div>
            </div>
        </div>

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
import { Chart } from 'chart.js'
const discStore = useDiscStore()
const props = defineProps<{
    demonSlayerCharacters: ICharacter[]
}>()
const quizNatural = ref<any[]>([])
const quizWork = ref<any[]>([])
interface IQuizOption {
    text: string,
    trait: 'D' | 'I' | 'S' | 'C',
    value: string
}
interface IScore {
    [key: string]: any,
    D: number,
    I: number,
    S: number,
    C: number
}
interface ICharacter {
    name: string,
    role: string,
    outer: string,
    inner: string,
    description: string,
    lowTrait: string,
    lowTraitContext: string,
    isEasterEgg: boolean,
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
    const characters = findCharacterMatch(naturalScore, workScore)
    console.log({
        characters
    })
    drawCharts(naturalScore, workScore)
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
    const secondaryNatural = natualTraits[1][0]

    const workTraits = sortTraits(workScore) as any
    const primaryWork = workTraits[0][0]
    const secondaryWork = workTraits[1][0]

    const nonEasterEggeCharacters: ICharacter[] = props.demonSlayerCharacters.filter((c: ICharacter) => {
        return !c.isEasterEgg
    })
    const primaryNaturalChar = primaryNatural.toUpperCase();
    const primaryWorkChar = primaryWork.toUpperCase();

    // --- 規則一：如果使用者內外風格一致，則排除掉「完美對角」的角色 ---
    let remainingCharacters: ICharacter[] = nonEasterEggeCharacters
    if (primaryNaturalChar === primaryWorkChar) {
        const perfectlyOppositeCharacters = ["胡蝶忍", "童磨", "猗窩座", "半天狗", "不死川實彌", "竈門禰豆子"];
        remainingCharacters = remainingCharacters.filter((c: ICharacter) => {
            return !perfectlyOppositeCharacters.includes(c.name)
        })
    }

    // --- 規則二：調整無慘的出現條件 ---
    remainingCharacters = remainingCharacters.filter((c: ICharacter) => {
        if (c.lowTrait) {
            if (c.name === "鬼舞辻無慘") {
                if (workScore['S'] <= 10 || naturalScore['S'] <= 10) {
                    return false
                }
            } else if (c.lowTraitContext === 'outer' && workScore[c.lowTrait] >= 12) {
                return false
            } else if (c.lowTraitContext === 'inner' && naturalScore[c.lowTrait] >= 12) {
                return false
            }
        }
        return true
    })

    const candidateCharacters = remainingCharacters.map((c: ICharacter) => {
        // --- 計算基礎分數 ---
        let score = 0;
        const outer = c.outer.toUpperCase()
            , inner = c.inner.toUpperCase();
        if (outer.includes(primaryWork))
            score += 2;
        if (inner.includes(primaryNatural))
            score += 2;
        if (outer.includes(secondaryWork))
            score += 1;
        if (inner.includes(secondaryNatural))
            score += 1;
        if (outer.includes(primaryNatural))
            score += 0.5;
        if (inner.includes(primaryWork))
            score += 0.5;
        if (c.role.includes('柱'))
            score += 1;

        // --- 規則三：手動調整角色權重 ---
        // 調低權重
        if (c.name === "半天狗" || c.name === "玉壺") {
            score -= 2;
        }

        // 調高權重
        if (c.name === "我妻善逸" || c.name === "竈門禰豆子" || c.name === "嘴平伊之助") {
            score += 1;
        }
        if (c.name === "猗窩座") {
            score += 1;
        }

        return {
            ...c,
            score
        };
    })

    candidateCharacters.sort((a, b) => b.score - a.score);
    if (candidateCharacters.length) {
        return candidateCharacters.slice(0, 2)
    } else {
        return props.demonSlayerCharacters.find(c => c.name === "竈門炭治郎")
    }
}

function drawCharts(naturalScore: IScore, workScore: IScore) {
    const analysisSections = [{
        id: 'natural',
        title: "1. 你的真實風格 (核心自我)",
        scores: naturalScore,
        context: 'natural'
    }, {
        id: 'work',
        title: "2. 你的外顯模樣 (公開形象)",
        scores: workScore,
        context: 'work'
    }];

    analysisSections.forEach(setting => {
        const { scores, id } = setting
        const canvasId = `chart-${id}`;
        const canvasElement = document.getElementById(canvasId) as HTMLCanvasElement
        if (!canvasElement) {
            return
        }
        const ctx = canvasElement.getContext('2d');
        if (!ctx) {
            return
        }
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['D', 'i', 'S', 'C'],
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
        });
    })

    // if (charts[canvasId]) {
    //     charts[canvasId].destroy();
    // }
}

// function createRadarChart(canvasId, scores) {
//     const ctx = document.getElementById(canvasId).getContext('2d');
//     charts[canvasId] =
// }

</script>
<style lang="scss" scoped>
.nature__body {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}

.analysis__traitSquares {
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

@media screen and (min-width:992px) {
    .nature__body {
        display: flex;
    }

    .analysis__traitSquares {
        width: 100%;

        .trait__square {

            .square__value {
                font-size: 48px;
            }
        }
    }
}
</style>