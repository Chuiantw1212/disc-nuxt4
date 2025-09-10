import { defineStore } from "pinia"

export const useDiscStore = defineStore('discStore', {
    state: () => ({
        quizData1: [] as any[],
        quizData2: [] as any[],
    }),
    actions: {
        setQuizData1(quizData: Array<any>) {
            this.quizData1 = quizData
        },
        setQuizData2(quizData: Array<any>) {
            this.quizData2 = quizData
        }
        // async fetch() {
        //     const infos = await $fetch('https://api.nuxt.com/modules/pinia')

        //     this.name = infos.name
        //     this.description = infos.description
        // }
    }
})