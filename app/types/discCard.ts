export interface IDiscCard {
    title: string,
    traits: string,
    primaryTrait: 'D' | 'I' | 'S' | 'C' | '',
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