<template>
    <div id="result-screen" class="screen bg-white p-6 sm:p-8 rounded-xl shadow-lg active-screen">
        <div class="text-center">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-gray-800"><span id="result-name">EN Chu</span>的測驗結果</h2>
            <p class="text-gray-600 mb-8">以下是您在「真實風格」與「外顯模樣」兩種情境下的 DiSC 特質分析。</p>
        </div>

        <div id="summary-analysis-container" class="mb-8">
            <div class="bg-teal-50 p-6 rounded-lg border border-teal-200 space-y-4 text-gray-700">
                <h3 class="text-2xl font-bold text-center mb-4 text-gray-700">總結分析：真實風格 vs. 外顯模樣</h3>
                <div v-html="summaryHtml">

                </div>
            </div>
            <div v-if="isEasterEggCharacter"
                class="p-6 bg-yellow-50 border border-yellow-400 rounded-lg text-yellow-800">
                <h3 class="font-bold text-lg">您的主要風格：整合型 (Integrator)</h3>
                <p class="mt-2">您是一位極度平衡的「整合者」，在四種風格中都展現出極高的潛力。您能夠根據不同情境，靈活地展現出決斷、熱情、溫和與嚴謹等多重面貌。</p>
                <p class="mt-4 font-semibold">特別提醒：</p>
                <p class="mt-1">
                    通常我們都會有一些些的風格差距，但您的實在太平均了！這可能是您適應力極強的證明，但也可能代表在作答時不夠果決。希望您可以再試著做一次，或是帶入一些更具體的真實情境（例如：跟最要好的朋友、最討厭的主管互動時），也許能發現更鮮明的自己喔！
                </p>
            </div>
        </div>

        <div class="my-8 text-center text-gray-500 text-sm p-4 bg-gray-50 rounded-lg">
            <p>此測驗是用vibe coding完成的陽春版，目前忘形還沒學會分享，所以歡迎你截圖分享XD</p>
        </div>

        <div id="detailed-analysis-container">
            <h3 class="text-2xl font-bold text-center mb-6 text-gray-700 border-t pt-10">兩大風格下的你</h3>
            <disc-card :scores="{
                D: 24,
                I: 24,
                C: 24,
                S: 24,
            }" :primaryStyle="primaryStyle"></disc-card>
            <disc-card :scores="{
                D: 24,
                I: 24,
                C: 24,
                S: 24,
            }"></disc-card>
        </div>
        <div v-if="personalAdvice" id="growth-suggestion-container" class="mt-12" style="display: block;">
            <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
                <h3 class="text-2xl font-bold text-center mb-4 text-gray-700">個人化成長建議</h3>
                <div class="p-4 bg-blue-50/50 rounded-md border border-blue-200 text-gray-700">
                    <p>{{ personalAdvice }}</p>
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
import DiscCard from '~/components/DiscCard.client.vue'
import { Chart } from 'chart.js'
const discStore = useDiscStore()
const props = defineProps<{
    demonSlayerCharacters: ICharacter[],
    personalizedAdviceContent: any,
    combinedAnalysisContent: any,
}>()
const quizNatural = ref<any[]>([])
const quizWork = ref<any[]>([])
const summaryHtml = ref<string>('')
const isEasterEggCharacter = ref<boolean>(false)

const personalAdvice = ref<string>('')

interface IStyle {
    label: string
    color: string
    description: string
}
const primaryStyle = ref<IStyle>({
    label: "",
    color: "",
    description: "",
})

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

const traitInfo: {
    [key: string]: any
} = {
    D: {
        name: "支配型 (D)",
        shortName: "支配型",
        rgb: "34, 197, 94"
    },
    I: {
        name: "影響型 (i)",
        shortName: "影響型",
        rgb: "236, 72, 153"
    },
    S: {
        name: "穩健型 (S)",
        shortName: "穩健型",
        rgb: "59, 130, 246"
    },
    C: {
        name: "謹慎型 (C)",
        shortName: "謹慎型",
        rgb: "234, 179, 8"
    }
};

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
    const scoresNatural = calculateScore(quizNatural.value)
    const scoresWork = calculateScore(quizWork.value)
    drawCharts(scoresNatural, scoresWork)
    displayResults(scoresNatural, scoresWork)
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

function getTraitsSorted(score: IScore): [string, number][] {
    return Object.entries(score).sort(([, a], [, b]) => {
        return b - a
    });
}

function displayResults(scoresNatural: IScore, scoresWork: IScore) {
    const matchedCharacters = findCharacterMatch(scoresNatural, scoresWork)
    isEasterEggCharacter.value = false
    if (matchedCharacters[0] && matchedCharacters[0].isEasterEgg) {
        // 平均者
        isEasterEggCharacter.value = true
    } else {
        // Normal Character
        generateSummaryAnalysis(scoresNatural, scoresWork);
        generatePersonalizedAdvice(scoresWork)
    }
}

function generatePersonalizedAdvice(scoresWork: IScore) {
    const sortedWork = getTraitsSorted(scoresWork) as any
    const highTrait = sortedWork[0][0]
    const lowTrait = sortedWork[3][0];

    personalAdvice.value = ''
    if (sortedWork[0][1] - sortedWork[3][1] >= 10) {
        const adviceKey = `low${lowTrait.toUpperCase()}`;
        if (props.personalizedAdviceContent[`high${highTrait}`]?.[adviceKey]) {
            personalAdvice.value = props.personalizedAdviceContent[`high${highTrait}`][adviceKey];
        }
    }
}

