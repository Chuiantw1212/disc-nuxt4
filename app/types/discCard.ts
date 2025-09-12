export interface IDiscCard {
    title: string,
    traits: {
        name: string,
        key: string,
        description: string,
    },
    coreTrait: {
        key: 'D' | 'I' | 'S' | 'C' | '',
        title: string,
    },
    primartTraitDescription: string,
    coreTraitDetails: string,
    secondaryTrait: 'D' | 'I' | 'S' | 'C' | '',
    scores: {
        D: number,
        I: number,
        S: number,
        C: number,
    }
}