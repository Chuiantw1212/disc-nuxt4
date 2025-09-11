<template>
    <div class="container mx-auto p-4 sm:p-6 md:p-8 max-w-4xl min-h-screen flex flex-col justify-center">
        <NuxtPage :demonSlayerCharacters="demonSlayerCharacters" :combinedAnalysisContent="combinedAnalysisContent">
        </NuxtPage>
    </div>
</template>
<script setup lang="ts">
const traitInfo = {
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

const analysisContent = {
    D: {
        natural: {
            description: "在日常生活中，您是一位天生的決策者。您喜歡掌握方向，並享受事情快速推進的感覺。",
            strengths: "您能為生活注入活力與方向感。朋友和家人常依賴您的果斷，來讓事情動起來。",
            overuse: "有時可能會因為太有效率，而忽略了身邊人悠閒放鬆的需求，顯得有些強勢。",
            shadow: "您內心可能不喜歡混亂或失控的感覺，希望能一切盡在掌握。",
            suggestion: "練習享受「沒有計畫」的時光，把主導權交給別人，感受隨遇而安的樂趣。"
        },
        work: {
            description: "在職場上，您傾向於直接、果斷並以結果為導向。您喜歡挑戰，是團隊中的火車頭。",
            strengths: "將動力專注於設定清晰目標，並迅速採取行動，成為推動項目的關鍵力量。",
            overuse: "可能會顯得缺乏耐心、要求過高或忽略他人的感受與意見。",
            shadow: "您可能害怕失去掌控權或顯得軟弱，有時會為此表現得過於強勢。",
            suggestion: "練習積極傾聽，在做決定前給予他人表達意見的空間。"
        }
    },
    I: {
        natural: {
            description: "您是朋友圈中的陽光，熱情、樂觀且享受與人相處，獨處久了會覺得無聊。",
            strengths: "您天生的感染力能輕易地讓氣氛熱絡起來，是聚會中不可或缺的靈魂人物。",
            overuse: "有時可能會因為太過興奮而忽略時間規劃或細節，或答應太多邀約。",
            shadow: "您內心深處可能害怕孤單或不被喜歡，因此會不斷地透過社交來證明自己。",
            suggestion: "嘗試規劃一些一個人的優質時光，例如看書或學習新技能，享受與自己對話。"
        },
        work: {
            description: "您是團隊的激勵者與溝通橋樑。您享受與同事互動，為工作環境帶來活力。",
            strengths: "善用您的魅力來建立人脈網絡、促進團隊合作並傳達願景。",
            overuse: "可能變得過於注重口頭表達而忽略細節的執行，或因害怕被拒絕而難以給出直接批評。",
            shadow: "陰影層面是害怕失去社會認同或被他人排斥，可能導致您過度承諾。",
            suggestion: "在投入新項目之前，花時間制定具體的執行計畫，並練習對事不對人。"
        }
    },
    S: {
        natural: {
            description: "在生活中，您是溫暖而安定的存在。您偏好熟悉的人事物，享受待在舒適圈。",
            strengths: "您是一位絕佳的傾聽者與支持者。您的耐心與穩定，讓身邊的人感到安心。",
            overuse: "可能會因為不喜歡改變而錯過新的體驗，或為了維持和諧而把自己的需求擺在最後。",
            shadow: "您內心深處害怕突如其來的變化，因為那會破壞您所珍視的穩定與安全感。",
            suggestion: "嘗試每週為自己安排一件小小的「新嘗試」，逐步擴大舒適圈。"
        },
        work: {
            description: "您是團隊中最可靠、最穩定的力量。您珍視和諧與合作，偏好以穩定的步伐完成任務。",
            strengths: "您是團隊的凝固劑。利用您的同理心來建立信任、化解衝突。",
            overuse: "可能會因為不喜歡改變而抵制新想法，或為了避免衝突而壓抑自己的意見。",
            shadow: "陰影層面是害怕突如其來的變化或失去安全感，可能讓您在決策時猶豫不決。",
            suggestion: "嘗試逐步接受小改變，並主動表達自己的想法，您的意見同樣重要。"
        }
    },
    C: {
        natural: {
            description: "在日常生活中，您是一位標準的「細節控」。您享受把事情做得精確、有條理。",
            strengths: "您的謹慎與細心，讓您在處理生活大小事時總能井井有條，避免麻煩。",
            overuse: "有時可能會因為過於專注細節，而顯得有些猶豫不決或僵化。",
            shadow: "您內心可能害怕犯錯或事情不完美。這種追求完美的傾向，是您細心背後的驅動力。",
            suggestion: "試著給自己一些「犯小錯」的空間。有時候，完成比完美更重要。"
        },
        work: {
            description: "您是團隊的品質守門員。您注重細節、有條理且追求準確性。",
            strengths: "將您的嚴謹用於品質控管、流程優化和風險評估，是不可或缺的角色。",
            overuse: "可能陷入「分析癱瘓」，過度專注於細節而延誤進度，或對他人吹毛求疵。",
            shadow: "陰影層面是害怕犯錯或受到批評，這可能使您過於保守，不願冒險。",
            suggestion: "學會區分「完美」與「足夠好」，設定合理的完成時限，並練習在資訊不完全時做決策。"
        }
    }
};
const lowScoreAnalysisContent = {
    D: {
        title: "D 低（缺乏支配性）",
        natural: "容易隨和、配合他人，但在需要替自己爭取或表達意見時，可能顯得被動。",
        work: "缺乏主導與決策力，容易依附他人，讓人覺得沒有領導力。"
    },
    I: {
        title: "i 低（缺乏影響性）",
        natural: "話不多，社交主動性低，容易被認為冷冷的。",
        work: "不擅長帶動氣氛或激勵團隊，表達影響力不足，容易被忽略。"
    },
    S: {
        title: "S 低（缺乏穩定性）",
        natural: "比較沒有耐心，不容易傾聽人抱怨或展現同理心。",
        work: "缺少耐心與持續力，團隊可能覺得不被關心。"
    },
    C: {
        title: "C 低（缺乏謹慎性）",
        natural: "隨興、不拘小節，可能亂花錢。",
        work: "對細節與流程忽略，可能出現錯誤或品質不穩定。"
    }
};
const combinedAnalysisContent = {
    Di: {
        description: "您是「進取的說服者」。兼具 D 的決斷力與 i 的熱情，能果斷推動目標，也能激勵他人。"
    },
    Dc: {
        description: "您是「堅定的執行官」。結合 D 的目標導向與 C 的嚴謹細緻，是品質與效率的雙重保障。"
    },
    Ds: {
        description: "您是「堅定的推動者」。結合 D 的決心與 S 的耐心，以堅定不移、沉穩的方式達成目標。"
    },
    iD: {
        description: "您是「熱情的發起人」。擁有 i 的感染力與 D 的行動力，善於提出新點子並迅速號召大家投入。"
    },
    iS: {
        description: "您是「溫暖的協調者」。融合 i 的社交能力與 S 的同理心，極度重視人際和諧。"
    },
    iC: {
        description: "您是「精準的溝通者」。融合 i 的熱情與 C 的嚴謹，能清晰且準確地傳達複雜資訊。"
    },
    Si: {
        description: "您是「可靠的夥伴」。具備 S 的耐心與 i 的友善，是團隊中最值得信賴的傾聽者與支持者。"
    },
    Sc: {
        description: "您是「穩健的工匠」。結合 S 的穩定可靠與 C 的注重細節，以一絲不苟的態度完成任務。"
    },
    Sd: {
        description: "您是「沉穩的領導者」。以 S 的穩定為核心，並帶有 D 的決斷力，在必要時刻會展現決心。"
    },
    Cs: {
        description: "您是「系統的守護者」。擁有 C 的分析能力與 S 的按部就班，擅長建立並維護穩定的流程。"
    },
    Ci: {
        description: "您是「客觀的影響者」。融合 C 的邏輯思維與 i 的溝通技巧，擅長用數據和事實來說服他人。"
    },
    Cd: {
        description: "您是「權威的專家」。擁有 C 的分析能力與 D 的主導性，是追求標準與真相的權威。"
    }
};
const personalizedAdviceContent = {
    highD: {
        lowI: "您目標明確(高D)，可多練習用熱情與故事(低i)來感染他人，而不僅是下達指令。",
        lowS: "您的決策迅速(高D)，若能多花時間傾聽(低S)，給予支持，決策將獲更多認同。",
        lowC: "您勇於開創(高D)，若能結合更周詳的計畫(低C)，您的成功將更加穩固。"
    },
    highI: {
        lowD: "您善於鼓舞人心(高i)，若能在關鍵時刻，更果斷地指明方向(低D)，將成為更全面的領導者。",
        lowS: "您的熱情與創意無限(高i)，若能加上更多耐心與穩定(低S)，點子將更能開花結果。",
        lowC: "您充滿魅力(高i)，若能在提案中加入精確數據與邏輯(低C)，說服力將無懈可擊。"
    },
    highS: {
        lowD: "您是團隊最可靠的後盾(高S)，請勇敢地表達您的見解與立場(低D)，溫和與堅定同樣有力量。",
        lowI: "您的耐心與支持讓人安心(高S)，可嘗試更主動地分享想法(低i)，影響力將超乎想像。",
        lowC: "您做事穩健(高S)，若能加入更多對細節的把控(低C)，執行力將更加完美。"
    },
    highC: {
        lowD: "您的嚴謹規劃無可挑剔(高C)，可適時地展現決心、推動進度(低D)，避免過度分析。",
        lowI: "您的邏輯分析出色(高C)，若能用更熱情生動的方式溝通(低i)，專業將更容易被接納。",
        lowS: "您對品質要求極高(高C)，請記得團隊合作也需要溫度與同理心(低S)，適時給予支持。"
    }
};
const demonSlayerCharacters = [{
    name: "鬼舞辻無慘",
    role: "鬼王",
    outer: "DC",
    inner: "DC",
    description: "無論內外，他都是一個以「支配」為核心、「謹慎」為手段的絕對自我主義者。為了達成自己永生的終極目標，他會用最精密無情的方式剷除一切障礙。其最鮮明的特徵是極度缺乏同理心與耐心，視他人為可隨意丟棄的棋子。",
    lowTrait: "S",
    lowTraitContext: "any"
}, {
    name: "村田",
    role: "路柱 / 凡人天花板",
    outer: "SC",
    inner: "S",
    description: "在天才與怪物們的世界中，你是那個兢兢業業、遵守紀律，並渴望團隊協作、安穩活下去的專業人士。你沒有稱霸的野心，也不愛出風頭，但卻是維繫組織運作不可或缺的關鍵螺絲釘，更重要的是，你好好活下來了！",
    isEasterEgg: true
}, {
    name: "產屋敷輝利哉",
    role: "最終決戰總指揮",
    outer: "C",
    inner: "C",
    description: "在極度的混亂與壓力下，展現出超乎年齡的冷靜、沉著與邏輯性，一切以「完美執行計畫」為最高準則。是一位從裡到外都以數據和分析為行動基礎的純粹分析師。",
    isEasterEgg: false
}, {
    name: "獪岳",
    role: "新・上弦之陸",
    outer: "D",
    inner: "D",
    description: "一個從裡到外都極度追求實力與地位的純粹支配者。他無法忍受弱小與失敗，為了證明自己的價值、獲得更高的權力，可以毫不猶豫地背叛和捨棄一切。他的所有行動，都源於對「更強」的執念。",
    isEasterEgg: false
}, {
    name: "栗花落香奈乎",
    role: "蟲柱繼子",
    outer: "C",
    inner: "SC",
    description: "外在表現得極度沉默、被動，只遵循命令，給人一種空洞的感覺。但她的內心，其實是「聽從心的聲音」的渴望與對夥伴的深厚情感，以及為此而進行嚴格修煉的堅韌。是從純粹的服從，蛻變為溫柔守護者的代表。",
    isEasterEgg: false
}, {
    name: "錆兔",
    role: "鱗瀧之徒",
    outer: "DC",
    inner: "SD",
    description: "外在表現為極度嚴苛、高標準的教官，透過不斷的挑戰與批判來激發對手的潛力。但其內心深處，是為了不再讓師父與同門悲傷的強烈守護之心，以及期望後繼者能超越自己的好勝心。",
    isEasterEgg: false
}, {
    name: "真菰",
    role: "鱗瀧之徒",
    outer: "SC",
    inner: "S",
    description: "以溫柔、耐心的方式給予陪伴和支持，同時能精準地指出他人需要修正的細節與流程。她的內心是純粹的關懷，是一位能讓人感到安心、在不知不覺中成長的引導者。",
    isEasterEgg: false
}, {
    name: "黑死牟",
    role: "上弦之壹",
    outer: "C",
    inner: "D",
    description: "外在嚴苛、理性、追求極致；內心卻被不服輸的好勝心與執念驅使。"
}, {
    name: "童磨",
    role: "上弦之貳",
    outer: "I",
    inner: "C",
    description: "總是以笑臉迎人，看似健談親切；實則內心空洞，冷酷無情且精於算計。"
}, {
    name: "猗窩座",
    role: "上弦之參",
    outer: "DC",
    inner: "S",
    description: "外在是追求至高強度的武術家，有自己的一套戰鬥準則；內心深處卻是對過往戀人的深情與愧疚。"
}, {
    name: "半天狗",
    role: "上弦之肆",
    outer: "S",
    inner: "DI",
    description: "看似膽小怕事，總在尋求同情；分裂出的情感卻是暴怒、傲慢與享樂的集合。"
}, {
    name: "玉壺",
    role: "上弦之伍",
    outer: "ID",
    inner: "C",
    description: "言行誇張、極度愛炫耀自己的藝術；內在卻是對自我價值感到自卑的藝術偏執狂。"
}, {
    name: "妓夫太郎",
    role: "上弦之陸",
    outer: "D",
    inner: "S",
    description: "充滿敵意、殘忍且佔有慾強；行為的唯一驅動力是保護妹妹，極度缺愛。"
}, {
    name: "堕姬",
    role: "上弦之陸",
    outer: "I",
    inner: "S",
    description: "驕縱、愛炫耀自己的外貌與地位；內心卻因身世而極度敏感與自卑。",
    lowTrait: "C",
    lowTraitContext: "outer"
}, {
    name: "魘夢",
    role: "下弦之壹",
    outer: "IC",
    inner: "C",
    description: "言詞戲劇化，享受挑釁對手；內在是享受操控人心的縝密計畫者。"
}, {
    name: "零餘子",
    role: "下弦之肆",
    outer: "S",
    inner: "C",
    description: "在強者面前順從且低姿態；內心是對生存的偏執，卑微但心思縝密。"
}, {
    name: "累",
    role: "下弦之伍",
    outer: "C",
    inner: "S",
    description: "用冷酷的規則來控制虛假的「家族」；內心極度渴望無法得到的真實親情。"
}, {
    name: "珠世",
    role: "醫鬼",
    outer: "C",
    inner: "S",
    description: "時刻保持冷靜、理性與謹慎；內心卻懷抱著慈悲之心，渴望自我救贖。"
}, {
    name: "愈史郎",
    role: "盜帳號駭客 / 純愛畫家",
    outer: "CD",
    inner: "SC",
    description: "外在冷漠挑剔，只在守護珠世時展現攻擊性。其內心，是對珠世絕對的忠誠與依賴，並透過極致的專注與細心來體現這份守護。他的溫柔，是深思熟慮且完美主義的。"
}, {
    name: "煉獄杏壽郎",
    role: "炎柱",
    outer: "ID",
    inner: "S",
    description: "熱情洋溢，言語充滿感染力，總是帶頭衝鋒；內心是扛起一切責任、守護後輩的溫柔長子。"
}, {
    name: "富岡義勇",
    role: "水柱",
    outer: "C",
    inner: "S",
    description: "沉默寡言、不善與人互動，看似冷漠；其實內心非常重感情，只是不懂得如何表達。",
    lowTrait: "I",
    lowTraitContext: "outer"
}, {
    name: "胡蝶忍",
    role: "蟲柱",
    outer: "IS",
    inner: "CD",
    description: "臉上總是掛著親切的笑容，看似溫柔；內心卻是隱忍著復仇之心、冷靜的戰術家。"
}, {
    name: "宇髓天元",
    role: "音柱",
    outer: "I",
    inner: "SC",
    description: "外在是極致華麗、享受成為焦點的表演藝術家。但在浮誇的言行之下，內心是對家人最深厚的守護與珍視，並透過「譜面」這種需要精密分析與觀察力的能力來應對戰鬥。他是個將藝術與精密計算完美融合的獨特存在。"
}, {
    name: "時透無一郎",
    role: "霞柱",
    outer: "C",
    inner: "I",
    description: "看似冷淡、理性且心不在焉；內在卻有著呆萌可愛、不經世事的一面。"
}, {
    name: "甘露寺蜜璃",
    role: "戀柱",
    outer: "IS",
    inner: "S",
    description: "天真浪漫且非常在乎他人感受，希望能被大家喜歡；內心深處渴望被愛與認同。"
}, {
    name: "伊黑小芭內",
    role: "蛇柱",
    outer: "CD",
    inner: "S",
    description: "總是嚴格、挑剔且冷峻；但內心深處極為柔軟，只對甘露寺一人展現真情。"
}, {
    name: "悲鳴嶼行冥",
    role: "岩柱",
    outer: "S",
    inner: "C",
    description: "外表慈悲，總是為他人著想，是鬼殺隊的領導者；但對自我要求極度嚴苛，紀律性極強。"
}, {
    name: "不死川實彌",
    role: "風柱",
    outer: "DC",
    inner: "S",
    description: "脾氣暴躁、言語充滿挑釁，同時對紀律要求極度嚴格；但在這強硬的外殼下，內心深處卻是用自己笨拙的方式，深愛並守護著家人。"
}, {
    name: "產屋敷耀哉",
    role: "鬼殺隊主公",
    outer: "S",
    inner: "SI",
    description: "外在永遠溫和、耐心，能傾聽並安撫每一個人，用極致的穩定與同理心凝聚組織。但其內心，是以這份關懷為基礎，融合了能讓最強劍士都心悅誠服的強大影響力與魅力。是一位溫柔而強大的領袖。"
}, {
    name: "神崎葵",
    role: "蝶屋護理人員",
    outer: "CD",
    inner: "SC",
    description: "外在是典型的「嚴格的護理長」。她極度遵守紀律與規則，並用嚴厲甚至有點支配性的態度來監督復健訓練。但內心深處，是對夥伴們的關懷與支持，以及希望自己能為團隊做出貢獻的責任感。她的嚴厲，是她表達關心的方式。",
    lowTrait: "I",
    lowTraitContext: "outer"
}, {
    name: "竈門炭治郎",
    role: "主角群",
    outer: "S",
    inner: "S",
    description: "無論內外都展現出溫和、顧家、重視人情的特質，是純粹的S型代表。"
}, {
    name: "竈門禰豆子",
    role: "主角群",
    outer: "S",
    inner: "D",
    description: "多數時候沉默地守護著大家；一旦進入戰鬥，會爆發出強勢果斷的攻擊。"
}, {
    name: "我妻善逸",
    role: "主角群",
    outer: "I",
    inner: "D",
    description: "外在情緒化、愛抱怨；但在無意識的關鍵時刻，會展現出快狠準的決斷力。"
}, {
    name: "嘴平伊之助",
    role: "主角群",
    outer: "D",
    inner: "I",
    description: "好勝、衝動、總是喊著「豬突猛進」；內心卻是個渴望被稱讚和認同的單純少年。",
    lowTrait: "C",
    lowTraitContext: "outer"
}, {
    name: "鱗瀧左近次",
    role: "前水柱",
    outer: "CD",
    inner: "S",
    description: "總是戴著天狗面具，沉默且嚴格；但在嚴厲的教導下，是對弟子極度關愛的溫柔師父。"
}, {
    name: "鋼鐵塚螢",
    role: "刀匠",
    outer: "D",
    inner: "C",
    description: "脾氣暴躁、極度固執，動不動就拿刀追人；但這份暴躁源於對刀劍工藝的極致專注與偏執。"
}];
</script>