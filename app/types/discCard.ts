interface ILowTrait {
    title: string,
    description: string,
}

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
    coreTraitDetails: {
        description: string,
        strengths: string,
        overuse: string,
        shadow: string,
        suggestion: string,
    },
    secondaryTrait: 'D' | 'I' | 'S' | 'C' | '',
    scores: {
        D: number,
        I: number,
        S: number,
        C: number,
    },
    lowTraits: ILowTrait[]
}

export interface IQuizOption {
    text: string,
    trait: 'D' | 'I' | 'S' | 'C',
    value: string
}
export interface IScore {
    [key: string]: any,
    D: number,
    I: number,
    S: number,
    C: number
}
export interface ICharacter {
    name: string,
    role: string,
    outer: string,
    inner: string,
    description: string,
    lowTrait: string,
    lowTraitContext: string,
    isEasterEgg: boolean,
}