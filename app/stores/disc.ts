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
    }
})