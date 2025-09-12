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

// 關鍵字／鏤空欄位介面
export interface ISummary {
    isSameTrait: boolean,
    isOpposite: boolean,
    /** 風格名稱A：原 traitInfo[primaryNatural].name */
    naturalName: string;
    /** 風格名稱B：原 traitInfo[primaryWork].name */
    workName: string;
}
