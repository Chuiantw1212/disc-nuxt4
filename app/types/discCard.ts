export interface IDiscCard {
    title: string,
    traits: string,
    primaryTrait: {
        key: 'D' | 'I' | 'S' | 'C' | '',
        title: string,
    },
    primartTraitDescription: string,
    primaryTraitDetails: string,
    secondaryTrait: 'D' | 'I' | 'S' | 'C' | '',
    scores: {
        D: number,
        I: number,
        S: number,
        C: number,
    }
}