function generateSummaryAnalysis(scoresNatural: IScore, scoresWork: IScore) {
    const natualTraits = getTraitsSorted(scoresNatural) as any
    const primaryNatural = natualTraits[0][0]
    const workTraits = getTraitsSorted(scoresWork) as any
    const primaryWork = workTraits[0][0]

    const opposites: {
        [key: string]: any
    } = {
        'D': 'S',
        'S': 'D',
        'I': 'C',
        'C': 'I'
    };

    // 組合內文
    summaryHtml.value = ''
    if (primaryNatural === primaryWork) {
        summaryHtml.value = `<p>您是一位 <strong>「表裡如一」</strong> 的人。您的真實風格與外顯模樣高度一致，主要都展現出 <strong>${traitInfo[primaryNatural].name}</strong> 的特質。</p><p class="mt-2">這代表您在公開場合中，能夠自在地做自己，不需要耗費太多心力去「扮演」另一個角色。這種真實性與一致性，是您建立信任感與個人魅力的重要基礎。</p>`;
    } else {
        summaryHtml.value = `<p>您是一位 <strong>「情境適應者」</strong>。您的真實風格是 <strong>${traitInfo[primaryNatural].name}</strong>，但在公開或專業場合，您會調整為 <strong>${traitInfo[primaryWork].name}</strong> 的模樣來應對環境需求。</p><p class="mt-2">這展現了您出色的彈性與適應力，但也暗示著在切換角色的過程中，可能會消耗您額外的精力。了解這兩種風格的差異，有助於您更好地管理自己的能量。</p>`;
        if (opposites[primaryNatural] === primaryWork) {
            summaryHtml.value += `<div class="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800"><strong>特別提醒：</strong> 您的風格轉變跨度極大，從 ${traitInfo[primaryNatural].shortName} 到對立的 ${traitInfo[primaryWork].shortName}。這表示您為了適應環境付出了巨大的努力，請務必在工作之餘，給予真實的自己足夠的休息與充電時間。</div>`;
        }
    }
}

function findCharacterMatch(scoresNatural: IScore, scoresWork: IScore): ICharacter[] {
    const allScoresNatural = Object.values(scoresNatural);

    // // 平均整合者
    // const maxScoreNatural = Math.max(...allScoresNatural)
    // const minScoreNatural = Math.min(...allScoresNatural)
    // if (maxScoreNatural - minScoreNatural <= 7) {
    //     const murata = props.demonSlayerCharacters.find((c: any) => c.isEasterEgg);
    //     if (murata)
    //         return [murata];
    // }

    const natualTraits = getTraitsSorted(scoresNatural) as any
    const primaryNatural = natualTraits[0][0]
    const secondaryNatural = natualTraits[1][0]

    const workTraits = getTraitsSorted(scoresWork) as any
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
                if (scoresWork['S'] <= 10 || scoresNatural['S'] <= 10) {
                    return false
                }
            } else if (c.lowTraitContext === 'outer' && scoresWork[c.lowTrait] >= 12) {
                return false
            } else if (c.lowTraitContext === 'inner' && scoresNatural[c.lowTrait] >= 12) {
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
        const character = props.demonSlayerCharacters.find(c => c.name === "竈門炭治郎")
        return character ? [character] : []
    }
}

function drawCharts(scoresNatural: IScore, scoresWork: IScore) {
    const analysisSections = [{
        id: 'natural',
        title: "1. 你的真實風格 (核心自我)",
        scores: scoresNatural,
        context: 'natural'
    }, {
        id: 'work',
        title: "2. 你的外顯模樣 (公開形象)",
        scores: scoresWork,
        context: 'work'
    }];

    analysisSections.forEach(setting => {
        const { scores, id } = setting
        // featrues
        const traits = getTraitsSorted(scores) as any
        const primaryTraitKey = traits[0][0]
        const primaryScore = traits[0][1]
        const secondaryTraitKey = traits[1][0]
        const secondaryScore = traits[1][1]

        // let styleName = 
        primaryStyle.value.label = traitInfo[primaryTraitKey].name
        primaryStyle.value.description = ''
        if (primaryScore - secondaryScore <= 8 && primaryScore > 0 && secondaryScore > 0) {
            let combinedKey = primaryTraitKey.toLowerCase() === 'i' ? 'i' + secondaryTraitKey : primaryTraitKey + secondaryTraitKey.toLowerCase();
            primaryStyle.value.label = `${primaryTraitKey}${secondaryTraitKey.toLowerCase()} 風格 (${traitInfo[primaryTraitKey].shortName}/${traitInfo[secondaryTraitKey].shortName})`;
            if (props.combinedAnalysisContent[combinedKey])
                primaryStyle.value.description = props.combinedAnalysisContent[combinedKey].description;
        }

        // draw
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
}
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

.trait__feature {
    padding: 1rem;
    background-color: rgb(249 250 251 / 0.5);
    border-width: 1px;
    border-radius: 0.375rem;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: #e5e7eb;
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